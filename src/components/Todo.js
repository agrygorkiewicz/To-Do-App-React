import React from 'react';

const Todo = ({text, setTodos, todos, todo}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
           if(item.id === todo.id) {
               return {
                   ...item, completed: !item.completed
               }
           }
           return item;
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><svg xmlns="http://www.w3.org/2000/svg" ><path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z"/></svg></button>
            <button onClick={deleteHandler} className="trash-btn"><img alt="" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggaWQ9IlhNTElEXzEwODlfIiBkPSJtNDI4LjMzMiAxMzUuMjc1LTExLjE2Ny0zMy40NjZjLTIuMjQ4LTYuNzM2LTguNTUyLTExLjI3OC0xNS42NTMtMTEuMjc4aC0yOTEuMDI0Yy03LjEwMSAwLTEzLjQwNSA0LjU0My0xNS42NTMgMTEuMjc4bC0xMS4xNjcgMzMuNDY2Yy0yLjUzIDcuNTgyIDMuMTEzIDE1LjQxNCAxMS4xMDYgMTUuNDE0aDMyMi40NTFjNy45OTQgMCAxMy42MzctNy44MzIgMTEuMTA3LTE1LjQxNHoiLz48cGF0aCBpZD0iWE1MSURfODM1XyIgZD0ibTEzNS42MTUgNDkxLjc2N2MxLjI4IDExLjUxOSAxMS4wMTYgMjAuMjMzIDIyLjYwNiAyMC4yMzNoMTkzLjcxOGMxMS41OSAwIDIxLjMyNi04LjcxNSAyMi42MDYtMjAuMjMzbDM0LjU2NS0zMTEuMDc3aC0zMDguMDZ6Ii8+PHBhdGggaWQ9IlhNTElEXzgzMV8iIGQ9Im0yMjUuODkgNDIuOTk4YzAtNy4xNjcgNS44MzEtMTIuOTk4IDEyLjk5OC0xMi45OThoNDQuMTg5YzcuMTY3IDAgMTIuOTk4IDUuODMxIDEyLjk5OCAxMi45OTh2MTcuNTMzaDMwdi0xNy41MzNjMC0yMy43MDktMTkuMjg5LTQyLjk5OC00Mi45OTgtNDIuOTk4aC00NC4xODljLTIzLjcwOSAwLTQyLjk5OCAxOS4yODktNDIuOTk4IDQyLjk5OHYxNy41MzNoMzB6Ii8+PC9nPjwvc3ZnPg==" /></button>
        </div>
    )
}

export default Todo;