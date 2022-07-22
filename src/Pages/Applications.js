import React ,{ useContext } from 'react';
import SliderWrapper from '../Components/SliderWrapper';

// context
import { appContext } from '../Context/ContextProvider';




const Applications = () => {

    const app = useContext(appContext);

  

    return (
        
    <>
    {console.log('app from api' , app)}
       
         {
                app.map(data =>  <SliderWrapper key={''} appData={data} /> )
            
         }
         
    </>
    );
};

export default Applications;