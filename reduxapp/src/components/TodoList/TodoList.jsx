import React, { useEffect, useState } from 'react'
import {CgMathPlus} from '../../../node_modules/react-icons/cg'
import {BsTrash} from '../../../node_modules/react-icons/bs'

export const TodoList = () => {

    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        //hacemos el formato de nuestra tarea:
        const newTodo = {
            id:new Date().getTime(),
            text: todo,
            completed: false
        }
        setTodos([...todos, newTodo])
        setTodo("")
    }

    const deleteTodo=(id)=>{
        const updateTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updateTodos)
    }

  return (
    <div className="container">
        <h2>Nuestras tareas</h2>
        <h3>Ingrese tareas aqui</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='ingrese tarea aqui' value={todo} onChange={(e)=> setTodo(e.target.value)} />
            <button className='btn btn-dark'><CgMathPlus/></button>
        </form>

        {
            todos.map((todo)=> (
                <div key={todo.id}>
                    {todo.text}{""}
                    <button onClick={()=> deleteTodo(todo.id)} lassName='btn btn-dark'><BsTrash/></button>
                    
                </div>
            ))
        }

    </div>
  )
}
