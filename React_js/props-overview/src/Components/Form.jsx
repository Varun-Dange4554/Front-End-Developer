import PropTypes from 'prop-types';
import { useState } from 'react';

/** 
 @param {formData}

 { 
 userName:'',
 userPassword:'',
 userPhone:'',
 userEmail:'',
 }
 */

export const Form = ({ formData }) =>{
    console.log('🚀 ~ formData:', formData);
    const [formValue, setFormValue] = useState (()=>{
        return formData.reduce((acc, curr) => {
            acc[curr.name] = '';
            return acc;
        }, {});
    });
    console.log('🚀 ~ formValue:', formValue);
    
    
    return (
        <>
        <h1>Form</h1>
        <form>
            { formData?.map((el, i)=> {
                return (
                    <div key={i}>
                        <label name={el.name} htmlFor={el.id} >
                            {el.label}
                        </label>
                        <br />
                        <br />
                        <input
                        id={el.id}
                        name={el.name}
                        type={el.name}
                        placeholder={el.placeholder}
                        required={el.isRequired}
                        autoComplete='off'
                         />
                         <br />
                         <br />

                    </div>
                );
            })}
        </form>

        </>
    );
};

Form.propTypes = {
    formData: PropTypes.arrayOf(
        PropTypes.shape({
            name:PropTypes.string.isRequired,
            label:PropTypes.string.isRequired,
            type:PropTypes.string.isRequired,
            isRequired:PropTypes.bool.isRequired,
            placeholder:PropTypes.string.isRequired,
        }).isRequired
    ),
};



