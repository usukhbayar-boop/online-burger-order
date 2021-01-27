import React from "react";
import Button from "../General/Button";

const OrderSummary = props => {
    return (
    <div>
        <h3>Таны захиалга</h3>
        <p>Таны сонгосон орцууд:</p>
        <ul>
            {Object.keys(props.ingredients).map(el => <li key={el}>{props.ingredientsNames[el]}: {props.ingredients[el]}</li>)}
        </ul>
        <p><strong>Захиалагын дүн: {props.price}</strong></p>

        <p>Цаашаа үргэлжлүүлэх үү?</p>
        <Button clicked={props.onCancel} btnType="Danger" text="Татгалзах"/>
        <Button clicked={props.onContinue} btnType="Success" text="Зөвшөөрөх"/>
    </div>
    );
};

export default OrderSummary;