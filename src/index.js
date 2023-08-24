import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './component/App';


const domNode = document.getElementById("root");
const root = createRoot(domNode);


//console.log(App);

//root.render(App); -если ф-ция не как компонент. то так ее рендерим
// если ф-ия написана как компонент то рендер ее идет так: root.render(<App />);
root.render(<App />);