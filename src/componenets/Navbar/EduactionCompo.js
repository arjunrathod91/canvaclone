import React from "react";

function EduactionCompo({ educationCompo, setEducationCompo }) {
  return (
    <div
      className="eduaction-compo"
      style={{ display: `${educationCompo}` }}
      onMouseLeave={() => setEducationCompo("none")}
    >
      <div className="d4">
          <div className="svg-h-p d-flex-center">
            <img
              src="https://content-management-files.canva.com/f1742651-9e43-4347-a8bd-48dfdf418a4c/6dbd751b-a280-4c33-9a8c-fe93f36c8389.png"
              alt=""
            />
            <div>
              <div className="compo-box-h">Teachers and School</div>
              <p className="compo-box-p">Create and collaborate in schools</p>
            </div>
          </div>
          <div className="svg-h-p d-flex-center">
            <img
              src="https://content-management-files.canva.com/f1742651-9e43-4347-a8bd-48dfdf418a4c/6dbd751b-a280-4c33-9a8c-fe93f36c8389.png"
              alt=""
            />
            <div>
              <div className="compo-box-h">Create and Win</div>
              <p className="compo-box-p">Create new design</p>
            </div>
          </div>
          <div className="svg-h-p d-flex-center">
            <img
              src="https://content-management-files.canva.com/f1742651-9e43-4347-a8bd-48dfdf418a4c/6dbd751b-a280-4c33-9a8c-fe93f36c8389.png"
              alt=""
            />
            <div>
              <div className="compo-box-h">Case Studies</div>
              <p className="compo-box-p">
                Here how others deliver and collaborate
              </p>
          </div>
        </div>
      </div>
      <div className="d3">
        <div className="compo-box">
          <div className="img-div" style={{ width: "230px" }}>
          <img
            src="https://content-management-files.canva.com/9e56b200-85a6-4de2-a93a-55302d2ca0cb/b350b9da-e920-46cb-bbc7-9d93e2655705.png"
            alt=""
          />
          </div>
          <div className="compo-box-h">Create an Education Teacher</div>
          <div className="compo-box-p">
            Create and share your canva design and earn
          </div>
        </div>
      </div>
    </div>
  );
}

export default EduactionCompo;
