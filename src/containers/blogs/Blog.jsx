import React from "react";
import "./blog.css";
import firstBlog from "../../assets/first-blog.avif";
import secondBlog from "../../assets/second-blog.avif";
import thirdBlog from "../../assets/third-blog.avif";
import fourthBlog from "../../assets/fourth-blog.avif";
import BlogElement from "../../components/blog-element/BlogElement";
const blogs = [
  {
    img: secondBlog,
    date: "12 October 2021",
    heading: "Mastering Sets in JavaScript",
    link: "https://sujitmemane.hashnode.dev/mastering-sets-in-javascript",
  },
  {
    img: thirdBlog,
    date: "2 December 2022",
    heading: "Mastering the Rest and Spread Operators in JavaScript ",
    link: "https://sujitmemane.hashnode.dev/mastering-the-rest-and-spread-operators-in-javascript",
  },
  {
    img: fourthBlog,
    date: "2 November 2020",
    heading: "Variables and Scopes in Javascript ",
    link: "https://sujitmemane.hashnode.dev/variables-and-scopes-in-javascript",
  },
];
const Blog = () => {
  const blogElements = blogs.map((blog) => {
    return (
      <BlogElement
        img={blog.img}
        heading={blog.heading}
        date={blog.date}
        link={blog.link}
      ></BlogElement>
    );
  });
  return (
    <section className="myPortfolio__blog" id="blog">
      <div className="container">
        <div className="blogs">
          <h3>Blogs</h3>
          <h2>Explore My Blogs! 🚀</h2>
          <div className="blogs-container">
            <div className="first-row">
              <div className="first-row-left">
                <img src={firstBlog} />
              </div>
              <div className="first-row-right">
                <p className="info">4 Jan 2023</p>
                <h1 className="blog-heading">
                  <a
                    href="https://sujitmemane.hashnode.dev/master-arrays-in-javascript"
                    target="_blank"
                  >
                    Master Arrays in JavaScript
                  </a>
                </h1>
                <p className="blog-desc">
                  Arrays are an essential part of any programming language, and
                  JavaScript is no exception. They allow us to store and
                  manipulate multiple values in a single structure, making it
                  easy to work with large amounts of data.
                </p>
              </div>
            </div>
            <div className="second-row">{blogElements}</div>
          </div>
          <div className="btn-box"></div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
