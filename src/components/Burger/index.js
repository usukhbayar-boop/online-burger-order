import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";

const Burger = props => {

    const items = Object.entries(props.orts);

    let contents = [];

    items.forEach( el => {
        for(let i=0; i<el[1]; i++) 
            contents.push(<BurgerIngredient key={`${el[0]}${i+1}`} type={el[0]} />);
    } );

    if(contents.length === 0) contents = <p>Бургерийн орцыг сонгоно уу!</p>

    return(
        <div className={css.Burger}>
            <BurgerIngredient type="bread-top"/>
            {contents}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;