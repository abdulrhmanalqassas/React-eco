import React,{useState} from "react";
import "./NewTodoForm.css"
export default function NewTodoForm(){
    const [inputValue,setInputValue]= useState("")
    return (
        <div  className="new-todo-form">
            <input  className="new-todo-input"
            type="text"
            placeholder="type your new todo here"
            value={inputValue}
             onChange={(e)=>setInputValue(e.target.value)} >
            </input>
            <button className="new-todo-button" >Add todo</button>

        </div>
    )
}