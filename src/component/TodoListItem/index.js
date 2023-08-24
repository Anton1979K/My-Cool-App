import React, {Component} from 'react';
import './index.css';

class TodoListItem extends Component {

  render () {

    const {name, isImportant} = this.props;

    const liStyle = {
                      color: isImportant ? 'tomato' : 'black'
                    };
    
  
  
 return  <span className={"name_menu"} >
      <span style={liStyle} className={"name_menu"}>
              {name}
      </span>

      <button 
        type={"button"}
        className={"btn btn-outline-success btn-user btn-sm float-right"} >
        <i className={"fa fa-exclamation"}></i>
      </button>

      <button 
        type={"button"}
        className={"btn btn-outline-danger btn-user btn-sm float-right"} >
        <i className={"fa-regular fa-circle-xmark"}></i>
      </button>

     
      
  </span>;
  };

}


//const  TodoListItemFunc = ({name, isImportant}) => {


//const isStyle = {
 //   color: isImportant ? 'tomato' : 'black'
//};

 //   <span style={isStyle}>{name}</span>
 // );
  //}

  export default TodoListItem
  