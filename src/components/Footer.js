import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router';

function Footer() {

  const {page,totalPages,PageChangeHandler}=useContext(AppContext);

  const navigation=useNavigate();


  return (
    <div className='flex justify-between border-2 p-2 px-3 pr-10 mt-2'>
    <div className='mx-2'>
  {    
    page>1 && <button className='px-1 border-2 rounded-full bg-slate-400' onClick={()=>PageChangeHandler(page-1)}>Previous</button>
   }
   {
    page<totalPages &&   <button className='px-1 border-2 rounded-full bg-slate-400' onClick={()=>PageChangeHandler(page+1)}>Next</button>
   }
    </div>
    <div>
      <p>{page} out of {totalPages}</p>
    </div>
    </div>
  )
}

export default Footer