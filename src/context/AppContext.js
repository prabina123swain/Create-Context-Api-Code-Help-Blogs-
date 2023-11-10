import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router";

//step1
export const AppContext = createContext();


export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigation=useNavigate();
    //data filling pending
    

 async function fetchPosts(page=1,tag=null,category=null){

    let url = `${baseUrl}?page=${page}`;

    if(tag){
        url+=`&tag=${tag}`;
    }
   if(category){
        url+=`&category=${category}`;
   }

    setLoading(true);
    try{
        const output=await fetch(url);
        let data=await output.json();
       // console.log("Data Fecthing...",data);
        setPage(data.page);
        setTotalPages(data.totalPages);
        setPosts(data.posts);
    }
    catch(e){
        console.log("bro Error in data fetching");
        setPage(1);
        setTotalPages(null);
        setPosts([])
    }

     setLoading(false);
    }

 function PageChangeHandler(page){
    navigation({search: `?pages=${page}`})
    setPage(page);
 }


    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchPosts,
        PageChangeHandler,
    };

   
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}