import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

export default function TodoApp() {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });
    const [text, setText]=useState("");
    const [moveDoneLast, setMoveDoneLast] = useState(false);
    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    const addTodo = () =>{
        if (!text.trim()) return;
        setTodos([
        ...todos,
        { id: Date.now(), text: text.trim(), completed: false },
        ]);
        setText("");
    };
    const toggleTodo = (id) => {
        const updated = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updated);
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const orderedTodos = moveDoneLast
        ? [...todos.filter((t) => !t.completed), ...todos.filter((t) => t.completed)]
        : todos;

    return (
        <div className="max-w-md  bg-red-400 text-white p-6">
        <h1 className="text-[30px] font-bold">Todo List</h1>
        <p className="mb-4">Get things done, one item at a time</p>

        <TodoList todos={orderedTodos} onToggle={toggleTodo} onDelete={deleteTodo} />

        <div className="mt-4">
            <label className="flex items-center gap-2">
            <input
                type="checkbox"
                checked={moveDoneLast}
                onChange={() => setMoveDoneLast(!moveDoneLast)}
            />
            <span>Move done items at the end?</span>
            </label>
        </div>

        <div className="text-[20px] mt-4">Add to the todo list</div>
        <div className="flex mt-2">
            <input
            type="text" value={text} onChange={(e) => setText(e.target.value)} className="flex-1 p-2 bg-white text-black"/><button onClick={addTodo} className="px-4 bg-red-600 hover:bg-red-700">ADD ITEM</button>
        </div>
        </div>
    );
}