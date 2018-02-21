import React from 'react';
import { Provider } from "react-redux";
import {createStore} from 'redux';
import BookList from './src/containers/book-list.jsx';
import rootReducer from './src/reducers/index.js';
let store = createStore(rootReducer);
class App extends React.Component{
   render() {
      return (
        <div>
          <Provider store={store}>
            <BookList />
          </Provider>
        </div>
      );
   }
}
export default App;
