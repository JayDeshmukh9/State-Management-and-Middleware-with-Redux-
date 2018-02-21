import React from 'react';
import {connect} from 'react-redux'

class BookDetail extends React.Component {
  render(){
    if (!this.props.book) {
      return(
        <h2>
          <p>Select A Book</p>
        </h2>
      ) ;
    }
    return (
      <h3>
        <p>Title :-  {this.props.book.title}</p>
        <p>Pages :-  {this.props.book.pages}</p>
        <p>Description :-  {this.props.book.description}</p>
      </h3>
    );
  }
}

function mapStateToProps(state) {
  return{
    book: state.activeBook
  }
}



export default connect (mapStateToProps)(BookDetail);
