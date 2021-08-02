import React from 'react';
import PropTypes from 'prop-types';
import {useFetchGifs} from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGridComponent = ({ category }: { category: string }) => {
  
  const { data:images, loading } = useFetchGifs( category );

  return (
    <>
      <h3>{ category }</h3>
      { loading && <p>Loading...</p> }
      <div className={ "grid--cards" }>
        {
          images.map( image => (
            <GifGridItem
              key={ image.id }
              item={ image } />
          ))
        }
      </div>
    </>
  );
};

GifGridComponent.propTypes = {
  category: PropTypes.string.isRequired
};

export default GifGridComponent;
