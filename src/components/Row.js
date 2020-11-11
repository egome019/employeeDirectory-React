import React from "react";

function Row(props) {
    return (
        <div classname="row">
            {props.children}
        </div>
    );
}

export default Row;