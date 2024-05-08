import React, { useContext, useEffect, useState } from "react";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DrawIcon from "@mui/icons-material/Draw";
import AppsIcon from "@mui/icons-material/Apps";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import SearchIcon from "@mui/icons-material/Search";
import { Context } from "../../contextApi/Context";

function ElementBar() {
  const {
    upload,
    setUpload,
    uploadedFile,
    setUploadedFile,
    textFormat,
    setTextFormat,
    shapes,
    setShapes,
    currentShape, setCurrentShape,
    myAddedElements, setMyAddedElements,
    zindex, setZindex
  } = useContext(Context);
  const [loaderButton, setLoaderButton] = useState(false);
  const [imgArray, setImgArray] = useState([]);
  const [focus, setFocus] = useState(false)
  const [searchText, setSearchText] = useState('Search Elements')

  const submit = () => {
    setLoaderButton("none");
    const reader = new FileReader();
    reader.onloadend = () => {
      setImgArray([...imgArray, reader.result]);
    };
    reader.readAsDataURL(uploadedFile);
    setLoaderButton(false);
  };

  const delayBtn = () => {
    setTimeout(() => {
      setLoaderButton(true);
    }, 3000);
  };
  const handleEvent = (e) => {
    setUploadedFile(e.target.files[0]);
  };

  const [ele, setEle] = useState([]);

  const createEle = () => {
    const newEle = `<div className='rect'></div>`;
    setEle((prevEle) => [...prevEle, newEle]);
    console.log(ele);
  };



  const allShapes = [
    {
      name: "Square",
      img: "https://th.bing.com/th/id/OIP._uzSAQUPRo5yOXvit5rN0gAAAA?rs=1&pid=ImgDetMain",
      shapeEle: "square"
    },
    {
      name: "Rectangle",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rectangle_example.svg/1280px-Rectangle_example.svg.png",
      shapeEle: "rectangle"
    },
    {
      name: "Circle",
      img: "https://th.bing.com/th/id/OIP.2ENA0RVLuofT_mQUb4PQiQHaHa?w=214&h=214&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      shapeEle: "circle"
    },
    {
      name: "Triangle",
      img: "https://th.bing.com/th/id/R.4efaf081c74d62448aeccb12b68a5bdc?rik=RhfMAZAWrUpTYA&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2f4%2fe%2ff%2fa%2f131406376032215174blue+triangle.png&ehk=J2Dh5Qe5bLYIfeBlf6AbCm2B87x0RUboHQl%2fFdmnFEw%3d&risl=&pid=ImgRaw&r=0",
      shapeEle: "triangle"
    }
  ]


  const searchTags = [
    {
      tag: 'Home'
    },
    {
      tag: 'Sqaure'
    },
    {
      tag: 'Rectangle'
    }
  ]
  return (
    <div className="bar">
      <div className="element-bar">
        <div
          onClick={() => {
            setShapes(!shapes);
            setUpload(false);
            setTextFormat(false);
          }}
        >
          <SpaceDashboardIcon className="element-icon" sx={{ fontSize: 50 }} />
        </div>
        <div
          onClick={() => {
            setUpload(!upload);
            setShapes(false);
            setTextFormat(false);
          }}
        >
          <CloudUploadIcon className="element-icon" sx={{ fontSize: 50 }} />
        </div>
        <div>
          <CardGiftcardIcon className="element-icon" sx={{ fontSize: 50 }} />
        </div>
        <div>
          <DrawIcon className="element-icon" sx={{ fontSize: 50 }} />
        </div>
        <div
          onClick={() => {
            setTextFormat(true);
            setShapes(false);
            setUpload(false);
          }}
        >
          <TextFieldsIcon className="element-icon" sx={{ fontSize: 50 }} />
        </div>
        <div>
          <TipsAndUpdatesIcon className="element-icon" sx={{ fontSize: 50 }} />
        </div>
        <div>
          <FolderCopyIcon className="element-icon" sx={{ fontSize: 50 }} />
        </div>
        <div>
          <AppsIcon className="element-icon" sx={{ fontSize: 50 }} />
        </div>
      </div>
      <div className="all-elements">
        <div className={textFormat ? "flex text-formats" : "none"}>
          <div className="text-format-search">
            <div className="icon">
              <SearchIcon sx={{ color: "#a548ff" }} />
            </div>
            <input type="text" placeholder="Serach Font" />
          </div>
          <div
            className="pro"
            style={{ backgroundColor: "#8b3dff", color: "#fff" }}
          >
            Add a Text Box
          </div>
          <div className="default-fonts">
            <label>Default Font Styles</label>
            <div
              className="pro"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              Add a Heading
            </div>
            <div
              className="pro"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Add a Subheading
            </div>
            <div
              className="pro"
              style={{ fontSize: "16px", fontWeight: "bold" }}
            >
              Add a Paragraph
            </div>
          </div>
          <div>
            <label>Recent Works</label>
            <div className="container">
              <div className="e-box">
                <img
                  src="https://template.canva.com/EAEB6UXanWM/1/0/760w-B9mPimpD12s.png"
                  alt=""
                />
              </div>
              <div className="e-box">
                <img
                  src="https://template.canva.com/EAEB6UXanWM/1/0/760w-B9mPimpD12s.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className={shapes ? "shapes flex" : "none"}>
          <div className="text-format-search" style={{ position: "relative" }}>
            <div className="icon">
              <SearchIcon sx={{ color: "#a548ff" }} />
            </div>
            <input type="text" placeholder="Serach Element" value={searchText} onChange={''} onFocus={() => setFocus(true)} />

            <div className={focus ? 'serachdiv' : 'none'}>
              {
                searchTags.map((item) => (
                  <div item={item} className="sec" onClick={() => { setFocus(false); setSearchText(item.tag) }}>
                    <SearchIcon sx={{ color: "black" }} />
                    <label>{item.tag}</label>
                  </div>
                ))
              }
            </div>
          </div>
          <strong>Recently Used</strong>
          <div></div>
          <strong>Shapes</strong>
          <div className="shapes-cont">
            {allShapes.map((item) => (
              <div className="shape-box" style={{ backgroundColor: 'red' }} item={item} onClick={() => { setZindex(zindex + 3); setMyAddedElements((prev) => [...prev, { name: item.shapeEle, posX: zindex, posY: zindex }]); console.log(myAddedElements) }}>
                <img
                  src={item.img}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className={upload ? "uploads flex" : "none"}>
          <label htmlFor="input" className="pro">
            Upload
          </label>
          <input
            type="file"
            id="input"
            style={{ display: "none" }}
            onClick={delayBtn}
            onChange={handleEvent}
          />
          <button
            className={loaderButton ? "flex pro" : "none"}
            onClick={submit}
          >
            Submit
          </button>
          <div className="container">
            {imgArray.map((item) => (
              <div className="e-box" item={item}>
                <img src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
        {/* <img src={image} onClick={()=>setImg(image)} alt="" />
        <div onClick={()=>console.log('flex')}>
        <label>Font</label>
        </div> */}
      </div>
    </div>
  );
}

export default ElementBar;
