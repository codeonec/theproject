import {useEffect,useState} from 'react'
import {getSavedKeys,saveData,deleteData} from '../indexeddb'
import FeedElement from '../feedElements';
const Card = ({ data }) => {

    const [savedKeys, setSaved] = useState([]);
    
    useEffect(()=>{
        const fetchSaved = async () => {
            const keys = await getSavedKeys()
            setSaved(keys)
        }
        fetchSaved() 
     },[])

    const SaveCard = async (obj) => {
        saveData(obj)
        setSaved(arr => [...arr, obj._id])
    };

    const DeleteCard = async (id) => {
        deleteData(id)
        console.log('Deleted')
        const index = savedKeys.indexOf(id)        
        if(index !== -1){
            const newList = savedKeys.filter(item => item !== id);
            setSaved(newList)
        }
    }
    

    return(
        <div>
            {/* {savedKeys} */}
            {
                data.map(obj => {
                    return <FeedElement key={obj._id} obj={obj} savedKeys={savedKeys} SaveCard={SaveCard} DeleteCard={DeleteCard} />
                })
            }      
        </div>
    )
}

export default Card