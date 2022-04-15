
import store from './Redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



let rerenderEntireTree = (state) => {
  debugger
  ReactDOM.render(
    <React.StrictMode>
      
      {/* <App store={state} addNewReviews={store.addNewReviews.bind(store)}  upText={store.updateText.bind(store)}/> */}

      <App store={store} dispatch={store.dispatch.bind(store)}/>
  
    </React.StrictMode>,
    document.getElementById('root')
  );

}
rerenderEntireTree(store.getState())

store.subscribe( () => {

  let state = store.getState()

  rerenderEntireTree(state)
})