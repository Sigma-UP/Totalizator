import React from 'react';
import App from './App';
import { state, addTask } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = () =>{
    root.render(
      <BrowserRouter>
        <React.StrictMode>
          <App state={state} addTask={addTask} newTask={state.tasksData.newTask}/>
        </React.StrictMode>
      </BrowserRouter>
    );
  }