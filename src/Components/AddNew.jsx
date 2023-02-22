import React, { useState } from 'react'
import '../App.css'

const AddNew = ({add,setShow}) => {
  const [NewMovie, setNewMovie] = useState({name:"",about:"",url:"",rating:0});
  return (
    <div className='container' style={{marginRight:"0",marginLeft:"0",paddingRight:"0",paddingLeft:"0",width:"1400px",maxWidth:"2000px"}}>
  <div className='addBox' > 
  <span  onClick={()=>setShow(false)}>x</span>
  <h2>Add New Movie</h2>
    <input  type="string" placeholder="Movie Name" onChange={e=>setNewMovie({...NewMovie,name:e.target.value})}/>
    <input  type="string" placeholder="Movie Description" onChange={e=>setNewMovie({...NewMovie,about:e.target.value})}/>
    <input  type="string" placeholder="Poster URL" onChange={e=>setNewMovie({...NewMovie,url:e.target.value})}/>
    <input  type="number" min="0" max="5" placeholder="Movie Rating" onChange={e=>setNewMovie({...NewMovie,rating:e.target.value})}/>
    <div>
      <button onClick={()=>{add(NewMovie);setShow(false);}}>Add</button>
      <button onClick={()=>setShow(false)}>Cancel</button>
    </div>
    </div>
    </div>
  )
}

export default AddNew