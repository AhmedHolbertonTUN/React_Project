import React,{useState} from "react";
import "./styles.css";

export default function App() {
  const [newtodo,setNewtodo]= useState("");
  const [tasks,setTasks] = useState([]);

  function handleNewtodoChange(e){
    e.preventDefault()
    setNewtodo(e.target.value)    
  };

  function handleNewTask(e){
    e.preventDefault();
    if (newtodo.trim() === "") return
    setTasks([...tasks, {id: Date.now(), text: newtodo}])
    e.target.reset()
    setNewtodo("")
  };
  
  function TaskRemove(id){
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  function TaskEdit(id,todo){
  let index;
  let text=prompt("Edit the task");
  for(let i=0;i<tasks.length;i++)
  if (tasks[i].id===id)
  index=i;
  if (text != null && text !=="")
  tasks.splice(index, 1, {id:id , text: text});
  setTasks(tasks.filter((task)=> task.test !== todo))
  }
  
  return (
    <div className="App">
      <h1>My ToDo List</h1>
<form className='head' onSubmit={handleNewTask}>
  <input type="text" placeholder="Add to your list..." onChange={handleNewtodoChange} />
  <input type="submit" value="ADD" />
</form>
  <ul>
   {tasks.map((el)=>(
   <li key={el.id}><div>{el.text}</div>
   <div>
   <button className='button' onClick={()=>TaskRemove(el.id)}>Delete</button>
   <button className='button' onClick={()=>TaskEdit(el.id,el.text)}>Edit</button>
   </div>
   </li>
   ))}
  </ul>
</div>
  );
}
