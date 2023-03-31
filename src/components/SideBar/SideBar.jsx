import React, { useState } from "react";

const SideBar = ({ time }) => {
  const [bookmarks, setBookmarks] = useState([]);
  return (
    <div>
      <div>
        <h5 className="border border-primary text-center py-3 rounded text-primary fw-bold">
          Spent time on read : {time}
        </h5>
      </div>
      <div className="bg-light rounded">
        <h4 className="fw-bold mt-3 py-3 ms-2">
          Bookmarked Blogs : {bookmarks.length}
        </h4>
      </div>
    </div>
  );
};

export default SideBar;
