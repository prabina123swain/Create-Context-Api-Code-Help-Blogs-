import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Card from '../components/Card';
import Spinner from '../components/Spinner';

const BlogPage = () => {
  let newUrl="https://codehelp-apis.vercel.app/api/";
  const [blog,setBlog]=useState(null);
  const[relatedBlogs,setRelatedBlogs]=useState([]);
  const location=useLocation();
  const navigation=useNavigate();
  const blogId=location.pathname.split('/').at(-1);
  const {setLoading}=useContext(AppContext);

  async function ftechRelatedBlog(){
    setLoading(true);
    let url=`${newUrl}get-blogs?blogId=${blogId}`;
    console.log(url);
    try{
      const res=await fetch(url);
      const data=await res.json();
      setBlog(data.posts);
      console.log(blog);
     // setRelatedBlogs(data.relatedBlogs)
    }
    catch(e){
      console.log("Bro Error in fetching data in blogId");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    if(blogId){
      ftechRelatedBlog()
    }
  },[location.pathname])

  let post=blog;
  console.log(post);
  return (
    <div>
     <div  className="w-[60%] mx-auto my-2">
    <button onClick={()=>navigation(-1)} className='border-2 border-slate-500 rounded-md px-1 py-1 hover:scale-105 transition-all duration-200 hover:font-bold'>
        Back
    </button><br></br>
    </div>
   {/* <Card post={post}/> */}
    {/*<div  className="w-[60%] mx-auto my-2">
{   
   loading?(<Spinner/>):(
    relatedBlogs.map((post)=>(
      <Card key={post.id}  post={post}/>
    ))
   )
}   </div> */}

    </div>
  )
}

export default BlogPage