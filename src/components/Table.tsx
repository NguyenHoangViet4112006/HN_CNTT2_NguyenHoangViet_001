import React, { useState, useEffect } from 'react'
import Table from "./AddTask"
export default function Table() {
    
    const[task, setTask]=useState([
        {
            text: 'todo list',
            completed: true,
        },
        {
            text: 'todo list 2',
            completed: false
        }
    ]);
    const [text, setText]= useState('');

    const handleSubmit=(event)=>{
        event.preventDefault();
        event.target.value();
    };
    return (
        <div className="place-items-center">
            <div className="bg-red-400 h-[400px] w-[400px] text-white place-items-center" onSubmit={handleSubmit}>
            <div>
                <h2 className="text-[32px]">Todo List</h2>
                <p className="border-b">Get things done, one item at a time</p>
            </div>
            <div className="my-25">
                <input type="checkbox" />
            </div>
            <div>
                <p className="text-[20px] text-#f9f4f2">Add to the todo list</p>
                <div className="gap-10">
                <input type="text" className="bg-white border-2 text-black placeholder: text-white placeholder: italic
                " placeholder="search"/>
                <button type="submit" className="border-2 text-white">ADD ITEM</button>
                </div>
            </div>
        </div>
        </div>

    )
}