import React, { useState } from "react";

function Button(props) {
    const [variant] = useState(props.variant);

    return (
        <div className="field">
            <input className="is-checkradio" id="exampleRadioInline1" type="radio" name="exampleRadioInline" checked="checked" />
            <label for="exampleRadioInline1">Option 1</label>
            <input className="is-checkradio" id="exampleRadioInline2" type="radio" name="exampleRadioInline" />
            <label for="exampleRadioInline2">Option 2</label>
        </div>

    );
}
export default Button;