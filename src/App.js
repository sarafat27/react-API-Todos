import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my blogs</h1>
      <Mobile></Mobile>
      <LoadTodos></LoadTodos>
      <Blog blogName="operation sundarban" author="arafat"></Blog>
      <Blog blogName="saint-martin tour" author="sunny"></Blog>
      <Blog blogName="mission bandarban" author="sarafat"></Blog>
    </div >
  );
}

const LoadTodos = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])

  return (
    <div>
      <h1>Todos: {todos.length}</h1>
      {
        todos.map(todo => <Todo title={todo.title} what={todo.completed}></Todo>)
      }
    </div>
  )
}

const Todo = (props) => {
  return (
    <div style={{ backgroundColor: '#282c34', color: 'antiquewhite', margin: '20px', padding: '10px', borderRadius: '100px' }}>
      <h4>Title: {props.title}</h4>
      <h4>Completed: {props.what + ''}</h4>
    </div>
  )
}

const Mobile = () => {
  const [charge, setCharge] = useState(100)
  const batteryDown = () => {
    if (charge <= 0) {
      return;
    }
    setCharge(charge - 10)
  }
  return (
    <div>
      <h1>Number: {charge}</h1>
      <button onClick={batteryDown} style={{ backgroundColor: 'black', color: 'yellow', padding: '15px', borderRadius: '10px' }}>Battery down</button>
    </div>
  )
}

const headlineStyle = {
  backgroundColor: 'black',
  padding: '10px',
  borderRadius: '10px'
}

function Blog(props) {
  return (
    <div>
      <article className='blog'>
        <h1 style={headlineStyle}>author: {props.author}</h1>
        <h3 style={headlineStyle}>{props.blogName}</h3>
        <p style={{ fontSize: 'x-large', backgroundColor: 'black', padding: '20px', borderRadius: '10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit quisquam eveniet quo vel quis exercitationem delectus modi numquam mollitia voluptatibus illo expedita odit assumenda nihil explicabo, a ducimus laborum ex beatae odio corporis dolorum officiis provident. Nulla architecto ex eaque quia temporibus ipsum rem est quae illum perferendis ea placeat quidem nostrum cupiditate, fuga nemo voluptate mollitia commodi assumenda doloribus dolore voluptatem consequuntur officia consectetur. Ad quam distinctio unde aliquid neque. Nulla vero quia perferendis esse nisi fugit incidunt, qui voluptas tenetur laboriosam nihil sint repudiandae et ipsam. Porro iste sed pariatur praesentium optio rerum atque dicta officia doloremque!</p>
      </article>
    </div>
  )
}

export default App;
