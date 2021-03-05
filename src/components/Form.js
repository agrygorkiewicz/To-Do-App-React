import React from 'react';


const Form = ({setInputText,todos, setTodos, inputText, setStatus}) => {
    const inpuTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000}
        ])
        setInputText("");
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            <input value={inputText} onChange={inpuTextHandler} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <img alt="" src="data:image/svg+xml;base64,PHN2ZyBpZD0iYm9sZCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTIxLjI1IDBoLTE4LjVjLTEuNTE3IDAtMi43NSAxLjIzMy0yLjc1IDIuNzV2MTguNWMwIDEuNTE3IDEuMjMzIDIuNzUgMi43NSAyLjc1aDE4LjVjMS41MTcgMCAyLjc1LTEuMjMzIDIuNzUtMi43NXYtMTguNWMwLTEuNTE3LTEuMjMzLTIuNzUtMi43NS0yLjc1em0tNCAxM2gtNC4yNXY0LjI1YzAgLjU1Mi0uNDQ3IDEtMSAxcy0xLS40NDgtMS0xdi00LjI1aC00LjI1Yy0uNTUzIDAtMS0uNDQ4LTEtMXMuNDQ3LTEgMS0xaDQuMjV2LTQuMjVjMC0uNTUyLjQ0Ny0xIDEtMXMxIC40NDggMSAxdjQuMjVoNC4yNWMuNTUzIDAgMSAuNDQ4IDEgMXMtLjQ0NyAxLTEgMXoiLz48L3N2Zz4=" />
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;