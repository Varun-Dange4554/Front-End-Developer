import PropType from 'prop-types';

export const Form =({ formData }) =>{
    console.log('🚀 ~ formData:', formData);
    return (
        <>
        <h1>form</h1>
        <form></form>

        </>
    );
};

Form.prototype = {
    formData: PropType.arrayOf(
        PropType.shape({
            name:PropType.string.isRequired,
            label:PropType.string.isRequired,
            type:PropType.string.isRequired,
            isRequired:PropType.bool.isRequired,
            placeholder:PropType.string.isRequired,
        }).isRequired
    ),
};