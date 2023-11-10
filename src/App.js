import {  useContext, useEffect } from "react";
import "./App.css";
import { AppContext } from "./context/AppContext";
import { Route,Routes, useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";
import CategoryPage from './pages/Category';
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";



export default function App() {

  const {fetchPosts}=useContext(AppContext);

  const [searchParams,setSearchParms]=useSearchParams();
  const location=useLocation();

  useEffect(()=>{

    const page=searchParams.get("page")??1;

    if(location.pathname.includes("tags")){
      const tag= location.pathname.split("/").at(-1).replaceAll("-"," ");
    //  console.log(tag);
      fetchPosts(Number(page),tag);
    }
    if(location.pathname.includes("categories")){
      const category= location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchPosts(Number(page),null,category);
    }
   else{
    fetchPosts(Number(page));
   }

    
  },[location.pathname,location.search])

  return <div className="min-h[100vh] h-auto relative">
   
  <Routes>
   <Route path="/" element={<Home/>}> </Route>
   <Route path="/blogs/:blogId" element={<BlogPage/>}> </Route>
   <Route path="/tags/:tag" element={<TagPage/>}> </Route>
   <Route path="/categories/:category" element={<CategoryPage/>}> </Route>
  </Routes>

    
  </div>
}
