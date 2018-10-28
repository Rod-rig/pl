import {mount} from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Loader, Prediction} from '../';
import {scheduleMock} from '../../__mocks__';

describe('PredictionForm', () => {
  it('should render loader', () => {
    const notRenderedComp = mount(
      <Prediction
        store={{
          currentDate: '',
          dates: [],
          fetchMatches: () => ({}),
          handleChange: () => ({}),
          handleSubmit: () => ({}),
          isLoaded: false,
          isSuccessSubmit: false,
          matches: undefined,
          setCurrentDate: () => ({}),
        }}
      />);
    expect(notRenderedComp.find(Loader)).toHaveLength(1);
  });

  it('should render correctly', () => {
    const comp = (
      <Prediction
        store={{
          currentDate: '',
          dates: [],
          fetchMatches: () => ({}),
          handleChange: () => ({}),
          handleSubmit: () => ({}),
          isLoaded: true,
          isSuccessSubmit: false,
          matches: scheduleMock,
          setCurrentDate: () => ({}),
        }}
      />);
    const tree = renderer.create(comp).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
