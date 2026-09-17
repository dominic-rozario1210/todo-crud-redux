import React, { useState } from 'react'

const TodoCard = ({
    todo,
    updateStatus,
    editTodo,
    deleteTodo
}) => {

    const [isEdit, setIsEdit] = useState(false)

    const [todoName, setTodoName] = useState(
        todo.todoName
    )

    const [todoDesc, setTodoDesc] = useState(
        todo.todoDesc
    )


    const handleUpdate = () => {

        editTodo({
            todoId: todo.id,
            newName: todoName,
            newDesc: todoDesc
        })

        setIsEdit(false)
    }


    return (

        <div className='todoCard'>

            {isEdit ? (

                <div className='edit-container'>

                    <h3>Name:</h3>

                    <input
                        type="text"
                        value={todoName}
                        onChange={(e) =>
                            setTodoName(e.target.value)
                        }
                    />

                    <p>Description:</p>

                    <input
                        type="text"
                        value={todoDesc}
                        onChange={(e) =>
                            setTodoDesc(e.target.value)
                        }
                    />

                </div>

            ) : (

                <>
                    <h3>
                        Name: {todo.todoName}
                    </h3>

                    <p>
                        Description: {todo.todoDesc}
                    </p>
                </>

            )}


            <div className='card-status'>

                <label
                    className={`status-label ${todo.status}`}
                >
                    Status:
                </label>


                <select
                    value={todo.status}
                    className={`status-select ${todo.status}`}

                    onChange={(e) => {

                        updateStatus({
                            todoId: todo.id,
                            todoStatus: e.target.value
                        })

                    }}
                >

                    <option value="Completed">
                        Completed
                    </option>

                    <option value="NotCompleted">
                        Not Completed
                    </option>

                </select>


                {isEdit && (

                    <button
                        className='update-btn'
                        onClick={handleUpdate}
                    >
                        Update
                    </button>

                )}

            </div>


            <div className='card-btn'>

                <button
                    className='card-btn1'
                    onClick={() => setIsEdit(true)}
                >
                    Edit
                </button>


                <button
                    className='card-btn2'
                    onClick={() => deleteTodo(todo.id)}
                >
                    Delete
                </button>

            </div>

        </div>
    )
}

export default TodoCard