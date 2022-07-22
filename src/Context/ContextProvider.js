import React , { createContext , useState , useEffect } from 'react';

// api
import { getData } from "../service/api";

// make context 
export const appContext = createContext();


const ContextProvider = ({children}) => {

    const [app , setApp] = useState([]);

    useEffect(() => {
       
        const fetchAPI = async () => {
           setApp(await getData());
        // console.log(data.result.singleReply.getPageBodyReply.pageBody.rows);
        }

        fetchAPI()

    },[])

    



    return (
        <appContext.Provider value={app}>
            {children}
        </appContext.Provider>
    );
};

export default ContextProvider;