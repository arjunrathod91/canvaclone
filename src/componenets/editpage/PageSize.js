import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../contextApi/Context";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import PanoramaIcon from "@mui/icons-material/Panorama";
import Crop169Icon from "@mui/icons-material/Crop169";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import { PhoneAndroid } from "@mui/icons-material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import SquareIcon from "@mui/icons-material/Square";
import InstagramIcon from "@mui/icons-material/Instagram";

function PageSize() {
  const { selectPageSize, setSelectPageSize } = useContext(Context);
  //     Doc Auto Size
  // Poster (Poitrait - 42 x 59.4 cm)
  // Phone Wallpaper 1810 x 1920 px
  // Resume 21 x 29.7 cm
  // Mobile Video 1810 x 1920 px
  // Descktop Wallpaper 1920 x 1080 px
  // Video 1920 x 1080 px
  // logo 500 x 500 px
  // Banner(Landscape) 72 x 36px in
  // Flayer (A4 21 x 29.7 cm)
  // Presentation (16:9)
  // Instagram Post(Square) 1080 x 1080 px

  const sizes = [
    {
      name: "Doc",
      icon: <TextSnippetIcon />,
      size: "Auto Size",
    },
    {
      name: "Flayer",
      icon: <StayCurrentPortraitIcon />,
      height:'1810',
      width:'1920'
    //   size: "(A4 21 x 29.7 cm)",
    },
    {
      name: "Phone Wallpaper",
      icon: <PhoneIphoneIcon />,
      height:'1810',
      width:'1920'
    },
    {
      name: "Logo",
      icon: <SquareIcon />,
      height:'1810',
      width:'1920'
    //   size: "500 x 500 px",
    },
    {
      name: "Presentation (16:9)",
      icon: <Crop169Icon />,
      height:'1810',
      width:'1920'
    //   size: "1920 x 1080 px",
    },
    {
      name: "Instagram Post(Square) ",
      icon: <InstagramIcon />,
      height:'500',
      width:'1000'
    //   size: "1080 x 1080 px",
    },
  ];
  const navigate = useNavigate()

  const handle=(e,item)=>{
    e.preventDefault()
    console.log(item.height +" "+ item.width)
    setSelectPageSize(`${item.width} ${item.height}`)
    navigate('/editPage')
  }
  return (
    <div className="pagesize">
      {sizes.map((item) => (
        <div className="sec" item={item} onClick={(e)=>handle(e,item)}>
          {item.icon}
          <label className="s-name">{item.name}</label>
          <label className="s">{`${item.width} x ${item.height}`}</label>
        </div>
      ))}
    </div>
  );
}

export default PageSize;
