import { shallow } from 'enzyme';
import React  from 'react';
import {getGifs} from '../../../services/api/ServiceApiGifs';

describe('Test on Service API Gifs', () => {

  describe('Testing "getGifs"', () => {

    test( 'should return an empty array', async () => {
      const value = await getGifs('');
      expect( value.length ).toBe( 0 );
    });

    test('should get 10 elements', async () => {
      const value = await getGifs('code');
      expect( value.length ).toBe(10 );
    });

  })

});

