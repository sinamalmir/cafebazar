import React ,{useState,useEffect} from "react";


// api
import { getData } from "./service/api";
// components
import Routes from "./Components/Routes";
import FooterMobile from "./Components/Footer/FooterMobile";
import FooterDesktop from "./Components/Footer/FooterDesktop";
import HeaderMobile from './Components/Header/HeaderMobile'
import HeaderDesktop from './Components/Header/HeaderDesktop'

// context 
import ContextProvider from "./Context/ContextProvider";

function App() {

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     const data = await getData();
  //     console.log(data.result.singleReply.getPageBodyReply.pageBody.rows);
  //   }

  //   fetchAPI()

  // },[])


  return (     
    <ContextProvider>  
        <HeaderDesktop />
        <HeaderMobile />
          <Routes />
        <FooterMobile />
        <FooterDesktop />
    </ContextProvider>
  );
}

export default App;
