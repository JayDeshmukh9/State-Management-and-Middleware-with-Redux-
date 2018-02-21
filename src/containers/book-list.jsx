import React from 'react';
import {connect} from 'react-redux'
import { selectBook } from '../actions/index'
import {bindActionCreators} from 'redux'

class BookList extends React.Component{
  renderList(){
    return this.props.books.map( (book) => {
        return(
            <li
              key={book.title}
              onClick = { () =>
              this.props.selectBook(book)} >
              {book.title}
            </li>
        );
    });
  }
  render (){
    return(
        <ul>
            {this.renderList()}
        </ul>
    )
  }
}
function mapStateToProps(state) {
  //Whatever is returned will show up as props inside of BookList
    return {
      books:state.books
    };
}


function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called , the resultshould be passed to all other reducers
  return bindActionCreators({ selectBook : selectBook } , dispatch);
}


//promote BookList from a Component to a container - it needs to know about the new dispatch method ,
//selectBook .Make it available as prop
export default connect(mapStateToProps,mapDispatchToProps)(BookList);
