import React,{useState, createContext} from 'react';
import {information} from './information'

export const informationContext = createContext();

const INFO = [...information]


export const InformationProvider = (props) =>{
   const [Information, setInformation] = useState(INFO);
    

return(
    <informationContext.Provider value={[Information,setInformation]}>
        {props.children}
    </informationContext.Provider>
);

}


