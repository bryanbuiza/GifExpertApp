import { useState } from "react";
import AddCategory from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory
                categories={categories}
                setCategories={setCategories} />
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>;
                })}
            </ol>
        </>
    )
};