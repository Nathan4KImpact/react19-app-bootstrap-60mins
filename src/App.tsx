import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Users from "./components/Users";


// MAIN APP - Copy this entire file to Stackblitz
export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Lists & Looping Examples</h1>

      <section
        style={{
          marginBottom: '30px',
          padding: '15px',
          background: '#f5f5f5',
          borderRadius: '8px',
        }}
      >
        <h3>1. List Groups </h3>
        <ListGroups />
      </section>

      <section
        style={{
          marginBottom: '30px',
          padding: '15px',
          background: '#f5f5f5',
          borderRadius: '8px',
        }}
      >
      <h3>2. Users List Management</h3>
        <UsersList />
      </section>

      <section
        style={{
          marginBottom: '30px',
          padding: '15px',
          background: '#f5f5f5',
          borderRadius: '8px',
        }}
      >
       <h3>3. Toggle List Example</h3>
        <TodoListExample />
      </section>

      <section
        style={{
          marginBottom: '30px',
          padding: '15px',
          background: '#f5f5f5',
          borderRadius: '8px',
        }}
      ></section>
 </div>
  );
}



function ListGroups() {
  const citiesItems = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const coloursItems = ["Red", "Yellow", "Green", "Blue", "Purple"];
  const handleSelectItem = (item: string) =>
    console.log(`Selected Item: ${item}`);

 
  return (
    <>
      <>       
        <ListGroup
          items={citiesItems}
          heading="World Top 7 Cities"
          onSelectItem={handleSelectItem}
          alertMessage={`Cities count : ${citiesItems.length}`}
          alertLevel="success"
        />  
      </>
      <>
        <ListGroup
          items={coloursItems}
          heading="My Top 7 beautiful colours"
          onSelectItem={handleSelectItem}
          alertMessage={`Colours count : ${coloursItems.length}`}
          alertLevel="info"
        />   
      </>
    </>
  );
}

function UsersList (){

   // Liste test
  const data = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eve" },
  ];

  return (
  <>
    <Users users={data} />;
  </>
  )

}


// Example 8: Todo List with Toggle
function TodoListExample() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Deploy to production', completed: false },
  ]);

  const toggleTodo = (id : number) => {
    const prevTodos = [...todos];

     for (let i=0; i<prevTodos.length;i++){
      if (prevTodos[i].id === id) 
        prevTodos[i].completed = !prevTodos[i].completed ;
    }
    setTodos(prevTodos); 

    /*setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));*/
   
  };

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          style={{
            padding: '10px',
            marginBottom: '5px',
            background: todo.completed ? '#d4edda' : '#f8f9fa',
            textDecoration: todo.completed ? 'line-through' : 'none',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          {todo.completed ? '✅' : '⬜'} {todo.text}
        </li>
      ))}
    </ul>
  );
}
