import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        
        const newInputValue = inputValue.trim();
        
        if (newInputValue.length === 0) return;
        
        onNewCategory(newInputValue);
        setInputValue('');

    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Category..."
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
};

export default AddCategory;