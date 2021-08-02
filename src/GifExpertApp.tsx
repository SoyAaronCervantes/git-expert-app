import React, {useState} from 'react';
import AddCategoryComponent from "./components/AddCategory";
import GifGridComponent from "./components/GifGrid";

const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['Bleach']);

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
