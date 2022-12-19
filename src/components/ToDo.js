import React, { useState } from "react"
import Form from "./Form"
import Delete from "./icons/delete.svg"
import Edit from "./icons/edit.svg"
import Undone from "./icons/undone.svg"
import Done from "./icons/done.svg"

const ToDo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({id: null, value: ""})
  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({id: null, value: ""})
  }
  if (edit.id) { return <Form edit={edit} onSubmit={submitUpdate}/>}
  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "row complete" : "row"} key={index} >
      <div className="work">
        <img className="status" onClick={() => completeTodo(todo.id)} src={todo.isComplete ? Done : Undone} alt="status"/>
        <div className="text" key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}</div>
      </div>
      <div className="icons">
        <img className="edit" src={Edit} onClick={() => setEdit({ id: todo.id, value: todo.text })} alt="edit"/>
        <img className="delete" src={Delete} onClick={() => removeTodo(todo.id)} alt="delete"/>
      </div>
    </div>
  ))
}

export default ToDo