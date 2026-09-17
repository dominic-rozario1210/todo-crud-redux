import React from 'react'
import TodoCard from './TodoCard'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../slice/TodoSlice'

const Main = ({
    todos,
    updateStatus,
    editTodo,
    deleteTodo,
    isLoading
}) => {

    const filter = useSelector(
        (state) => state.todo.filter
    )

    const dispatch = useDispatch()


    const handleFilterChange = (e) => {

        dispatch(
            setFilter(e.target.value)
        )

    }


    return (
        <main>

            <div className='main-container'>

                <h2>My Todos</h2>

                <div className='status'>

                    <label className='status-label'>
                        Status:
                    </label>

                    <select
                        value={filter}
                        className={`status-select ${filter}`}
                        onChange={handleFilterChange}
                    >

                        <option value="all">
                            All
                        </option>

                        <option value="Completed">
                            Completed
                        </option>

                        <option value="NotCompleted">
                            Not Completed
                        </option>

                    </select>

                </div>

            </div>


            {isLoading ? (

                <h1 className='welcome'>
                    Loading...
                </h1>

            ) : todos.length === 0 ? (

                <h1 className='welcome'>
                    Welcome to Todo App
                </h1>

            ) : (

                <div className='todo-container'>

                    {todos.map((todo) => (

                        <TodoCard
                            key={todo.id}
                            todo={todo}
                            updateStatus={updateStatus}
                            editTodo={editTodo}
                            deleteTodo={deleteTodo}
                        />

                    ))}

                </div>

            )}

        </main>
    )
}

export default Main