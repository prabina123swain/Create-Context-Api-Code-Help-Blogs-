import React from 'react'
import { NavLink } from 'react-router-dom';

function Card(props) {
     let post=props.post;
     let category=post.category.replaceAll(" ","-");
     //console.log(category);
    // console.log(post);
  return (
    <div >
     <h3 className='font-bold pt-3'>
     <NavLink to={`/blogs/${post.id}`}>  {post.title} </NavLink> </h3>
     <p className='text-sm'> 
     By<span>{post.author}</span> on{" "}
   
     <span className='mx-2 text-xs '>
      <NavLink to={`/categories/${category}`}>{post.category}</NavLink>
     </span> </p>

     <p className='mb-2 '>Posted On {post.date}</p>

     <p className='text-xs'>{post.content}</p>
     {
        post.tags.map((tag,index)=>(
           
            <span key={index} className='text-[blue] mx-1 underline text-xs'>
            <NavLink to={`/tags/${tag.replaceAll(" ","-")}`}>{tag}</NavLink></span>
        ))
     }
    </div>
  )
}

export default Card

// "title":"10 AI Trends to Watch in 2023",
// "author":"Jane Doe",
// "date":"2023-01-02",
// "category":"AI",
// "tags":[
//    "AI",
//    "Machine Learning",
//    "Deep Learning",
//    "Neural Networks",
//    "Natural Language Processing"
// ],
// "content":"As we enter a new year, it's important to take stock of where AI is heading. Here are 10 trends to watch in 2023, including the rise of responsible AI, the use of AI in personalized medicine, and the impact of quantum computing on AI algorithms.",
// "id":"BLOG100",