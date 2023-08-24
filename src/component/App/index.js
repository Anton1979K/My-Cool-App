import React from 'react';
import AppHeader from '../AppHeader';
import SearchPanel  from '../SearchPanel';
import TodoList from '../TodoList';

import './index.css';


const App = () => { 

   // const isLogin = true;
  
   // const loginBox  = isLogin ? null : <span>Log in please....</span>;
    
     
  const todoData = [
    {name: 'Sample Menu - 1', isImportant: false, id: 1 },
    {name: 'Sample Menu - 2', isImportant: false, id: 2 },
    {name: 'Sample Menu - 3', isImportant: true, id: 3 }

  ];
    // { !isLogin && <span>Log in please....</span> }  - такая конструкция это условный рендеринг
  
    //React.Fragment = пустой тэг Реакта!!! или просто <></>
   return ( <div className={"app"}>
              <div className={"app-inner"}>
                  <AppHeader />
                  <div className={"search-box"}>
                     <SearchPanel />
                  </div>
                  <TodoList todos={todoData} />  
              </div>
            </div> );
    
  };


  export default App;