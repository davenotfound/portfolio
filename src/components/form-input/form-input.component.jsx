import React from "react";
import "./form-input.styles.scss";

const FormInput = ({handleChange, label, ...otherProps}) => {
  return(
    <div className="group">
      <label className='form-input-label'>{label}</label>
      {
        (label === 'MESSAGE') ? 
        <textarea className="form-input" onChange={handleChange} {...otherProps} />
        :
        <input className="form-input" onChange={handleChange} {...otherProps} />
      }
    </div>
  )
};

export default FormInput;