import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label>Search:</label>
                <input onChange={props.handleInputChane}
                value={props.value}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search for Employee"
                id="search" />
                <button onClick={props.handleFormSubmit} className="btn btn-primary">
                    Search
                </button>
            </div>
        </form>
    );
}

export default SearchForm;