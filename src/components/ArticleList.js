import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList(){
    const articlePosts = blogData.posts.map((post) => {
        return <Article title={post.title} date={post.date} preview={post.preview} />
    })
    console.log(articlePosts)
    return (
        <main>
            {articlePosts}
        </main>
    )
}

export default ArticleList