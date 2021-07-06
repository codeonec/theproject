import { useEffect,useState } from 'react'
import {getCollectionItems,deleteData,getSavedData,deleteCollection} from '../indexeddb'
import FeedElement from '../feedElements'
import { Link, useHistory } from 'react-router-dom'

export const Collection = ({match}) => {

    const [ColData,setColData] = useState([])
    const [Col,setCol] = useState()
    const history = useHistory()
    

    useEffect(()=>{
        const setData = async () => {
            try{
                const {data,collection} = await getCollectionItems(parseInt(match.params.id))
                setColData(data)
                setCol(collection)
            }catch(err){
                console.log(err)
            }
        }
        setData()
    },[match.params.id])

    const DeleteItem = async (_id) => {
        deleteData(_id)
        console.log('deleted')
        const index = ColData.findIndex(o => o._id === _id)

        if (index !== -1) {
            const newList = ColData.filter(item => item._id !== _id);
            setColData(newList)
        }
    }

    
    const DeleteCollection = (_id) => {
        deleteCollection(_id)
        console.log('Collection deleted')
        history.push('/collections')
    }

    return(
        <div className="content-wrapper">
            <div className="post-container">
                <div className="head-wrapper mb-24">
                    <div className="flx-vr-cntr">
                        <Link to='/collections' className="head-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fillRule="evenodd" d="M10.78 19.03a.75.75 0 01-1.06 0l-6.25-6.25a.75.75 0 010-1.06l6.25-6.25a.75.75 0 111.06 1.06L5.81 11.5h14.44a.75.75 0 010 1.5H5.81l4.97 4.97a.75.75 0 010 1.06z"></path></svg>
                        </Link>
                        <div className="head-3 flx-vr-cntr" style={{marginLeft: 'auto'}}><span className="head-ico">{Col && Col.icon}</span>&nbsp;&nbsp;{Col ? Col.name : 'Not Found'}</div>
                        {Col && <div className="head-btn btn-del" onClick={()=>{DeleteCollection(Col._id)}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path></svg></div>}
                    </div>
                </div>
                {Col ? ColData.map(obj => 
                        <FeedElement key={obj._id} obj={obj} del={true} DeleteCard={DeleteItem} />
                    ):
                    <div>Not Found</div>
                }
                {Col && ColData.length === 0 && <p className="info-text">Collection is empty add items to fill it with Joy 😉</p>}
            </div>
        </div>
    )
}

export const CollectionAll = () => {
    const [ColData,setColData] = useState([])

    useEffect(()=>{
        const setData = async () => {
            const data = await getSavedData()
            setColData(data)
        }
        setData()
    },[])

    const DeleteItem = async (_id) => {
        deleteData(_id)
        console.log('deleted')
        const index = ColData.findIndex(o => o._id === _id)

        if (index !== -1) {
            const newList = ColData.filter(item => item._id !== _id);
            setColData(newList)
        }
    }

    return(
        <div className="content-wrapper">
            <div className="post-container">
                <div className="head-wrapper mb-24">
                    <div className="flx-vr-cntr">
                        <Link to='/collections' className="head-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fillRule="evenodd" d="M10.78 19.03a.75.75 0 01-1.06 0l-6.25-6.25a.75.75 0 010-1.06l6.25-6.25a.75.75 0 111.06 1.06L5.81 11.5h14.44a.75.75 0 010 1.5H5.81l4.97 4.97a.75.75 0 010 1.06z"></path></svg>
                        </Link>
                        <div className="head-3 flx-vr-cntr">All Collects</div>
                    </div>
                </div>
                {ColData.map(obj => 
                    <FeedElement key={obj._id} obj={obj} del={true} DeleteCard={DeleteItem} />
                )}
                {ColData.length === 0 && <p className="info-text">All saved kicks will appear here. You can also find items of deleted collections here. </p>}
            </div>
        </div>
    )
}