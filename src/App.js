import React ,{useState,useEffect} from "react";

import { getData } from "./service/api";

function App() {

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getData();
      console.log(data.result.singleReply.getPageBodyReply.pageBody.rows);
    }

    fetchAPI()

  },[])


  return (
    <div className="App">
      helo
    </div>
  );
}

export default App;
