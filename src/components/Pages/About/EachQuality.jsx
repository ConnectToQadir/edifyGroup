import React from 'react'

function EachQuality(props) {
    return (
        <div className="row" style={{padding:"20px 0px"}}>
            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 aboutEachContentItemDiv">
                <div className='allAbouts'>
                    <div className="eachAbout">
                        <div className="header">
                            <div className="icon aboutIcons">
                                <i className={props.iconClass}></i>
                            </div>
                            <h3 className='tlbh' style={{ marginBottom: "0", fontSize: "20px" }}>{props.title}</h3>
                        </div>
                        <p className='slbp' style={{textAlign:"justify"}}>{props.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EachQuality