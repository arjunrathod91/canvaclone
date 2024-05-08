import React, { useContext, useState } from "react";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PrintIcon from "@mui/icons-material/Print";
import AssistantIcon from "@mui/icons-material/Assistant";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DescriptionIcon from "@mui/icons-material/Description";
import SearchIcon from "@mui/icons-material/Search";
import { Context } from "../contextApi/Context";

function Home() {
  const {sidebar,setSidebar} = useContext(Context)
  return (
    <div className={sidebar? 'if-sidebar' : 'home'}>
      <div className="hero">
        <label>What will you design today?</label>
        <div className="ab-btn">
          <button>Custom Size</button>
          <button>Upload</button>
        </div>
        <div className="search">
          <div className="icon">
            <SearchIcon sx={{ color: "#a548ff" }} />
          </div>
          <input type="text" />
        </div>
        <div className="tasks">
          <div className="task">
            <AssistantIcon
              sx={{ color: "#575efd", fontSize: 50, borderRadius: "50%" }}
              className="hov"
            />
            <label>For You</label>
          </div>
          <div className="task">
            <DescriptionIcon
              sx={{ color: "#0fb8ce", fontSize: 50, borderRadius: "50%" }}
              className="hov hov2"
            />
            <label>Docs</label>
          </div>
          <div className="task">
            <MovieFilterIcon
              sx={{ color: "#ff9900", fontSize: 50, borderRadius: "50%" }}
              className="hov hov3"
            />
            <label>Whiteboards</label>
          </div>
          <div className="task">
            <WebAssetIcon
              sx={{ color: "#575efd", fontSize: 50, borderRadius: "50%" }}
              className="hov hov4"
            />
            <label>Website</label>
          </div>
          <div className="task">
            <OndemandVideoIcon
              sx={{ color: "#575efd", fontSize: 50, borderRadius: "50%" }}
              className="hov hov5"
            />
            <label>Social Media</label>
          </div>
          <div className="task">
            <PrintIcon
              sx={{ color: "#21a663", fontSize: 50, borderRadius: "50%" }}
              className="hov hov6"
            />
            <label>Print Products</label>
          </div>
          <div className="task">
            <MoreHorizIcon
              sx={{ color: "#a548ff", fontSize: 50, borderRadius: "50%" }}
              className="hov hov7"
            />
            <label>More</label>
          </div>
        </div>
      </div>
      <div className="section1">
        <div className="head">
          <label>You Might To Do</label>
        </div>
        <div className="todos">
          <div>
            <div className="box">
                <img src="https://static.canva.com/web/images/fee2a614b2b937f0d441f65282c22096.png" alt="" />
            </div>
            <label>Play With Canva</label>
          </div>
          <div>
            <div className="box">
                <img src="https://template.canva.com/EAFdVYrB6ok/3/0/416w-TUNKKW6oeLc.jpg" alt="" />
            </div>
            <label>Presentation (16:9)</label>
          </div>
          <div>
            <div className="box">
                <img src="https://template.canva.com/EAFdVYTOpz0/1/0/400w-daEvcUOChto.jpg" alt="" />
            </div>
            <label>Play With Canva</label>
          </div>
          <div>
            <div className="box"></div>
            <label>Play With Canva</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
