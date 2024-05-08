import React from 'react'

function PlansCompo({plansAndPriceCompo,setPlansAndPriceCompo}) {
  return (
    <div className='plans-compo' style={{display:`${plansAndPriceCompo}`}} onMouseLeave={()=>setPlansAndPriceCompo('none')}>
      <div className="d1">
        <div className="compo-box">
        <div className="img-div">
          <img src="https://content-management-files.canva.com/5d9cc168-eb0c-46ab-a09d-51a6d1f78076/c23d8139-793a-41fb-aa73-0410a1214972.png" alt="" />
          </div>
          <div className="compo-box-h">Free</div>
          <div className='compo-box-p'></div>
        </div>
        <div className="compo-box">
        <div className="img-div">
          <img src="https://content-management-files.canva.com/03b62b77-f82b-46e1-9720-44d3840ff350/da908fb8-7108-4251-aa01-bf6b1fc97441.png" alt="" />
          </div>
          <div className="compo-box-h">Pro</div>
          <div className='compo-box-p'></div>
        </div>
        <div className="compo-box">
        <div className="img-div">
          <img src="https://content-management-files.canva.com/69f15c11-39cf-4edf-bdb4-c6c0fedfebea/941066b2-c94a-4e89-973e-7897f242a9cc.png" alt="" />  
          </div>
          <div className="compo-box-h">Teams</div>
          <div className='compo-box-p'></div>
        </div>
      </div>
      <div className="d3">
        <div className="svg-h-p d-flex-center">
          <img src="https://content-management-files.canva.com/a354d520-cabc-4f77-b99d-49fe3e82e8f7/ea1287bd-1b4e-4a99-936c-d9f65c94cfd9.png" alt="" />
          <div>
            <div className="compo-box-h">Education</div>
            <div className="compo-box-p">A powerful free tool for students</div>
          </div>
        </div>
        <div className="svg-h-p d-flex-center">
          <img src="https://content-management-files.canva.com/a354d520-cabc-4f77-b99d-49fe3e82e8f7/ea1287bd-1b4e-4a99-936c-d9f65c94cfd9.png" alt="" />
          <div>
            <div className="compo-box-h">Not for profite</div>
            <div className="compo-box-p">Canva is not for profile anyone can use and create a buityful designs</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlansCompo
