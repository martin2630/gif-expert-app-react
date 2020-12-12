import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ["one punch", "pokemon", "christmans"];
    const initialCategories = ["one punch"]
    const [categories, setCategories] = useState(initialCategories);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>
            <div>
                {
                    categories.map( category => (
                            <GifGrid 
                                key={category}
                                category={category}
                            />
                        )
                    )
                }
            </div>
        </>
    )
}
