import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ handleAddCategory }) => {
    const [ txtCategory, setTxtCategory ] = useState('');

    const handleChangeCategory = ({target: {value}}) => {
        setTxtCategory(value);
    }

    const handleFormAdd = (e) => {
        e.preventDefault();
        const category = txtCategory.trim();
        if( category.length <= 2 ) return false;
        handleAddCategory(category);
        setTxtCategory('');
    }

    return (
        <>
            <form onSubmit={ handleFormAdd } aria-label='form'>
                <input type="text" name="txt-category" id="txt-category" value={ txtCategory } placeholder='Buscar Gifs' onChange={ handleChangeCategory }/>
            </form>
        </>
    );
}

export default AddCategory;

AddCategory.propTypes = {
    handleAddCategory: PropTypes.func.isRequired,
}