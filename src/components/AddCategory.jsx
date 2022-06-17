import { useState } from "react";

const AddCategory = ({ categories, setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === '') {
            return;
        };

        if (inputValue === '') {
            return;
        }

        if (categories.includes(inputValue)) {
            return;
        };

        setCategories([inputValue, ...categories]);

        setInputValue('');

    };

    return (
        <form onSubmit={onSubmit}>
            <input
                id="input-category"
                type="text"
                placeholder="Category..."
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
};

export default AddCategory;