import React, { useState } from 'react'

function TodoForm() {
    const [input,setInput]=useState("");
    const handleChange=e=>{
        setInput(e.target.value);
    }
    const handleSubmit=e=>{
        e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Add a todo"
        onChange={handleChange} />
        <button>Add a todo</button>
        </form>
    </div>
  )
}

export default TodoForm