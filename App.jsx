import React from 'react';
import { Provider } from "react-redux";
import {createStore} from 'redux';
import BookList from './src/containers/book-list.jsx';
import BookDetail from './src/containers/book-detail.jsx';
import rootReducer from './src/reducers/index.js';

let store = createStore(rootReducer);
class App extends React.Component{
   render() {
      return (
          <Provider store={store}>
          <div>
            <BookDetail />
            <BookList />
          </div>
          </Provider>
      );
   }
}
export default App;
