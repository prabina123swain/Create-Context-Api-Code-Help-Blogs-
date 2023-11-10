import React from 'react'
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
    <Navbar/>
  <div >
  <Blogs/>
  </div>
  <div className="mt-5">
    <Footer></Footer>
  </div>
    </div>
  )
}

export default Home