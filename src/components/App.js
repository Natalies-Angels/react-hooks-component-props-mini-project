import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

const image = blogData.image;
const about = blogData.about;
const posts = blogData.posts;
const name = blogData.name


function App() 
{
  return (
    <div className="App">
     <Header name ={name} />
     <About image = {image} about={about}/>
     <ArticleList  posts ={posts} />
    </div>
  );
}

export default App;
