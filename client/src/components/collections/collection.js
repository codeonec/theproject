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
                        {Col && <div className="head-btn btn-del" onClick={()=>{DeleteCollection(Col._id)}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill-rule="evenodd" d="M16 1.75V3h5.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75zm-6.5 0a.25.25 0 01.25-.25h4.5a.25.25 0 01.25.25V3h-5V1.75z"></path><path d="M4.997 6.178a.75.75 0 10-1.493.144L4.916 20.92a1.75 1.75 0 001.742 1.58h10.684a1.75 1.75 0 001.742-1.581l1.413-14.597a.75.75 0 00-1.494-.144l-1.412 14.596a.25.25 0 01-.249.226H6.658a.25.25 0 01-.249-.226L4.997 6.178z"></path><path d="M9.206 7.501a.75.75 0 01.793.705l.5 8.5A.75.75 0 119 16.794l-.5-8.5a.75.75 0 01.705-.793zm6.293.793A.75.75 0 1014 8.206l-.5 8.5a.75.75 0 001.498.088l.5-8.5z"></path></svg></div>}
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