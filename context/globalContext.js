import {createContext, useEffect ,useState } from 'react';
import {useRouter} from 'next/router'

export const GlobalContext = createContext();
export const GlobalProvider =({children})=>{ 
    const [appStatus,setAppStatus] = useState('loading')
    const[currentAccount,setCurrentAccount] = useState('')

    const router = useRouter()
    
    useEffect(()=>{
        checkIfWalletIsConnected()
        window.ethereum.on('accountsChanged', (accounts) => {
            // If user has locked/logout from MetaMask, this resets the accounts array to empty
            if (!accounts.length) {
                router.push('/sign_in')
            }
        });
    },[])




       const checkIfWalletIsConnected = async()=>{
        if(!window.ethereum) return setAppStatus('noMetaMask')

        try {
           const addressArrey =  await window.ethereum.request({
               method:'eth_accounts',
           })
           if(addressArrey.length>0){
               setAppStatus('connected')
               setCurrentAccount(addressArrey[0])
           }else{
               //notconnected
               router.push('/sign_in')
               setAppStatus('notConnected')
           }
        } catch (error) {
            console.log(error)
        }
       }


       const connectToWallet = async()=>{
           if(!window.ethereum) return setAppStatus('noMetaMask')
           try {
               setAppStatus('loading')

               const addressArrey = await window.ethereum.request({
                   method:'eth_requestAccounts',
               })

               if(addressArrey.length>0){
                   setCurrentAccount(addressArrey[0])
                   router.push('/')
               }else{
                   router.push('/sign_in')
                   setAppStatus('notConnected')
               }
               
           } catch (error) {
               setAppStatus('error')
           }
       }

    return(
        <GlobalContext.Provider value={{appStatus,currentAccount,connectToWallet}}>
            {children}
        </GlobalContext.Provider>
    )
}