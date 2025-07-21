import React from 'react'

const Todo = () => {
  return (
    <div className='min-h-screen flex bg-gray-400  items-center justify-center p-4'>
      <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-md'>
        <div className='text-center mb-8'>
          <h2 className='text-2xl font-bold text-gray-800'>To-Do List</h2>
        </div>
        <h3>Learn Python</h3>
        <h3>Learn Python</h3>
        <h3>Learn Python</h3>
        <h3>Learn Python</h3>

        <div>
          <button>+</button>
        </div>
      </div>
      
    </div>
  )
}

export default Todo