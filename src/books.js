import React from 'react';
import Book from './book';

const Books = (props) => {
    //here we want to generate list of books using map
     const listOfBooks = props.booklist.map(function(bob){
        return (
            <Book 
                image={bob.portada} 
                desc = {bob.description} 
                title ={bob.titulo}
            />
        );
     });
    
    return listOfBooks;
} 

export default Books;