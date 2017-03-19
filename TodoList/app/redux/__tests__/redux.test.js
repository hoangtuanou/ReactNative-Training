import 'react-native';
import {types, actionCreators, reducer} from '../todoRedux';

describe('actions', () => {
  it('add Item', () => {
    const expected = {
      type: types.ADD_ITEM,
      payload: 'go to sleep'
    };
    expect(actionCreators.addItem('go to sleep')).toEqual(expected);
  });
  it('toogle Item', () => {
    const expected = {
      type:types.TOGGLE_ITEM_COMPLETED,
      payload: 1
    }
    expect(actionCreators.toggleItem(1)).toEqual(expected);
  });
  it('remove Item', () => {
    const expected = {
      type: types.REMOVE_ITEM,
      payload: 1
    }
    expect(actionCreators.removeItem(1)).toEqual(expected);
  });
  it('remove Item completed', () => {
    const expected = {
      type: types.REMOVE_ITEM_COMPLETED
    }
    expect(actionCreators.removeItemCompleted()).toEqual(expected);
  });
})

describe('reducers', () => {
  let state ={
    items: []
  };
  it('should retrun initial state', () => {
    expect(reducer(undefined,{})).toEqual({items:[]});
  });
  it('should add item', () => {
    state = reducer(state,{type: types.ADD_ITEM, payload: 'go to sleep'});
    const expected = {items:[{label: 'go to sleep', completed: false}]};
    expect(state)
      .toEqual(expected);
    state = reducer(state,{type: types.ADD_ITEM, payload: 'do homework'});
    expect(state)
      .toEqual({items:[{label: 'do homework', completed: false},{label: 'go to sleep', completed: false}]});
  });
  it('should toggle item', () => {
    state = reducer(state,{type: types.TOGGLE_ITEM_COMPLETED,payload: 1});
    const expected = {items:[{label: 'do homework', completed: false},{label: 'go to sleep', completed: true}]};
    expect(state)
      .toEqual(expected);
  });
  it('should remove item', () => {
    state = reducer(state, {type: types.REMOVE_ITEM, payload: 0});
    const expected = {items:[{label: 'go to sleep', completed: true}]};
    expect(state).toEqual(expected);
  });
  it('should remove item completed', () => {
    state = reducer(state, {type: types.REMOVE_ITEM_COMPLETED});
    const expected = {items:[]};
    expect(state).toEqual(expected);
  });
})
