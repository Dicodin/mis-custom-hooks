import { useState } from "react"

// Esto es un ejemplo de  "hook" 
// que maneja los valores de los inputs que se deseen
export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = ()=> {
        setValues(initialState);
    };

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    };

    return [values, handleInputChange, reset];
};
