import React from "react";

const SingleCard = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      <div className="blog-card card">
        <div className="blogs-cover">
          <img className="w-100" src={blog.images.blog_cover_image} alt="" />
        </div>
        <div className="author-and-time">
          <div className="author">
            <img src="" alt="" />
            <div className="author-name-post d-flex justify-content-between">
              <h3 className="author-name">efye</h3>
              <p className="post-date">2020-01-01</p>
            </div>
          </div>
        </div>
        <div className="blog-title">
          <h1>Title</h1>
        </div>
        <div>
          <button className="mark-read-btn">Mark as read</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
