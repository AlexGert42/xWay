import React from "react";
import s from './Team.module.scss';
import ScrollableAnchor from "react-scrollable-anchor";

export const Team = () => {

    return (
        <div className={s.team}>
            <ScrollableAnchor id={"home-team"}>
                <section className={s.team__king_screen}>
                    Teams
                </section>
            </ScrollableAnchor>
            <section>
                <div className="container">

                </div>
            </section>
        </div>
    )
}