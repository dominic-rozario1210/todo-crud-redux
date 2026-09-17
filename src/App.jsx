import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import "./App.css"

import {
    addTodo,
    getTodos,
    updateStatus,
    editTodo,
    deleteTodo
} from './slice/TodoSlice'

const App = () => {

    const dispatch = useDispatch()

    const todos = useSelector((state) => state.todo.todos)
    const filter = useSelector((state) => state.todo.filter)

    const [isLoading, setIsLoading] = useState(false)


    
    const fetchTodos = async () => {
        try {

            setIsLoading(true)

            const response = await axios.get("/todos")

            dispatch(getTodos(response.data))

        } catch (error) {

            console.log(error)

        } finally {

            setIsLoading(false)

        }
    }



    const addTodoHandler = async (todoData) => {

        try {

            const response = await axios.post("/todos", {
                todoName: todoData.name,
                todoDesc: todoData.desc,
                status: "NotCompleted"
            })

            dispatch(addTodo(response.data))

        } catch (error) {

            console.log(error)

        }
    }



    const updateStatusHandler = async (todoData) => {

        try {

            const response = await axios.put(
                `/todos/${todoData.todoId}`,
                {
                    status: todoData.todoStatus
                }
            )

            dispatch(updateStatus({
                todoId: todoData.todoId,
                todoStatus: response.data.status
            }))

        } catch (error) {

            console.log(error)

        }
    }


    
    const editTodoHandler = async (todoData) => {

        try {

            const response = await axios.put(
                `/todos/${todoData.todoId}`,
                {
                    todoName: todoData.newName,
                    todoDesc: todoData.newDesc
                }
            )

            dispatch(editTodo({
                todoId: response.data.id,
                newName: response.data.todoName,
                newDesc: response.data.todoDesc
            }))

        } catch (error) {

            console.log(error)

        }
    }


    
    const deleteTodoHandler = async (todoId) => {

        try {

            await axios.delete(`/todos/${todoId}`)

            dispatch(deleteTodo(todoId))

        } catch (error) {

            console.log(error)

        }
    }


    
    const filteredTodos = todos.filter((todo) => {

        if (filter === "all") {
            return true
        }

        return todo.status === filter

    })


    // FETCH WHEN COMPONENT LOADS
    useEffect(() => {

        fetchTodos()

    }, [])


    return (
        <div className='container'>

            <Header
                addTodo={addTodoHandler}
            />

            <Main
                todos={filteredTodos}
                updateStatus={updateStatusHandler}
                editTodo={editTodoHandler}
                deleteTodo={deleteTodoHandler}
                isLoading={isLoading}
            />

        </div>
    )
}

export default App