import React from 'react';
import './book.css';

const Book = (props) => {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt=""/>
            <div className="card-body">
                <span className="card-title">{props.title}</span>
            </div>
        </div>
    );
}

export default Book;