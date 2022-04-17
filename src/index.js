
import store from './Redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';



let rerenderEntireTree = (state) => {

  
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>

      </Provider>
      {/* <App store={state} addNewReviews={store.addNewReviews.bind(store)}  upText={store.updateText.bind(store)}/> */}

  
    </React.StrictMode>,
    document.getElementById('root')
  );

}
rerenderEntireTree(store.getState())

store.subscribe( () => {

  let state = store.getState()

  rerenderEntireTree(state)
})