import React,{ useRef, useEffect, useContext } from 'react'
import { fabric } from 'fabric';
import { Context } from '../contextApi/Context';


function DrawingCanvas({sizing}) {

  const {rectangle} = useContext(Context)
  const canvasRef = useRef(null);
  let isDrawing = false;
  let startX, startY, currentRect;

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current,{
        height:450,
        width:370,
        backgroundColor: '#f0f0f0',
    });
    
    const textBox = new fabric.Textbox('Enter text here', {
        left: 100,
        top: 100,
        width: 200,
        fontSize: 10,
        fontFamily: 'Arial',
        fill: 'white',
        borderColor:'white',
        cornerColor:'black',
        cornerSize:5,
        transparentCorners: false,


      });
      
      // Add the text boxc to the canvas
      canvas.add(textBox);
    // Create a rectangle
    const rectangle = new fabric.Rect({
      left: 100,
      top: 100,
      width: 100,
      height: 50,
      fill: 'blue',
      borderColor: 'black', // Border color
      cornerColor: 'white', // Corner color
      cornerSize: 5, // Corner size
      transparentCorners: false, // Keep corners visible on fill
      selectable: true, // Enable shape selection
      lockRotation: false, // Prevent rotation
      lockScalingX: false, // Allow scaling in X direction
      lockScalingY: false, // Allow scaling in Y direction
      backgroundColor:false,
      borderOpacityWhenMoving:false,
      borderScaleFactor:false,
      hasBorders:false,
      borderDashArray:false, 
    });

    if(rectangle){
      console.log('rectangle')
    }
    // Create a circle
    const circle = new fabric.Circle({
      left: 200,
      top: 200,
      radius: 50,
      fill: 'green',
      borderColor: 'black', // Border color
      cornerColor: 'white', // Corner color
      cornerSize: 5, // Corner size
      transparentCorners: false, // Keep corners visible on fill
      selectable: true, // Enable shape selection
      lockRotation: false, // Prevent rotation
      lockScalingX: false, // Allow scaling in X direction
      lockScalingY: false, 
    });
    // const image = new fabric.Image({
    //     left: 100,
    //     top: 100,
    //     height:50,
    //     width:50
    //   });

    //   const imageUrl = 'https://th.bing.com/th/id/OIP.PS4O7gg_Vggys-PUnLjxeAHaFj?rs=1&pid=ImgDetMain'; // Replace with your image URL
    //   fabric.Image.fromURL(imageUrl, function(img) {
    //     // Assign loaded image to fabric.Image instance
    //     image.setElement(img.getElement());
        
    //     // Add the image to the canvas
    //     canvas.add(image);
    //   });  
      

    canvas.add(circle);
    rectangle.set({ width: 150, height: 75 });

    circle.set({ radius: 75 });

    // document.addEventListener('keydown', function(event) {
    //     // Check if the pressed key is Enter (key code 13)
    //     if (event.key === 'Enter') {
    //       // Remove the image from the canvas
    //       canvas.remove(image);
    //     }})

    // Render canvas
    canvas.renderAll();
 },[])   

//     // Event listener for mouse move event

//     return () => {
//       canvas.dispose();
//     };
//   }, []);
  return (
   <canvas ref={canvasRef}/>
  )
}

export default DrawingCanvas
