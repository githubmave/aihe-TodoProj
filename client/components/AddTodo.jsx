import React from 'react'

function AddTodo (props) {
  return (
    <>
      <form >
            <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} />

            <input type="submit" value="Add Todo" />
      </form>
    </>
  )
}

export default AddTodo
