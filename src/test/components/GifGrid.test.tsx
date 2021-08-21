import React from 'react';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GifsData } from '../../interfaces/GifData';

import GifGrid from '../../components/GifGrid';

jest.mock( '../../hooks/useFetchGifs' );

describe( 'Test <GifGrid/>', () => {
  const category = 'Goku';
  const mockUseFetchGifs = useFetchGifs as jest.MockedFunction<typeof useFetchGifs>;

  test( 'should display correctly', () => {

    mockUseFetchGifs.mockImplementation( category => {
      return { data: [], loading: true }
    } );

    const wrapper = shallow( <GifGrid category={ category }/> );
    expect( wrapper ).toMatchSnapshot();
  } );

  test( 'should display items from useFetchGifs', () => {

    const data: GifsData[] = [
      {
        id: '0',
        url: 'https://lorem.com/img',
        title: 'mockTitle'
      },
      {
        id: '1',
        url: 'https://lorem.com/img',
        title: 'mockTitle__1'
      }
    ];

    mockUseFetchGifs.mockImplementation( category => {
      return { data, loading: false };
    } );

    const wrapper = shallow( <GifGrid category={ category }/> );

    expect( wrapper.find( 'p' ).exists() ).toBe( false );
    expect( wrapper.find( 'GifGridItem' ).length ).toBe( data.length );
  } );

} );