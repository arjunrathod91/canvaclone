import React, { useContext, useRef, useEffect, useState } from 'react'
import ElementBar from '../componenets/editpage/ElementBar'
import { Context } from '../contextApi/Context';
import Toolbar from '../componenets/editpage/Toolbar';
import EleContainer from '../componenets/EleContainer';

function EditPage() {
  // const {img,setImg,selectPageSize,text,setText,bold,italic,underline,fontColor,alignLeft,alignCenter,alignRight} = useContext(Context)

  // const sizing = selectPageSize.split(" ")
  const [isResizing, setIsResizing] = useState(false)
  const [ele, setEle] = useState([])
  const [resize, setResize] = useState(false)
  const [offset, setOffset] = useState({ x: 190, y: 190 });

  const [allAddEle, setAllAddEle] = useState([])


  const [height, setHeight] = useState(80)
  const [width, setWidth] = useState(80)


  const { currentShape, setCurrentShape, myAddedElements, setMyAddedElements, zindex, setZindex } = useContext(Context)

  // Adjust the offset as needed


  // const handleMouseMove = (event) => {
  //   setResize(true)
  //   setPosition({ x: event.clientX - offset.x, y: event.clientY - offset.y });
  //     };

  const createEle = () => {
    const newEle = `<div className='rect'></div>`
    setEle(prevEle => [...prevEle, newEle])
    console.log(ele)
  }

  const selected = () => {
    setResize(true)
  }

  const samplefun = () => {
    setAllAddEle([...allAddEle, currentShape])
    console.log(allAddEle)
  }



  const [isDragging, setIsDragging] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };


  // const font = `${bold ? 'bold' : ''} ${italic ? 'italic' : ''} ${underline ? 'underline' : ''}${alignLeft ? 'align-left' : ''}${alignCenter ? 'align-center' : '' }${alignRight ? 'align-right' : ''}`

  return (
    <div className='editpage' onClick={() => isResizing ? setIsResizing(false) : console.log('okay')} >
      {/* <div className='page' style={{height:`${sizing[1]}px`,width:`${[sizing[0]]}px`}}>
            <img src={img} alt="" />
            <input type="text" placeholder='The Title Is' className={font} style={{color:fontColor}}/>
  </div>*/}

      {/* <div className={resize ? 'resize cur-sel' : 'resize'} style={{position: 'absolute', top: position.y, left: position.x}}></div> */}
      <Toolbar />
      <ElementBar />
      <div className="page" >
        {
          myAddedElements.length > 0 ? myAddedElements.map((item) =>
          (<div item={item} style={{ zIndex: `${zindex + 1}`, position: 'absolute',top:`${item.posY}%`,left:`${item.posX}%`}}>
             {/* `${item.posY}%` */}
            <EleContainer height={height} width={width} setWidth={setWidth} setHeight={setHeight} setIsResizing={setIsResizing} isResizing={isResizing}>
              <div className={`visible ${item.name}`} style={{ height: `${height}px`, width: `${width}px` }} onClick={() => setIsResizing(true)}>

              </div>
            </EleContainer>
          </div>
          ))
            : ''
        }
      </div >
    </div >
  )
}

export default EditPage
