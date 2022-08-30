import React from "react";
import "./Subtotal.css";
//import { Currency } from "currency-formatter";

import CurrencyFormat from "react-currency-format";



function Subtotal() {
    return(
        <div className="subtotal">
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal (0 items): <strong>$0</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />This contains a gift
                        </small>
                    </>
                )}


                decimalScale={2}
                value = {0}
                displayType = {"text"}
                thousandSeparator={true}

            />
            <button>Proceed to Checkout</button>
        </div>
    );
}


export default Subtotal;