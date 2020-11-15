import React from "react";

function SearchForm({handleSearch}) {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-light">
            <div className="navbar-collapse row">
                <form className="mx-auto">
                    <div className="form-inline">
                        <div className="form-group mb-2">
                            <label>Search:</label>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search for Employee"
                                aria-label="Search"
                                onChange={event => handleSearch(event)}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </nav>
    );
}

export default SearchForm;