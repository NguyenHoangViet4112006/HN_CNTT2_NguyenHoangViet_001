import React from "react";

export default function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <div className="flex justify-between items-center bg-red-200 text-black p-2 mb-2">
        <span className={todo.completed ? "line-through opacity-70" : ""}>
            {todo.text}
        </span>
        <div className="flex gap-2 items-center">
            <input
            type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)}/>
            <button onClick={() => onDelete(todo.id)} className="bg-red-500 text-white px-3 py-1">Xóa</button>
        </div>
        </div>
    );
}