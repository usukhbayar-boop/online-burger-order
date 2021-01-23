import React from "react";


import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = props => (
    <div className={css.BuildControls}>
        <BuildControl ortsNemeh={props.ortsNemeh} type="salad" orts="Салад"/>
        <BuildControl ortsNemeh={props.ortsNemeh} type="bacon" orts="Гахайн Мах"/>
        <BuildControl ortsNemeh={props.ortsNemeh} type="cheese" orts="Бяслаг"/>
        <BuildControl ortsNemeh={props.ortsNemeh} type="meat" orts="Үхрийн Мах"/>
    </div>
);

export default BuildControls;
