import React from 'react';
import { shallow} from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Test <GifExpertApp/>', () => {
  const wrapper = shallow(<GifExpertApp />);

  test('should display correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  })

  test('should display category list', () => {
    const categories = ['Goku', 'Smite'];
    const wrapper = shallow(<GifExpertApp value={categories} />)
    expect( wrapper ).toMatchSnapshot()
    expect( wrapper.find('GifGridComponent').length ).toBe( categories.length );
  });

});