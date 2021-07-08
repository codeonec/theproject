
import { useDataContext } from '../datacontext'

const Prefs = () => {

    const { prefs, addInPrefs, topics, removePref } = useDataContext()

    const isSelected = (name) =>{
        if(prefs.includes(name)) return true
        else return false
    }

    return(
        <div className="content-wrapper">
            <div className="prefs-container">
                <div className="head-3 mb-16">Preferences</div>
                <div className="info-text mb-30">
                    Choose your Preferences based on your interests. Content in your feed will be displayed accordingly.
                </div>
                <div className="topics">
                    {
                        topics.map(topic => 
                                isSelected(topic)?
                                <div key={topic} onClick={()=>{removePref(topic)}} className="topic selected">
                                    {topic}
                                </div>
                                :
                                <div key={topic} onClick={()=>{addInPrefs(topic)}} className="topic">
                                    {topic}
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Prefs