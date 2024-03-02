import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent } from "../../../actions/CommunityAct";

function ShowEvents({ post, setCurrentId }) {
  const dispatch = useDispatch();
  return (
    <div className="gap-3 flex flex-row py-4">
      <h1 className="bg-[#F9E4E4] border-black border rounded-lg py-1 px-2">
        {post.title}
      </h1>

      <button
        onClick={() => setCurrentId(post._id)}
        className="bg-[#C7E1D0] gap-3 px-2 py-1 rounded-lg"
      >
        Edit
      </button>
      <button
        onClick={() => dispatch(deleteEvent(post._id))}
        className="bg-[#C7E1D0] gap-3 px-2 py-1 rounded-lg"
      >
        Delete
      </button>
    </div>
  );
}

export default ShowEvents;