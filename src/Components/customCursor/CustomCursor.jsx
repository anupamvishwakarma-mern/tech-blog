import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorBubbleRef = useRef(null);
  const cursorClickRef = useRef(null);

  useEffect(() => {
    const cursorBubble = cursorBubbleRef.current;
    const cursorClick = cursorClickRef.current;

    // Track mouse movement
    const handleMouseMove = (e) => {
      cursorBubble.style.top = `${e.clientY}px`;
      cursorBubble.style.left = `${e.clientX}px`;

      cursorClick.style.top = `${e.clientY}px`;
      cursorClick.style.left = `${e.clientX}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Toggle visibility on link hover
    const handleMouseEnter = () => {
      cursorClick.style.opacity = "1";
      cursorBubble.style.opacity = "0";
    };
    const handleMouseLeave = () => {
      cursorClick.style.opacity = "0";
      cursorBubble.style.opacity = "1";
    };

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-bubble" ref={cursorBubbleRef}></div>
      <div className="cursor-click" ref={cursorClickRef}>
        Click Me
      </div>
    </>
  );
};

export default CustomCursor;
