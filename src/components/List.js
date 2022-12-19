import React, { useState } from "react"
import Form from "./Form"
import ToDo from "./ToDo"
import Advice from "./Advice"

function List() {
  const [todos, set] = useState([])
  const addTodo = todo => {//Add new todo
    if (!todo.text || /^\s*$/.test(todo.text)) {return}//Regex of space
    const newTodos = [todo, ...todos]
    set(newTodos)
    }
  const updateTodo = (todoId, newValue) => {//Edit aol todo
    if (!newValue.text || /^\s*$/.test(newValue.text)) {return}//Regex of space
    set(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }
  const removeTodo = id => {//Remove task by id
    const removedArr = [...todos].filter(todo => todo.id !== id)
    set(removedArr)
  }
  const completeTodo = id => {//Complet task
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
    return todo
    })
    set(updatedTodos)
  }
  return (
  <>
      <h1>My ToDo List</h1>
      <Advice/>
      <Form onSubmit={addTodo}/>
      <ToDo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </>
  )
}

export default List