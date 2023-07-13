import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/Api";

export const Context = createContext();

export const AppContext = (props) =>{
    const [loding, setLoding] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectCategories, setSelectCategories] = useState('New');
    const [mobileManu, setMobileManu] = useState(false);

    useEffect( ()=>{
       fetchSelectedCategoryData(selectCategories) 
    },[selectCategories]);

    const fetchSelectedCategoryData = (query) =>{
        setLoding(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            console.log(contents);
            setSearchResults(contents);
            setLoding(false)
        })
    }

    return (
        <Context.Provider value={{loding, setLoding, searchResults, setSearchResults, selectCategories, setSelectCategories, mobileManu, setMobileManu}}>
            {props.children}
        </Context.Provider>
    )

}