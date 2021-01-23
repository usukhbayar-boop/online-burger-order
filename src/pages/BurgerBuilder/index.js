import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    };

    ortsNemeh = (type) => {
        console.log("====>" + type);

        const newIngredients = {...this.state.ingredients};
        newIngredients[type]++;

        this.setState({ingredients: newIngredients});
    }

    render() {
        return (
            <div>
                <Burger orts={this.state.ingredients} />
                <BuildControls ortsNemeh={this.ortsNemeh}/>
            </div>
        )
    }
}

export default BurgerBuilder;