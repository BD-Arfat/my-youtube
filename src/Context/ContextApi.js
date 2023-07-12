import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/Api";

const Context = createContext();

export const AppContext = (props) =>{
    const [loding, setLoding] = useState(false);
    const [searchResults, setSearchResults] = useState(false);
    const [selectCategories, setSelectCategories] = useState(false);
    const [mobileManu, setMobileManu] = useState(false);

    useEffect( ()=>{
       fetchSelectedCategoryData(selectCategories) 
    },[selectCategories]);

    const fetchSelectedCategoryData = (query) =>{
        setLoding(true);
        fetchDataFromApi(`search/?q=${query}`).then((res)=>{
            console.log(res);
            // setSearchResults(res);
            setLoding(false)
        })
    }

    return (
        <Context.Provider value={{loding, setLoding, searchResults, setSearchResults, selectCategories, setSelectCategories, mobileManu, setMobileManu}}>
            {props.children}
        </Context.Provider>
    )

}