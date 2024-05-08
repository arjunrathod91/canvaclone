import React from "react";

function DesignCompo({ designCompo, setDesignCompo }) {
  return (
    <div
      className="design-compo d-flex-center"
      style={{ display: `${designCompo}` }}
      onMouseLeave={() => setDesignCompo("none")}
    >
      <div className="d1">
        <div className="c1">
          <div className="compo-h">Visual Documents</div>
          <p className="compo-p">Visual Suit</p>
          <p className="compo-p">Docs</p>
          <p className="compo-p">Presentation</p>
          <p className="compo-p">Whiteboard</p>
        </div>
        <div className="c1">
          <div className="compo-h">Photos and Videos</div>
          <p className="compo-p">Visual Suit</p>
          <p className="compo-p">Docs</p>
          <p className="compo-p">Presentation</p>
          <p className="compo-p">Whiteboard</p>
        </div>
        <div className="c1">
          <div className="compo-h">Print</div>
          <p className="compo-p">Visual Suit</p>
          <p className="compo-p">Docs</p>
          <p className="compo-p">Presentation</p>
          <p className="compo-p">Whiteboard</p>
        </div>
        <div className="c1">
          <div className="compo-h">Marketing</div>
          <p className="compo-p">Visual Suit</p>
          <p className="compo-p">Docs</p>
          <p className="compo-p">Presentation</p>
          <p className="compo-p">Whiteboard</p>
        </div>
      </div>
      <div className="d2 d-flex-center">
        <div className="compo-box">
          <div className="img-div">
          <img src="https://content-management-files.canva.com/ead085f1-8bfc-4bc1-829b-285219ce673d/53174cb2-7ba3-495e-a5bf-dcbe487d69c1.png" alt="" />
          </div>
          <div>
            <strong className="compo-box-h">Canva Free Tempaltes</strong>
            <p className="compo-box-p">Choose from thousands of canva ready-to-use templates</p>
          </div>
        </div>
        <div className="compo-box">
        <div className="img-div">
          <img src="https://content-management-files.canva.com/7dd354ac-6fb6-4627-b043-8e1f19fa945a/09182583-b019-40cf-8d38-aad8291fdbd3.png" alt="" />
          </div>
          <div>
            <strong className="compo-box-h">Canva Free Tempaltes</strong>
            <p className="compo-box-p">Choose from thousands of canva ready-to-use templates</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default DesignCompo;
