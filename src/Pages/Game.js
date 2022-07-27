import React ,{ useContext } from 'react';
import SliderWrapper from '../Components/SliderWrapper';

// context
import { appContext } from '../Context/ContextProvider';




const Game = () => {

    const app = useContext(appContext);

    const newApp1 = app.splice(0,1);
    const newApp2 = app.splice(0,1);
    const newApp3 = app.splice(4,1);
    const newApp4 = app.splice(6,1);
    const newApp5 = app.splice(6,1);
    const newApp6 = app.pop();


    return (
        
    <>
    {/* {console.log('app from api' , app)} */}
    {/* {console.log('app remove 1 element from api' , app)} */}



       
         {
                app.map(data =>  <SliderWrapper key={data.simpleAppList.title} appData={data} /> )
            
         }
         
    </>
    );
};

export default Game;