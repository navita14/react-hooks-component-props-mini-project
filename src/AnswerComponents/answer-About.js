import React from "react";
import blogData from "../data/blog";

export default function About({ image,about }) {
    return (
        <aside>
            <img src={image ? image : "https://via.placeholder.com/215"} />
            <p>{about}</p>
        </aside>
    )
}