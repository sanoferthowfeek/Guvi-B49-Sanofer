import React, {useState,useEffect} from 'react'
import './App.css'

function App() {
  const [isCompletedScreen, setIsCompletedScreen] = useState (false);
  const [allTodos, setAllTodos] = useState ([]);
  const [newTodoTitle, setNewTodoTitle] = useState ('');
  const [newDescription, setNewDescription] = useState ('');
  const [completedTodos, setCompletedTodos] = useState ([]);


  const handleAddNewToDo = () => {
    let newToDoObj = {
      title: newTodoTitle,
      description: newDescription,
    };
   
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push (newToDoObj);
   
    setAllTodos (updatedTodoArr);
    localStorage.setItem ('todolist', JSON.stringify (updatedTodoArr));
    setNewDescription ('');
    setNewTodoTitle ('');
  }
  
  useEffect (() => {
    let savedTodos = JSON.parse (localStorage.getItem ('todolist'));
    let savedCompletedToDos = JSON.parse (
      localStorage.getItem ('completedTodos')
    );
    if (savedTodos) {
      setAllTodos (savedTodos);
    }
    if (savedCompletedToDos) {
      setCompletedTodos (savedCompletedToDos);
    }

  }, []);

  const handleToDoDelete = index => {
    let reducedTodos = [...allTodos];
    reducedTodos.splice (index);
    localStorage.setItem ('todolist', JSON.stringify (reducedTodos));
    setAllTodos (reducedTodos);
  };

  const handleCompletedTodoDelete = index => {
    let reducedCompletedTodos = [...completedTodos];
    reducedCompletedTodos.splice (index);
   
    localStorage.setItem (
      'completedTodos',
      JSON.stringify (reducedCompletedTodos)
    );
    setCompletedTodos (reducedCompletedTodos);
  };

  const handleComplete = index => {
    const date = new Date ();
    var dd = date.getDate ();
    var mm = date.getMonth () + 1;
    var yyyy = date.getFullYear ();
    var hh = date.getHours ();
    var minutes = date.getMinutes ();
    var ss = date.getSeconds ();
    var finalDate =
      dd + '-' + mm + '-' + yyyy + ' at ' + hh + ':' + minutes + ':' + ss;

    let filteredTodo = {
      ...allTodos[index],
      completedOn: finalDate,
    };

 

    let updatedCompletedList = [...completedTodos, filteredTodo];
    setCompletedTodos (updatedCompletedList);
    localStorage.setItem (
      'completedTodos',
      JSON.stringify (updatedCompletedList)
    );
  

    handleToDoDelete (index);
  };
  
    

   
  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title:</label>
            <input
              type="text" placeholder="Todo Name"
              value={newTodoTitle}
              onChange={e => setNewTodoTitle (e.target.value)}
            />
          </div>  
          <div className="todo-input-item">
            <label>Description:</label>
            <input
              type="text"  placeholder="Todo Description"
              value={newDescription}
              onChange={e => setNewDescription (e.target.value)}
            />
          </div>
          <div className="todo-input-item">
            <button
              className="primary-btn" type="button" 
              onClick={handleAddNewToDo}>
              Add Todo
            </button>
          </div> 
             </div>  
             <div className="btn-area" >
              <button  className={`secondaryBtn ${isCompletedScreen === false && 'active'}`} 
              onClick={() => setIsCompletedScreen (false)}>Todo</button>
              <button className={`secondaryBtn ${isCompletedScreen === true && 'active'}`}
            onClick={() => setIsCompletedScreen (true)}>Completed</button>
            <button className="hov">All</button>
             </div>
             <div className="todo-list">
             {isCompletedScreen === false &&
             allTodos.map ((item, index) => (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
             
              
              <div>
                <button title="Completed?"
                    className=" check-icon"
                    onClick={() => handleComplete (index)}>Edit</button>
                <button title="Delete?"
                    className="icon" 
                    onClick={() => handleToDoDelete (index)}>Delete</button>
                    </div>
                    </div>
                    
              </div>
              ))}
               {isCompletedScreen === true &&
            completedTodos.map ((item, index) => (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p> <i>Completed at: {item.completedOn}</i></p>
                </div>
                <div>
                <button title="Delete?"
                    className="icon" 
                    onClick={() => handleCompletedTodoDelete (index)}>Delete</button>
                </div>
              </div>
            ))}
             </div>
             </div>   
               
       </div>
  )
}


export default App