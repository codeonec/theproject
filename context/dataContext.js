import React, { useContext, useState } from "react"

const DataContext = React.createContext()

export const UseData = () => {
    return useContext(DataContext)
}

export const DataProvider = ({ children }) => {

    const [projects, setProjects] = useState([
        {
            dollar: "₹",
            image: "/pngs/icon.png",
            revenue: "6 Mn",
            price: "982.05",
            valuation: "28 Bn",
            founded: "Founded in 2010 by Mr Keval.",
            likeCount: "69K",
            percent: 9.12,
            name: "Notion",
            description: "The PEER fund thesis: a crypto-focused venture fund will outperform traditional venture capital over the next 10 years. We are investing in pre-seed, seed, series A with follow-on and focused on equity and token.",
            moreInfo: "https://www.notion.so"
        }, {
            dollar: "₹",
            image: "/pngs/icon.png",
            revenue: "6 Mn",
            price: "982.00",
            valuation: "20 Bn",
            founded: "Founded in 2010 by Mr Shah.",
            likeCount: "69K",
            percent: 9.12,
            name: "ABC",
            description: "ed on equity and token.",
        }, {
            dollar: "₹",
            image: "https://logosandtypes.com/wp-content/uploads/2020/08/reliance.svg",
            revenue: "5 Tn",
            price: "2424.40",
            valuation: "16 Tn",
            founded: "Founded in 1973 by Dhirubhai",
            likeCount: "69K",
            percent: -0.78,
            name: "Reliance",
            description: "Reliance Industries Limited is an Indian multinational conglomerate company, headquartered in Mumbai. RIL's diverse businesses include energy, petrochemicals, natural gas, retail, telecommunications, mass media, and textiles.",
        }
    ])
    const addProject = (project) => {
        setProjects(prev => {
            return [...prev, project]
        })
    }

    return (
        <DataContext.Provider value={{
            projects,
            addProject
        }}>
            {children}
        </DataContext.Provider>
    )
}