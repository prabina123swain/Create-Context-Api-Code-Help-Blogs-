import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Category = () => {
    const navigation=useNavigate();
    const location=useLocation();
    const Category=location.pathname.split("/").at(-1);
  return (
    <div>
    <Navbar/>
    <div  className="w-[60%] mx-auto my-2">
    <button onClick={()=>navigation(-1)} className='border-2 border-slate-500 rounded-md px-1 py-1 hover:scale-105 transition-all duration-200 hover:font-bold'>
        Back
    </button><br></br>
       <span >Category</span>
       <span className='mx-3 font-bold text-sm'>#{Category}</span>
    </div>
    <Blogs/>
    <Footer/>
    </div>
  )
}

export default Category