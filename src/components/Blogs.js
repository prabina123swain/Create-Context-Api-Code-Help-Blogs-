import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Card from './Card'
import Spinner from './Spinner'

function Blogs() {
  const {loading,posts}=useContext(AppContext);

  return (
    <div  className="w-[60%] mx-auto my-2">
{   
   loading?(<Spinner/>):(
    posts.map((post)=>(
      <Card key={post.id}  post={post}/>
    ))
   )
}   
 </div>
  )
}

export default Blogs