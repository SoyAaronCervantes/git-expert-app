import React, {ChangeEvent, useState} from 'react';
import PropTypes from 'prop-types';
import {StateAction} from "../interfaces/StateAction";

const AddCategoryComponent = ({ setCategories }: StateAction<string[]> ) => {
  
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e: ChangeEvent<HTMLInputElement> ) => {
    const value = e.target.value
    setInputValue( value );
  }
  
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ( inputValue.trim().length > 2 ) {
      setCategories( categories => [ inputValue, ...categories ] )
      setInputValue('');
    }
  };
  
  return (
    <form onSubmit={ handleSubmit }>
      <p>{ inputValue }</p>
      <input
        type="text"
        value={inputValue}
        onChange={ handleInputChange }
      />
    </form>
  );
};

AddCategoryComponent.propTypes = {
  setCategories: PropTypes.func.isRequired
};

export default AddCategoryComponent;
