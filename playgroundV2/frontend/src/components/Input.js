import React from "react";
import '../css/input.css';

const Input = ({labelName, id}) => {
    return (
        <>
            <div className="form__group field">
                <input type="input" className="form__field" placeholder="Name" required="" id={id} />
                <label htmlFor="name" className="form__label">{labelName}</label>
            </div> 
        </>
    );
};

export default Input;

