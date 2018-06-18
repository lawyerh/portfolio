import React from "react";

function TextAreaInput(field) {
        return (
            <div className="form__group">
                <textarea
                name={field.name}
                className="form__text-area"
                placeholder={field.placeholder}
                {...field.input} />

                <span className="form__placeholder">{field.placeholder}</span>


            </div>
        )
}

export default TextAreaInput;