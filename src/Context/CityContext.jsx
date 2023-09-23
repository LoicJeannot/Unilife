import React, {createContext, useState, useEffect} from 'react'

export const CityContext = createContext();

function CityContextProvider(props) {
    const [city, setCity] = useState("");
    useEffect(()=>{
        const storedCity=localStorage.getItem("city")
        if(city){
            setCity(JSON.parse(storedCity))
        }
    }, []
    )
  return (
    <CityContext.Provider value={{city, setCity}}> {props.children} </CityContext.Provider>
  )
}

export default CityContextProvider