import { useEffect, useState } from 'react'
import { saveCollection, getCollection } from '../indexeddb'
import {Link} from "react-router-dom"


const Pocket = () => {

    const [collections, setCollections] = useState([])
    const [addOpen, setAddOpen] = useState(false)

    useEffect(() => {
        const getCollections = async () => {
            const savedCol = await getCollection()
            setCollections(savedCol)
            console.log(savedCol)
        }
        getCollections()
    }, [])

    const CreateCollection = async (el) => {
        const c_id = await saveCollection(el)
        setCollections(ar => [...ar,{...el,...{_id: c_id}}])
    }


    const OpenCreator = () => {
        const [inputVal, setInputVal] = useState('')

        const getRandomIcon = () => {
            const emojis = ['😀','🤖','🐱‍🏍','🌏','🚀','💡','👾','👻','👽','🎨','🎈','✨','🎯','💎','🎄','🧇','🍀','🛫','🔥','❄','🌠','🌟','🌝','🌞']
            const number = Math.floor((Math.random()*(emojis.length+1) + 0))
            return emojis[number]
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
        <div className="content-wrapper">
            <div className="post-container">
                <div className="head-wrapper">
                    <div className="head-3">Your Collects</div>
                    <button onClick={() => { setAddOpen(val => !val) }} className="btn-cnt-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"></path></svg>
                        Create
                    </button>
                </div>
                <div className="collection-list list-group">
                    <Link className="collection list-group-item" to={`/collections/all`}>
                        All Items
                    </Link>
                </div>
                <div className="collection-list list-group">
                    {collections.map(obj =>
                                <Link className="list-group-item collection" key={obj._id} to={`/collections/${obj._id}`}  >
                                    <span className="collect-ico">{obj.icon}</span>{obj.name}
                                </Link>
                    )}                    
                </div>
                {collections.length === 0 && 
                <p className="info-text mt-0">Welcome to collects. You can store your kicks in different collections. Click Create on top right corner to get started.</p>}
                
                {addOpen && <OpenCreator />}
            </div>
        </div>
    )
}

export default Pocket