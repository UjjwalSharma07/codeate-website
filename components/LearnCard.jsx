import React from "react";
import style from "../styles/BuildCard.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { deleteCourse } from "../actions/LearnAction";

const LearnCard = ({ post, setCurrentI, setIsDeleted }) => {
  const dispatch = useDispatch();
  return (
    <div key={post._id} className={style.cards}>
      <img className={style.cards__img} src={post?.selectedFile} />
      <div className={style.cards__overlay}>
        <div className={style.card__title}>{post?.title}</div>

        <div className={style.card__description}>
          {post ? post?.message?.slice(0, 118) + "..." : ""}
        </div>
        <div className={style.BtnClass}>
          <Link
            href="./learn/add"
            style={{ textDecoration: "none", color: "white" }}
          >
            <button
              onClick={() => setCurrentI(post._id)}
              className={style.Btn}
            >
              Edit
            </button>
          </Link>
          <button
            onClick={() => {
                dispatch(deleteCourse(post._id));
                setIsDeleted(true);
            }}
            className={style.Btn}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnCard;
