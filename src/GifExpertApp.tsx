import React, {useState} from 'react';
import AddCategoryComponent from "./components/AddCategory";
import GifGridComponent from "./components/GifGrid";
import 'animate.css';

const GifExpertApp = ({ value = [] }: { value: string[] }) => {
  
  const [categories, setCategories] = useState( value );

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategoryComponent setCategories={ setCategories }/>
      <hr/>
      <ol>
        {
          categories.map( category => (
            <GifGridComponent
              key={ category }
              category={ category }
            />
          ))
        }
      </ol>
    </>
  );
};

export default GifExpertApp;
