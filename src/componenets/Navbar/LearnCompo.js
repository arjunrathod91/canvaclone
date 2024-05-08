import React from "react";

function LearnCompo({ learnCompo, setLearnCompo }) {
  return (
    <div
      className="learn-compo"
      style={{ display: `${learnCompo}` }}
      onMouseLeave={() => setLearnCompo("none")}
    >
      <div className="d3">
        <div className="c1">
          <img src="https://content-management-files.canva.com/2a76e630-25ae-4c93-9cd9-cddbce160d0d/326e3ccb-f459-4c97-845b-f2d055ef0d3a.png" alt="" className="b-r" style={{height:'100px',width:'200px'}} />
          <div className="compo-h">Create Top Designs</div>
          <p className="compo-p">Logo Maker</p>
          <p className="compo-p">Baner Maker</p>
          <p className="compo-p">Poster Maker</p>
        </div>
      </div>
      <div className="d1" style={{flexDirection:"column"}}>
        <div className="svg-h-p d-flex-center">
          <img src="https://content-management-files.canva.com/a354d520-cabc-4f77-b99d-49fe3e82e8f7/ea1287bd-1b4e-4a99-936c-d9f65c94cfd9.png" alt="" />
          <div>
            <div className="compo-box-h">Canva Blog</div>
            <div className="compo-box-p">Exploy articled and blog</div>
          </div>
        </div>
        <div className="svg-h-p d-flex-center">
        <img src="" alt="" />
          <div>
            <div className="compo-box-h">Design School</div>
            <div className="compo-box-p">Enjoy toutorials and learn</div>
          </div>
        </div>
        <div className="svg-h-p d-flex-center">
        <img src="" alt="" />
          <div>
            <div className="compo-box-h">Events</div>
            <div className="compo-box-p">Be experienced by events</div>
          </div>
        </div>
      </div>
      <div className="d2">
        <div className="compo-box">
        <div className="img-div" style={{width:'230px'}}>
          <img src="https://content-management-files.canva.com/1723ed4f-5813-4543-a999-e3a93a9d8546/5e5e2194-8422-4436-b75d-c33b4906cd0e.png" alt=""/>
        </div>
          <div className="compo-box-h">Getting Started</div>
          <div className="compo-box-p">try our quick intro for gettting started</div>
        </div>
      </div>
    </div>
  );
}

export default LearnCompo;
