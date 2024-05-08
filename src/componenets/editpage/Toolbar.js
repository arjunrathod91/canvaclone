import React, { useContext, useState } from "react";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { Context } from "../../contextApi/Context";
import  ExpandMore from "@mui/icons-material/ExpandMore";


function Toolbar() {
  const {selectedFont,setSelectedFont,bold,setBold,italic,setItalic,underline,setUnderLine,setFontColor,fontColor,alignLeft,setAlignLeft,setAlignCenter,alignCenter,setAlignRight,alignRight} = useContext(Context)

  const handle=(e)=>{
    setFontColor(e.target.value)
    console.log(fontColor)
  }

  const fontFamilies = [
    "Arial, sans-serif",
    "Verdana, sans-serif",
    "Times New Roman, serif",
    "Georgia, serif",
    "Helvetica, sans-serif",
    "Calibri, sans-serif",
    "Trebuchet MS, sans-serif",
    "Courier New, monospace",
    "Arial Black, sans-serif",
    "Comic Sans MS, cursive",
    "Palatino Linotype, Book Antiqua, Palatino, serif",
    "Impact, Charcoal, sans-serif",
    "Lucida Sans Unicode, Lucida Grande, sans-serif",
    "Tahoma, Geneva, sans-serif",
    "Century Gothic, sans-serif"
  ]

  
  return (
    <div className="toolbar">
      <select className="pro" style={{border:'1px solid black'}} value={selectedFont} onChange={(e)=>setSelectedFont(e.target.value)}>
        {
          fontFamilies.map((font)=>(
            <option>{font}</option>
          ))
        }
      </select>
      <div onClick={()=>{setBold(!bold)}}>
        <FormatBoldIcon />
      </div>
      <div onClick={()=>setItalic(!italic)}>
        <FormatItalicIcon />
      </div>
      <div>
        {/* <FormatColorFillIcon /> */}
      </div>
      <div>
        <FormatColorTextIcon />
        <input type="color" onChange={handle} value={fontColor}/>
      </div>
      <div onClick={()=>setUnderLine(!underline)}>
        <FormatUnderlinedIcon />
      </div>
      <div onClick={()=>setAlignLeft(!alignLeft)}>
        <FormatAlignLeftIcon />
      </div>
      <div onClick={()=>setAlignCenter(!alignCenter)}>
        <FormatAlignCenterIcon />
      </div>
      <div onClick={()=>setAlignRight(!alignRight)}>
        <FormatAlignRightIcon />
      </div>
    </div>
  );
}

export default Toolbar;
