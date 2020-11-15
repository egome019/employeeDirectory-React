import React from "react";
import Employee from "./Employee";

function NavRow ({nav, Sort, users}) {
    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        {nav.map(({name, width}) => {
                            return (
                                <th className="col text-center"
                                    key={name}
                                    style={{width}}
                                    onClick={()=> {
                                        Sort(name.toLowerCase());
                                    }}
                                >
                                    <span className="dropdown-toggle" role="button" tabIndex="0">{name}</span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <Employee users={users} />
            </table>
        </div>
    )
}

export default NavRow;