import axios from 'axios'
import { createContext, useContext, useState, useEffect } from 'react'

const DataContext = createContext()

export const useDataContext = () => {
    return useContext(DataContext)
}

export const DataProvider = props => {

    const [data, setData] = useState([]);
    const [prefs, setPrefs] = useState(() => JSON.parse(localStorage.getItem('topics')) || []);
    const topics = ['Development', 'UI design', 'AI', 'Crypto', 'Space', 'Startups', 'Science', 'Physics', 'Big Data']
    const [error, setError] = useState('')

    useEffect(()=>{
        
        setData([
            {
                _id: 1,
                text: 'Come to know this awesome tool. \n\nUnsplansh is widely used and most populars among the photographers.The largest collection of opensorce images',
                category: 'Resource',
                tool: {
                    image: 'https://unsplash.com/apple-touch-icon.png',
                    text: 'Unsplash - Largest library of stock photos and videos',
                    link: 'https://unsplash.com/',
                    linkPreview: 'https://unsplash.com/'
                },
                time: '2021-06-17T06:03:57.223+00:00'
            },
            {
                _id: 2,
                category: 'Fact',
                text: 'Give the world what it needs, world will give you what you want',
                time: '2021-06-17T06:05:16.174+00:00'
            },
            {
                _id: 3,
                category: 'Image',
                text: "Images too! Gonna have lots of fun in the advanture.",
                image: 'https://i.imgur.com/2SeqEsk.jpg',
                time: '2021-06-17T06:07:15.284+00:00'
            },
            {
                _id: 4,
                category: 'GIF',
                text: "Yeasss you're right! GIFs too! We gonna take it to the another level 🚀.",
                image: 'https://media.giphy.com/media/XUojAIMYIIOQ9tpx2s/giphy.gif',
                time: '2021-06-17T06:07:15.284+00:00'
            },
            {
                _id: 5,
                category: 'News',
                text: "Checkout the firstlook of all new Windows 11's UI",
                linkSource: {
                    image: 'https://cdn.vox-cdn.com/thumbor/Nby7h13fKy3zH2AR9_1tJhZbBCM=/0x189:2639x1571/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22660842/windows11.jpg',
                    link: 'https://www.theverge.com/2021/6/15/22535123/microsoft-windows-11-leak-screenshots-start-menu',
                    linkPreview: 'theverge.com',
                    text: 'Windows 11 leak reveals new UI, Start menu, and more'
                },
                time: '2021-06-21T12:47:55.056+00:00'
            },
            {
                _id: 6,
                category: 'Tweet',
                text: 'This is tweet\n derived from da embeded tweet function',
                time: '2021-06-21T12:47:55.056+00:00'
            },
            {
                _id: 7,
                category: 'Tweet',
                text: 'This is tweet derived from da embeded tweet function',
                time: '2021-06-21T12:47:55.056+00:00'
            }
        ])        

        const arrQuery = '?' + prefs.map(el => {
            return 'prefs=' + el;
        }).join('&').replace(/ /g,'+');

        let load = 1

        const fetchData = async () => {
            // axios.get(`http://localhost:5000/api/getdata/${load}/3${arrQuery}`).then(res => {
            //     if(res.status === 200) {
            //         console.log(res.data)
            //         setData(old => old.concat(res.data.data))
            //     }
            //     if(res.data.next) load = load +1
            //     else load = -1
            // }).catch(err => {
            //     console.log(err)
            //     setError(arr => [...arr,'An error occurred'])
            // })

            try{
                const res = await axios.get(`http://localhost:5000/api/getdata/${load}/3${arrQuery}`)
                if(res.status === 200) {
                    console.log(res.data)
                    setData(old => old.concat(res.data.data))
                }
                if(res.data.next) load = load +1
                else load = -1
            }catch(err){
                if(err.response) {
                    console.error(err)
                    setError('An error occurred')
                }else if(err.message){
                    console.error(err)
                    setError(err.message)
                }else{
                    console.error(err)
                    setError('An error occurred')
                }
            }
            
        }

        fetchData()
        
            window.onscroll = () => {
                if(Math.trunc(window.innerHeight + window.scrollY) >= document.scrollingElement.scrollHeight){
                    if(load !== -1 && load !== 1 && document.querySelector('.main-feed')) fetchData()
                }
            }

        console.log("%cInitial Render","color:#56d364;")
        

    },[prefs])

    const addInPrefs = (topic) => {
        const newArr = [...prefs, topic]
        setPrefs(newArr)
        localStorage.setItem('topics',JSON.stringify(newArr))
    }


    const removePref = (topic) => {
        const index = prefs.indexOf(topic)
        
        if(index !== -1){
            const newArr = prefs.filter(item => item !== topic);
            setPrefs(newArr)
            localStorage.setItem('topics',JSON.stringify(newArr))
        }
    }


    const clrErr  = () => {
        setError('')
    }

    // function for generate paramed url with array of prefs
    

    const Values = {
        data,
        topics,
        prefs,
        addInPrefs,
        removePref,
        error,
        clrErr
    }
    
    return(
        <DataContext.Provider value={Values}>
            {props.children}
        </DataContext.Provider>
    )
}