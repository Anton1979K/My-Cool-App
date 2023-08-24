import React from 'react';
import TodoListItem from '../TodoListItem';
import './index.css';

let count = 0;

//function TodoList () {} - тот же аналог стрелочной ф-ции
const  TodoList = ({todos}) => {

  const elemenst = todos.map((item) => {
    
    const { id, ...itemProps } = item; //убираем ID

  return (
    <li className={"list-group-item"} key={id}>
        < TodoListItem { ...itemProps } />
    </li> );
    });
 
  
  return (
    <ul className={"list-group todo-list"}>

      { elemenst }
    
    </ul>);

  }

  export default TodoList;
  