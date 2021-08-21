import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Test on AddCategory', () => {
  const setCategories = jest.fn()
  let wrapper: ShallowWrapper;

  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={ setCategories } /> );
  });

  test('should display correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('should change input', () => {

    const input = wrapper.find('input');
    const value = 'Hola mundo'

    input.simulate('change', { target: { value } });

    const paragraph = wrapper.find('p');
    const paragraphValue = paragraph.text().trim()

    expect( paragraphValue ).toBe( value );
  })

  test('should not post submit', () => {
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: () => {} });

    expect( setCategories ).not.toHaveBeenCalled();
  });

  test('should call setCategory and clean input', () => {
    const value = "Hola mundo"

    const input = wrapper.find('input');
    input.simulate( 'change', { target: { value } } );

    const form = wrapper.find('form');
    form.simulate( 'submit', { preventDefault: () => {} })

    expect( setCategories ).toHaveBeenCalled();

    expect( input.prop('value') ).toBe('' );

  })

})