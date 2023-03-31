import React, { useState } from "react";

const SideBar = ({ states }) => {
  return (
    <div>
      <div>
        <h5 className="border border-primary text-center py-3 rounded text-primary fw-bold">
          Spent time on read : {states.time} min
        </h5>
      </div>
      <div className="bg-light rounded">
        <h4 className="fw-bold mt-3 py-3 ms-2">
          Bookmarked Blogs : {states.bookmarks.length}
        </h4>
        <div className="">
          <p className="fw-bold fs-5">
            {states.bookmarks && states.bookmarks.map((e) => <div>{e}</div>)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
