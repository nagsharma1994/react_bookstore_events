import React from 'react';
import ReacDOM from 'react-dom';
import Books from './books';
import SearchBar from './searchbar';
import Axios from 'axios';
import './book.css';

//step 1
class Bookstore extends React.Component{
    //step2
    constructor(props) {
        super(props);
        //initial state of the app where books is an empty array
        this.state = {
            books: [],
            filteredBooks: []
        }
    }

    handleSearch(event) {
        const books = this.state.books;

        const filteredBooks = books.filter(function(book) {
            return book.titulo.indexOf(event.target.value) > -1
        });

        this.setState({filteredBooks: filteredBooks});
    }
//sttep 3
    render() {
        return (
        <div className="app">
            <SearchBar handleSearch={(event) => this.handleSearch(event)}/>
            <div className="booklist">
                <Books booklist={this.state.filteredBooks}/>
            </div>
        </div>
        )
    }
//step6
    fetchBooks() {
        const url = 'https://api.myjson.com/bins/udbm5';

        Axios.get(url)
        .then((response) => {
            // handle success
            console.log(response);
            this.setState({books: response.data.books, filteredBooks: response.data.books})
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
//step5
    componentDidMount() {
        this.fetchBooks();
    }
}
//step4
ReacDOM.render(<Bookstore/>,document.querySelector('#root'))


