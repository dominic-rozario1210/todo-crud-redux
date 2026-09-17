import React, { useState } from 'react'

const Header = ({ addTodo }) => {

    const [todoName, setTodoName] = useState("")
    const [todoDesc, setTodoDesc] = useState("")


    const handleSubmit = () => {

        if (!todoName.trim()) {
            return
        }

        addTodo({
            name: todoName,
            desc: todoDesc
        })

        setTodoName("")
        setTodoDesc("")
    }


    return (
        <div className='header-container'>

            <h1>My Todo</h1>

            <div className='input-form'>

                <div className='input-group'>

                    <label>Task</label>

                    <input
                        type="text"
                        value={todoName}
                        placeholder='Enter Task Name'
                        onChange={(e) =>
                            setTodoName(e.target.value)
                        }
                    />

                </div>


                <div className='input-group'>

                    <label>Description</label>

                    <input
                        type="text"
                        value={todoDesc}
                        placeholder='Enter Description'
                        onChange={(e) =>
                            setTodoDesc(e.target.value)
                        }
                    />

                </div>


                <button
                    className='btn'
                    onClick={handleSubmit}
                >
                    Add Todo
                </button>

            </div>

        </div>
    )
}

export default Header