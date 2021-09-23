import React from "react";
import {NavLink} from "react-router-dom";
import ScrollableAnchor from "react-scrollable-anchor";


const Base = () => {
    return (
        <div className="wrapper">
            <ScrollableAnchor id={"base"}>
                <div className="fone">
                    <NavLink className="fone__left" exact to="/fit/#home-fit">
                        <div className="logo__left"/>
                        <div className="fit-zone">
                            Fit <br/> Zone
                        </div>
                    </NavLink>
                    {/*<NavLink className="fone__medium" exact to="/team/#home-team">*/}
                    {/*    <div className="logo__right"/>*/}
                    {/*    <div className="team-zone">*/}
                    {/*        Team <br/> Zone*/}
                    {/*    </div>*/}
                    {/*</NavLink>*/}
                    <NavLink className="fone__right" exact to="/beauty/#home-beauty">
                        <div className="logo__right"/>
                        <div className="beauty-zone">
                            Beauty <br/> Zone
                        </div>
                    </NavLink>

                </div>
            </ScrollableAnchor>
        </div>
    );
}

export default Base;
