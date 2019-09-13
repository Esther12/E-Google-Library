import React from 'react';

function Card (props){

    function saveBook() {
        props.value(props.index);
    }
    return (
        <div className="col12 card mb-3">
            <div className="row no-gutters">
            <div className="col-4">
                <img src={props.image} className="card-img" alt={props.title}/>
            </div>
            <div className="col-8">
                <div className="card-body">
                <h5 className="card-title">{props.authors}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.link} className="btn btn-primary">Check The Book</a>
                <botton href={props.link} className="btn btn-primary" onClick = {saveBook}>Check The Book</botton>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Card;