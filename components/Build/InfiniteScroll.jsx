import React, { useEffect, useRef } from "react";

function InfiniteScroll({
  mainWrapper = null,
  children,
  loader,
  dipatchScroll,
}) {
  let mainWrapperRef = useRef();

  const triggerScroll = (mainWrapperRef) => {
    if (
      mainWrapperRef.current &&
      Object.keys(mainWrapperRef.current).length > 0
    ) {
      const element = mainWrapperRef.current;
      element.onscroll = (e) => {
        if (
          e.target.scrollTop + e.target.offsetHeight ===
          e.target.scrollHeight
        )
          dipatchScroll({ scrollHeight: e.target.scrollHeight });
      };
    }
  };

  useEffect(() => {
    triggerScroll(mainWrapperRef);
  }, [triggerScroll]);

  return React.cloneElement(mainWrapper, { ref: mainWrapperRef }, [
    ...children,
    loader,
  ]);
}

InfiniteScroll.defaultProps = {
  mainWrapper: null, //Should be html tag or React element
  loader: null, //It should be a React element.
  dipatchScroll: (data) => {
    console.log("dipatchScroll", data);
  }, //Used to handle scroll callback event in the parent.
};

// InfiniteScroll.propTypes = {
//   mainWrapper: PropTypes.element.isRequired,
//   loader: PropTypes.element,
//   dipatchScroll: PropTypes.func.isRequired,
// };

export default InfiniteScroll;
