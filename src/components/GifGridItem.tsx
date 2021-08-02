import React from 'react';
import PropTypes from 'prop-types';
import {GifsData} from "../interfaces/GifData";

const GifGridItem = ({ item }: { item: GifsData }) => {
  return (
    <div className={ "card" }>
      <img src={ item.url } alt={ item.title }  />
      <p>{ item.title }</p>
    </div>
  );
};

GifGridItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default GifGridItem;
