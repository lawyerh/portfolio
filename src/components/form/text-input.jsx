import React from "react";

function TextInput(field) {
        return (
            <div className="form__group">
                <input 
                type="text" 
                name={field.name}
                className="form__text"
                placeholder={field.placeholder}
                {...field.input} />

                <span className="form__placeholder">{field.placeholder}</span>


            </div>
        )
}

export default TextInput;