import { useState, useMemo,useEffect } from "react";
import {getCollection,saveCollection} from './indexeddb'
import UnsplashIco from './assets/unsplash_ico.svg'
import IGIco from './assets/ig_ico.svg'
import RedditIco from './assets/reddit_ico.svg'
import TWIco from './assets/tw_ico.svg'
import ReadsIco from './assets/reads_ico.svg'
import ResourceIco from './assets/resource_ico.svg'
import ArticleIco from './assets/article_ico.svg'
import ImageIco from './assets/image_ico.svg'

const FeedElement = ({ obj, del, savedKeys, SaveCard, DeleteCard }) => {


    const [popOver, setPopover] = useState(false)

    // ------------------
    // Save Popover Start
    // ------------------
    const SavePopOver = () => {
        const [collects, setCollects] = useState([])
        const [loading, setLoading] = useState(false)
        const [addOpen, setAddOpen] = useState(false)

        useEffect(()=>{
            const getColls = async () => {
                setLoading(true)
                const colls = await getCollection()
                setCollects(colls)
                console.log(colls)
                setLoading(false)
            }
            getColls()
        },[])

        const saveEl = (id) => {
            const finalEl = { ...obj, ...{ c_id: id } }
            console.log(finalEl)
            SaveCard(finalEl)
            setPopover(val => !val)
        }

        const OpenCreator = () => {
            const [inputVal, setInputVal] = useState('')
    
            const getRandomIcon = () => {
                const emojis = ['😀','🤖','🐱‍🏍','🌏','🚀','💡','👾','👻','👽','🎨','🎈','✨','🎯','💎','🎄','🧇','🍀','🛫','🔥','🌠','🌟','🌝','🌞']
                const number = Math.floor((Math.random()*(emojis.length) + 0))
                return emojis[number]
            }
            const CreateCollection = async (el) => {
                const c_id = await saveCollection(el)
                setCollects(ar => [...ar,{...el,...{_id: c_id}}])
            }
            const subMission = () => {
                if(inputVal.length > 0){
                    CreateCollection({name: inputVal, icon: getRandomIcon()})
                    setAddOpen(val => !val)
                }else{
                    console.error('Give Name')
                }
            }
            
            return(
                <div className="save-popover">
                    <div className="popover-wrapper">
                        <div className="popover-top">
                            <div className="popover-head">
                                <div className="head-4">Create Collection</div>
                                <div className="popout" onClick={()=>{setAddOpen(val=>!val)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
                                </div>
                            </div>
                        </div>
                        <div className="popover-input-group">
                            <input type='text' placeholder='Enter Name' onChange={(e)=>{setInputVal(e.target.value)}} />
                            <button onClick={()=>{subMission()}}>Create</button>
                        </div>
                        
                    </div>
                </div>
            )
        } 

        return (
            <div className="save-popover">
                <div className="popover-wrapper">
                        <div className="popover-top">
                            <div className="popover-head">
                                <div className="head-4">Save to Collects</div>
                                <button onClick={() => { setAddOpen(val => !val) }} className="btn-cnt-lg pop-add">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"></path></svg>
                                    Create
                                </button>
                                <div className="popout" onClick={()=>{setPopover(val=>!val)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
                                </div>
                            </div>
                            <div className="info-text popover-dsc">Select collection to save</div>
                        </div>
                    {/* <button className="popover-save-btn" onClick={() => { SaveCard(finalObj); setPopover(val => !val); }}>Save</button> */}
                    <div className="list-group">
                        { loading? 'Loading' : collects.map(el => {
                            return (
                            <div key={el._id} className="popover-collect-el list-group-item" onClick={()=>{saveEl(el._id)}}>
                                <span className="el-icon">{el.icon}</span>{el.name}
                            </div>)
                        })}
                    </div>
                    {collects.length === 0 && <div className="info-text popover-empty">You don't have any collection create collection to continue</div>}
                    {addOpen && <OpenCreator />}
                </div>
            </div>
        )
    }

    // ------------------
    // Save Popover End
    // ------------------

    const MemoPopover = useMemo(() => {
        return <SavePopOver/>
    }, [])

    const ParseDate = (val) => {
        const d = new Date(val)
        return d.toLocaleString('default', { month: 'long' }) + ' ' + d.getDate()
    }

    return (
        <div className='post-card' key={obj._id}>
            <div className="feed-element-header">
                {obj.category === 'Tweet' && <div className='category-ico'><img src={TWIco} alt='TW'/></div>}
                {obj.category === 'Unsplash' && <div className='category-ico'><img src={UnsplashIco} alt='US'/></div>}
                {obj.category === 'Instagram' && <div className='category-ico'><img src={IGIco} alt='IG'/></div>}
                {obj.category === 'Reddit' && <div className='category-ico'><img src={RedditIco} alt='RD'/></div>}
                {obj.category === 'Reads' && <div className='category-ico'><img src={ReadsIco} alt='RE'/></div>}
                {obj.category === 'Resource' && <div className='category-ico'><img src={ResourceIco} alt='RS'/></div>}
                {obj.category === 'Article' && <div className='category-ico'><img src={ArticleIco} alt='AR'/></div>}
                {obj.category === 'Image' && <div className='category-ico'><img src={ImageIco} alt='IMG'/></div>}
                <div className="category-label">
                    {obj.category}
                </div>                
                {obj.topic && <div className="topic-label">&nbsp;in <span>{obj.topic}</span></div>}
                {obj.source && <a className='header-source-lnk' href={obj.source} target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M14.78 3.653a3.936 3.936 0 115.567 5.567l-3.627 3.627a3.936 3.936 0 01-5.88-.353.75.75 0 00-1.18.928 5.436 5.436 0 008.12.486l3.628-3.628a5.436 5.436 0 10-7.688-7.688l-3 3a.75.75 0 001.06 1.061l3-3z"></path><path d="M7.28 11.153a3.936 3.936 0 015.88.353.75.75 0 001.18-.928 5.436 5.436 0 00-8.12-.486L2.592 13.72a5.436 5.436 0 107.688 7.688l3-3a.75.75 0 10-1.06-1.06l-3 3a3.936 3.936 0 01-5.567-5.568l3.627-3.627z"></path></svg></a>}
            </div>
            <div className="post-body" dangerouslySetInnerHTML={{ __html: obj.text.replaceAll('\n', '<br/>') }}></div>
            {obj.image &&
                <div className="img-container">
                    <img src={obj.image} alt={obj.category}></img>
                </div>}
            {
                obj.tool &&
                <a className="tool-link" href={obj.tool.link} target='__blank'>
                    <div className="tool-tile">
                        <img height='75' src={obj.tool.image} alt={obj.category} />
                        <div className="tool-body">
                            <div className="tool-text">{obj.tool.text}</div>
                            <div className="tool-link">{obj.tool.linkPreview}</div>
                        </div>
                    </div>
                </a>
            }
            {
                obj.linkSource &&
                <a href={obj.linkSource.link} className="link-source" target='__blank'>
                    <div className="link-banner">
                        <img src={obj.linkSource.image} alt={obj.category}></img>
                        <div className="link-source-text">{obj.linkSource.text}</div>
                        <div className="source-link">{obj.linkSource.linkPreview}</div>
                    </div>
                </a>
            }
            {/* {obj.tweet?<div dangerouslySetInnerHTML={{ __html: obj.tweet}}></div>:null} */}
            <div className="card-footer">
                {/* <ParseDate val={obj.time} /> */}
                <div className="post-time">{ParseDate(obj.time)}</div>
                {del ?
                    <button className="delete-btn-2" onClick={() => { DeleteCard(obj._id) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fillRule="evenodd" d="M16 1.75V3h5.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75zm-6.5 0a.25.25 0 01.25-.25h4.5a.25.25 0 01.25.25V3h-5V1.75z"></path><path d="M4.997 6.178a.75.75 0 10-1.493.144L4.916 20.92a1.75 1.75 0 001.742 1.58h10.684a1.75 1.75 0 001.742-1.581l1.413-14.597a.75.75 0 00-1.494-.144l-1.412 14.596a.25.25 0 01-.249.226H6.658a.25.25 0 01-.249-.226L4.997 6.178z"></path><path d="M9.206 7.501a.75.75 0 01.793.705l.5 8.5A.75.75 0 119 16.794l-.5-8.5a.75.75 0 01.705-.793zm6.293.793A.75.75 0 1014 8.206l-.5 8.5a.75.75 0 001.498.088l.5-8.5z"></path></svg>
                    </button> :

                    savedKeys.includes(obj._id) ?
                        <button className="delete-btn" onClick={() => { DeleteCard(obj._id) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="18" height="18"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                        </button>
                        :
                        <button className="save-btn" onClick={ () => { setPopover(val => !val); }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="18" height="18"><path fillRule="evenodd" d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"></path></svg>
                        </button>

                }

            </div>
            <div id="yi"></div>
            {popOver && MemoPopover}
            {obj.error && 
                <div className="post-error">
                    <div className="post-err-ico">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M13 17.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-8.25a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5z"></path><path fillRule="evenodd" d="M9.836 3.244c.963-1.665 3.365-1.665 4.328 0l8.967 15.504c.963 1.667-.24 3.752-2.165 3.752H3.034c-1.926 0-3.128-2.085-2.165-3.752L9.836 3.244zm3.03.751a1 1 0 00-1.732 0L2.168 19.499A1 1 0 003.034 21h17.932a1 1 0 00.866-1.5L12.866 3.994z"></path></svg>
                    </div>
                    <div className="err-msg">
                        {obj.error.message}
                    </div>
                </div>
            }
        </div>
    )
}

export default FeedElement