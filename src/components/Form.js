import React, { useState, useEffect, useRef } from "react"
import Add from "./icons/add.svg";
import Update from "./icons/update.svg";

function Form(props) {
  const [input, set] = useState(props.edit ? props.edit.value : "")
  const Submit = e => {//Make task
    e.preventDefault()
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    set("")
  }
  const Change = e => {//Show text in area
    set(e.target.value)
  }
  const inputRef = useRef(null)
  useEffect(() => {//Set Cursor to text area
    inputRef.current.focus()
  })
  return (
    <form className="form" onSubmit={Submit}>
    {props.edit ? (//Edit section
        <>
            <input className="input edit" placeholder="Update task" value={input} onChange={Change} name="text" ref={inputRef} />
            <button onClick={Submit} className="button edit"><img src={Update} alt="Update"/></button>
        </>
    ) : (//Add section
        <>
            <input className="input" placeholder="Add task" value={input} onChange={Change} name="text" ref={inputRef}/>
            <button className="button" onClick={Submit} ><img src={Add} alt="Add"/></button>
        </>
    )}
    </form>
  )
}

export default Form