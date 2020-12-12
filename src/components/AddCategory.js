import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    // const [{setCategories}] = this.props;
    const initialInputValue = ''
    const [inputValue, setInputValue] = useState(initialInputValue);

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length>2){
            setCategories(cats => [inputValue, ...cats])
            setInputValue(initialInputValue)
        }
        return 
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInputChange} value={inputValue} placeholder="Ricky y morty"/>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}