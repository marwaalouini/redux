import { useSelector,useDispatch } from 'react-redux';
import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addToDo,completeToDo,deleteToDo } from './action/toDoAction';
import { UPDATE } from './action/type';
import {Modal, Button} from 'react-bootstrap';
import './App.css';



function App ()  {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const[task,setTask]=useState("")
const[editTask,setEditTask]=useState("")

const[filter,setFilter]=useState("all")
  const todo=useSelector(state=>state.toDoReducer)
  const dispatch=useDispatch()

  return (
    <div className='container'>
    <div className='App'>
  
      
        <input type='text' placeholder='Add' onChange={(e)=> setTask(e.target.value)}/>
          <button onClick={()=> dispatch(addToDo(task))}> Add Task</button>

         <button onClick={()=> setFilter("all")}>aLL</button>
         <button onClick ={()=> setFilter("Done")}>Done</button>
         <button onClick= {()=> setFilter("undone")}>undone</button>

       {filter === "all"? todo.map (el =>
         <div>

        <h2> {el.title}</h2>
        <button onClick={()=> dispatch(deleteToDo(el.id))}> delete</button>
        <button variant="primary" onClick={handleShow}>
        UPDATE
      </button>
      <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>  <input type='text' placeholder='editTask' onChange={(e)=> setEditTask(e.target.value)}/> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



        <button onClick={()=> dispatch(completeToDo(el.id))}> {el.complete? "Done" :"undone"}</button>

       </div>) : filter === "Done" ? todo.filter(el=>el.complete === true)
       
       .map (el =>
        <div>

       <h2> {el.title}</h2>
       <button onClick={()=> dispatch(deleteToDo(el.id))}> delete</button>

       <button onClick={()=> dispatch(completeToDo(el.id))}> {el.complete ? "Done" :"undone"}</button>

      </div>): todo.filter(el=>el.complete === false)


.map (el =>
  <div>

 <h2> {el.title}</h2>
 <button onClick={()=> dispatch(deleteToDo(el.id))}> delete</button>

 <button onClick={()=> dispatch(completeToDo(el.id))}> {el.complete ? "Done" :"undone"}</button>

</div>) 

      
       }
      
      </div>
      </div>
);
};

export default App;
