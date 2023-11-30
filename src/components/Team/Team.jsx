import React from 'react'
import './team.css'

const Team = () => {
    return (
        <div className='team__section'>
            <div className="team__title">
                <p>Our Team</p>
            </div>
            <div className="team__container">
                <div className="team__member first_col">
                    <div className="team__member_cell">
                        <div className="team__member_img">
                            <img src="danialDef.png" alt="" />
                        </div>
                        <div className="team__member_detail">
                            <h5>Danial Def</h5>
                            <p>301 cases</p>
                        </div>
                    </div>
                </div>
                <div className="team__member mid_col">
                    <div className="team__member_cell team__member_selected">
                        <div className="team__member_img">
                            <img src="sanfole.png" alt="" />
                        </div>
                        <div className="team__member_detail">
                            <h5>Sanfole</h5>
                            <p>850 cases</p>
                        </div>
                    </div>
                </div>
                <div className="team__member last_col">
                    <div className="team__member_cell">
                        <div className="team__member_img">
                            <img src="cesforila.png" alt="" />
                        </div>
                        <div className="team__member_detail">
                            <h5>Cesforila</h5>
                            <p>470 cases</p>
                        </div>
                    </div>
                </div>
                <div className="team__member firs_col">
                    <div className="team__member_cell">
                        <div className="team__member_img">
                            <img src="colleen.png" alt="" />
                        </div>
                        <div className="team__member_detail">
                            <h5>Colleen</h5>
                            <p>180 cases</p>
                        </div>
                    </div>
                </div>
                <div className="team__member mid_col">
                    <div className="team__member_cell">
                        <div className="team__member_img">
                            <img src="haldone.png" alt="" />
                        </div>
                        <div className="team__member_detail">
                            <h5>Haldone</h5>
                            <p>212 cases</p>
                        </div>
                    </div>
                </div>
                <div className="team__member last_col">
                    <div className="team__member_cell">
                        <div className="team__member_img">
                            <img src="nikJeo.png" alt="" />
                        </div>
                        <div className="team__member_detail">
                            <h5>Nik Jeo</h5>
                            <p>350 cases</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
