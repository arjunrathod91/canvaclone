import { createContext, useState } from "react";

export const Context = createContext();

export const MyContextProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [designCompo, setDesignCompo] = useState("none");
  const [buisenessCompo, setBuisenessCompo] = useState("none");
  const [educationCompo, setEducationCompo] = useState("none");
  const [learnCompo, setLearnCompo] = useState("none");
  const [plansAndPriceCompo, setPlansAndPriceCompo] = useState("none");
  const [pagesize, setPageSize] = useState(false);
  const [img, setImg] = useState("");
  const [selectPageSize, setSelectPageSize] = useState("");
  const [text, setText] = useState("none");

  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderLine] = useState(false);
  const [fontColor, setFontColor] = useState("");
  const [alignLeft, setAlignLeft] = useState(false);
  const [alignCenter, setAlignCenter] = useState(false);
  const [alignRight, setAlignRight] = useState(false);
  const [selectedFont, setSelectedFont] = useState('');
  const [upload,setUpload] = useState(false)
  const [uploadedFile,setUploadedFile] = useState('')
  const [textFormat,setTextFormat] = useState(false)
  const [shapes,setShapes] = useState(false)
  const [rectangle,setRectangle] = useState(false)
  const [circle,setCircle] = useState(false)
  const [textbox,setTextBox] = useState(false)

  const [currentShape,setCurrentShape] = useState('')

  const [myAddedElements,setMyAddedElements] = useState([])

  const [zindex,setZindex] = useState(0)

  return (
    <Context.Provider
      value={{
        sidebar,
        setSidebar,
        designCompo,
        setDesignCompo,
        buisenessCompo,
        setBuisenessCompo,
        educationCompo,
        setEducationCompo,
        learnCompo,
        setLearnCompo,
        plansAndPriceCompo,
        setPlansAndPriceCompo,
        pagesize,
        setPageSize,
        img,
        setImg,
        selectPageSize,
        setSelectPageSize,
        text,
        setText,
        bold,
        setBold,
        italic,
        setItalic,
        underline,
        setUnderLine,
        fontColor,
        setFontColor,
        alignLeft,
        setAlignLeft,
        alignRight,
        setAlignRight,
        alignCenter,
        setAlignCenter,
        selectedFont,setSelectedFont,
        textFormat,setTextFormat,
        upload,setUpload,
        uploadedFile,setUploadedFile,
        shapes,setShapes,
        rectangle,setRectangle,
        circle,setCircle,
        textbox,setTextBox,
        currentShape,setCurrentShape,
        myAddedElements,setMyAddedElements,
        zindex,setZindex
      }}
    >
      {children}
    </Context.Provider>
  );
};
