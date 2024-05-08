import { Height } from "@mui/icons-material";
import React, { useState } from "react";

function EleContainer({ children, height, width, setWidth, setHeight,isResizing,setIsResizing }) {
  const [initialWidth, setInitialWidth] = useState(0);
  const [initialHeight, setInitialHeight] = useState(0);

  // const resize = (e) => {
  //   setIsResizing(true)
  //   setInitialWidth(e.clientX);
  //   setInitialHeight(e.clientY);

  //   const handleMouseMove = (event) => {
  //     if (isResizing) {
  //       const newWidth = width + (event.clientX - initialWidth);
  //       const newHeight = height + (event.clientY - initialHeight);
  //       setWidth(newWidth);
  //       setHeight(newHeight)

  //       setInitialWidth(event.clientX);
  //       setInitialHeight(event.clientY);
  //     }
  //   };
  // window.addEventListener("mousemove", handleMouseMove);


  // };

  // const handleMouseMove = (event) => {
  //   if (isResizing) {
  //     const newHeight = Height + (event.clientY - initialHeight);

  //     setHeight(newHeight);

  //     setInitialHeight(event.clientY);
  //   //   setInitialHeight(event.clientY);
  //   }

  // };

  const doneButton=()=>{

  }



  // const resizeHeight=(e)=>{
  //   setIsResizing(true);
  //   setInitialHeight(e.clientY);
  //   window.addEventListener("mousemove", handleMouseMove);
  // }

  // const falseResizing=()=>{
  //   setIsResizing(false)
  // }

  // const resizeWidth = (e) => {
  //   setInitialWidth(e.clientX);
  //   // setInitialHeight(e.clientY);

  //   const handleMouseMove = (event) => {
  //       if (isResizing) {
  //         const newWidth = width + (event.clientX - initialWidth);

  //         setWidth(newWidth);

  //         setInitialWidth(event.clientX);
  //       //   setInitialHeight(event.clientY);
  //       window.addEventListener("mouseout", falseResizing);
  //       }
        
  //     };
  //   window.addEventListener("mousemove", handleMouseMove);
  // };

  const settingWidth = (event) => {};
  return (
    <div
      className={isResizing ? `visible ele-container d-flex-center` : 'hidden ele-container d-flex-center'}
      style={{ height: `${height + 10}px`, width: `${width + 10}px` }}
    >
      {children}
      <div className="corner-t-l" onMouseDown={''}></div>
      <div className="corner-t-m" onMouseDown={''}></div>
      <div className="corner-t-r"></div>
      <div className="corner-b-l"></div>
      <div className="corner-b-m"></div>
      <div className="corner-b-r" onMouseDown={''}></div>
      <div className="corner-l-m" onMouseMove={''}></div>
      <div className="corner-r-m" onMouseDown={''}></div>
    </div>
  );
}

export default EleContainer;
