import React from "react";

function SearchForm (props){
    return(
        <div className="input-group mb-3">
            <input type="text" onChange={props.handleInputChange} className="form-control" placeholder="Book Name or Author Name " aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={props.handleFormSubmit} type="button" id="button-addon2">Search</button>
            </div>
        </div>
    )
}

export default SearchForm;