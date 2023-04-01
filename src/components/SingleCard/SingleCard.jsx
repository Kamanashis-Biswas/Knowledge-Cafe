import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./SingleCard.css";
import { ToastContainer, toast } from "react-toastify";

const SingleCard = ({ blog, states }) => {
  console.log(blog);
  const showToast = () => {
    toast("This item is already added !!");
  };
  return (
    <div>
      <div className="card mb-5">
        <div>
          <img className="w-100" src={blog.images.blog_cover_image} alt="" />
        </div>
        <div>
          <div className="author flex-wrap mt-4 d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img
                className="img-fluid"
                src={blog.images.author_image}
                alt=""
              />
              <div className="ms-3">
                <h5 className="fw-bold">{blog.author_name}</h5>
                <p className="fs-5">{blog.publish_date}</p>
              </div>
            </div>
            <p className="fs-4">
              {blog.read_time} min read{" "}
              <FontAwesomeIcon
                onClick={() => {
                  const p = states.bookmarks.find((e) => e === blog.blog_title);
                  if (!p) {
                    states.setBookmarks([...states.bookmarks, blog.blog_title]);
                  } else {
                    showToast();
                  }
                }}
                icon={faBookmark}
              />
            </p>
          </div>
        </div>
        <div>
          <h2>{blog.blog_title}</h2>
        </div>
        <div>
          <button
            onClick={() => {
              states.setTime(states.time + +blog.read_time);
            }}
            className="bg-white p-0 text-primary fs-2 border-0"
          >
            <u>Mark as read</u>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
