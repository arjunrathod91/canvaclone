import React from "react";

function BuisenessCompo({ buisenessCompo ,setBuisenessCompo}) {
  return (
    <div className="buiseness-compo" style={{ display: `${buisenessCompo}` }} onMouseLeave={()=>setBuisenessCompo('none')}>
      <div className="d1">
        <div className="c1">
          <div className="compo-h">Canva For Buiseness</div>
          <p className="compo-p">Visual Suit</p>
          <p className="compo-p">Docs</p>
          <p className="compo-p">Presentation</p>
          <p className="compo-p">Whiteboard</p>
        </div>
        <div className="c1">
          <div className="compo-h">Type</div>
          <p className="compo-p">Visual Suit</p>
          <p className="compo-p">Docs</p>
          <p className="compo-p">Presentation</p>
          <p className="compo-p">Whiteboard</p>
        </div>
        <div className="c1">
          <div className="compo-h">Solutions</div>
          <p className="compo-p">Visual Suit</p>
          <p className="compo-p">Docs</p>
          <p className="compo-p">Presentation</p>
          <p className="compo-p">Whiteboard</p>
        </div>
        <div className="c1">
          <div className="compo-h">Resources</div>
          <p className="compo-p">Visual Suit</p>
          <p className="compo-p">Docs</p>
          <p className="compo-p">Presentation</p>
          <p className="compo-p">Whiteboard</p>
        </div>
      </div>
      <div className="d3 d-flex-center">
        <div className="svg-h-p  d-flex-center">
          <div>
            <img
              src="https://content-management-files.canva.com/e1c7d5d8-5ef5-4a4f-917c-161074c776d3/db5f60de-a3fb-48db-84fc-56bd563386ee.png"
              alt=""
              className="b-r"
            />
          </div>
          <div>
            <div className="compo-box-h">Visual Suit</div>
            <div className="compo-box-p">Reimagine the way you work</div>
          </div>
        </div>
        <div className="svg-h-p  d-flex-center">
          <div>
            <img
              src="https://content-management-files.canva.com/e1c7d5d8-5ef5-4a4f-917c-161074c776d3/db5f60de-a3fb-48db-84fc-56bd563386ee.png"
              alt=""
              className="b-r"
            />
          </div>
          <div>
            <div className="compo-box-h">Visual Suit</div>
            <div className="compo-box-p">Reimagine the way you work</div>
          </div>
        </div>
        <div className="svg-h-p d-flex-center">
          <div>
            <img
              src="https://content-management-files.canva.com/e1c7d5d8-5ef5-4a4f-917c-161074c776d3/db5f60de-a3fb-48db-84fc-56bd563386ee.png"
              alt=""
              className="b-r"
            />
          </div>
          <div>
            <div className="compo-box-h">Visual Suit</div>
            <div className="compo-box-p">Reimagine the way you work</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuisenessCompo;
