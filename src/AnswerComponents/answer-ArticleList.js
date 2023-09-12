import React from "react";
import Article from "./Article"

export default function ArticleList({posts}){
    const articles = posts.map((post) => {
       return <Article key= {post.id}title={post.title} date={post.date} preview={post.preview}/>
    })
    return(
        <main>
            {articles}
            {/* {posts.map(post => <Article title={post.title} date={post.date} preview={post.preview}/>)} */}
        </main>
    )
}