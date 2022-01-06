import React from 'react';
import "./form-error.style.scss";

const FormError = ({formError}) =>{

  return(
    <div className='form-error'>
    {
      (formError.length > 0 ) ?
          <label className='form-error'>{formError}</label>
          :
          null
    }
    </div>
  )
};
export default FormError;