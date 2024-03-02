import React from "react";

const Newsletter = () => {
  return (
    <div className="Newsletter">
      <h1>Subscribe to our Newsletter</h1>
      <div className="subscription">
        Recieve latest news, updates and many other things every week .
      </div>
      <div className="sub-invite">
        <input
          className="bg-transparent"
          type="email"
          placeholder="Your email here"
        />{" "}
        <button> Join Now </button>
      </div>
    </div>
  );
};

export default Newsletter;
