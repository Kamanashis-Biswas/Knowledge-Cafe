import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./SingleCard.css";

const SingleCard = ({ blog, time, setTime }) => {
  console.log(blog);
  return (
    <div>
      <div className="blog-card card mb-5">
        <div className="blogs-cover">
          <img className="w-100" src={blog.images.blog_cover_image} alt="" />
        </div>
        <div className="blog-body">
          <div className="author mt-4 d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={blog.images.author_image} alt="" />
              <div className="ms-3">
                <h3 className="fw-bold">{blog.author_name}</h3>
                <p className="fs-5">{blog.publish_date}</p>
              </div>
            </div>
            <p className="fs-4">
              {blog.read_time} min read <FontAwesomeIcon icon={faBookmark} />
            </p>
          </div>
        </div>
        <div className="blog-title">
          <h1>{blog.blog_title}</h1>
        </div>
        <div>
          <button
            onClick={() => {
              setTime(time + +blog.read_time);
            }}
            className="bg-white text-primary border-0"
          >
            <u>Mark as read</u>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
