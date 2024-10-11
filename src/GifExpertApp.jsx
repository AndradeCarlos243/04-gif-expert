import { AddCategory, GifGrid } from './components';
import { useState } from 'react';
import tenorLogo from './assets/svg/via_tenor_logo_grey.svg';

export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState(['Super Mario World', 'The legend of Zelda', 'Plants vs Zombies', 'It Takes Two']);

    const handleAddCategory = ( category ) => {
        if( categories.includes(category) ) return false;
        setCategories([category, ...categories]);
    }

    return (
        <>
            <h1>{"Nasemi Gif's App".toUpperCase()} <img className="logo-tenor" src={tenorLogo} alt="marca de agua de tenor" width={100} /></h1>
            <AddCategory handleAddCategory = { handleAddCategory } />
            {
                categories.map( category => (
                    <GifGrid key={ category.replace(/ /g, "_") } category={ category } query={category.replace(/ /g, "-").toLowerCase()} />
                ))    
            }
        </>
    );
}

export default GifExpertApp;