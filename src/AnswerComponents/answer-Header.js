import React from "react";

export default function Header(props){
    return (
        <header>
            <h1>{props.name}</h1>
            {/* {props.author ? <Details author={props.author}/> : <h2>no author</h2>} */}
        </header>

    )
}