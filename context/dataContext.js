import { ThirdwebSDK } from "@3rdweb/sdk"
import { ethers } from "ethers"
import React, { useEffect, useState } from "react"

export const DataContext = React.createContext()
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
            moreInfo: "https://www.notion.so",
            contractAddress: '0xDF1047Fd9E425F8fb29aEbA58c681a618e3aB401'
        }, 
        {
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
            contractAddress: '0xfcc31571C6ae3789E000DB27e112e428C636A2cD'
        },
        {
            dollar: "₹",
            image: "/pngs/icon.png",
            revenue: "6 Mn",
            price: "982.00",
            valuation: "20 Bn",
            founded: "Founded in 2010 by Mr Shah.",
            likeCount: "69K",
            percent: 9.12,
            name: "Berkshire Jeetway",
            description: "ed on equity and token.",
            contractAddress: '0x5c8D6Ad54Ad218eB16F131d45A7b458d7aC6c04B'
        }
    ])

    const [companyTokens, setCompanyTokens] = useState([])

    useEffect(()=>{
        const sdk = new ThirdwebSDK(
            new ethers.Wallet(
                '4ef5e15a8cab4eb93bf7fe2f51a0cca699200551f04faa4b2e69cb1b55f21c71',
                ethers.getDefaultProvider('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161')
            )
        )

        projects.map(e => {
            const current = sdk.getTokenModule(e.contractAddress)
            setCompanyTokens(prev => [...prev, current])
            console.log(current)
        })

    },[projects])

    const addProject = (project) => {
        setProjects(prev => {
            return [...prev, project]
        })
        console.log(project)
    }

    const BuyTokens = async ({token, amount, receiver}) => {
        console.log('Transaction running for'+ amount)
        const res = await token.transfer(
            receiver, 
            amount.toString().concat('000000000000000000')
        )
        console.log(res)
        console.log('Transaction completed....')
    }

    const getToken = (address) => {
        let returnToken
        companyTokens.map(token => {
            if(token.address === address){
                returnToken = token
            }
        })
        console.log()
        return returnToken
    }

    const getBalance = async (token, address) => {        
        const balance = await token.balanceOf(address)
        return balance
    }

    return (
        <DataContext.Provider value={{
            projects,
            addProject,
            BuyTokens,
            getToken,
            getBalance
        }}>
            {children}
        </DataContext.Provider>
    )
}