import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componenets/Home";
import Navbar from "./componenets/Navbar/Navbar";
import { MyContextProvider } from "./contextApi/Context";
import EditPage from "./pages/EditPage";
import { useEffect, useState } from "react";

function App() {
  const [loader,setLoader] = useState(true)
  useEffect(()=>{
    if(window.onload){
    console.log(window.onload)
    setLoader(true)}
    else{
      setLoader(false)
    }
  })
  return (
      <div className="App">
        <MyContextProvider>
      <BrowserRouter>
      <div className={loader ? 'flex loader-container' : 'none'}>
        <div className="loader"></div>
      </div>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editPage" element={<EditPage/>} />
        </Routes>
      </BrowserRouter>
      </MyContextProvider>
      </div>
  );
}

export default App;
