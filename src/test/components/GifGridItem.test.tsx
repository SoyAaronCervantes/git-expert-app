import React, {ImgHTMLAttributes} from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';
import {GifsData} from '../../interfaces/GifData';

describe('Test on <GifGridItem />', () => {
  const data: GifsData = { id: 'strongID', title: 'oneplus', url: 'https://url.com' }

  let wrapper = shallow( <GifGridItem item={ data } /> )
  beforeEach( () => wrapper = shallow( <GifGridItem item={ data } /> ) )

  test('display <GifFridItem /> correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('should have a paragraph using title property', () => {
    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe( data.title );
  });

  test( 'should use title property on alt property and get an image from url property', () => {
    const img = wrapper.find('img');
    const imgProps: ImgHTMLAttributes<any> = img.props();
    expect( imgProps.src ).toBe(data.url );
    expect( imgProps.alt ).toBe(data.title );
   })

  test( 'should have "animate__fadeIn" on container', () => {
    const div = wrapper.find('div');
    const divProps = div.props();
    expect( divProps.className ).toMatch('animate__fadeIn')
  })

});