import 'react-native';
import React from 'react';
import * as actions from '../index';
import * as types from '../../constants/ActionTypes';

describe("test actions", () => {
  it("test adding item to basket", () => {
    const expected = {
      type: types.ADD_TO_BASKET,
      id: 0,
      name: "product1",
      brand: "sama",
      ean: 1
    }
    expect(actions.addToBasket(0,"product1","sama",1)).toEqual(expected)
  })
  it("test removing item from basket", () => {
    const expected = {
      type: types.REMOVE_FROM_BASKET,
      id: 0
    }
    expect(actions.removeFromBasket(0)).toEqual(expected)
  })
  it("test toggle service", () => {
    const expected = {
      type: types.TOGGLE_SERVICE,
      id: 0,
      service: "mmm"
    }
    expect(actions.toggleService(0,"mmm")).toEqual(expected)
  })
  it("test empty basket", () => {
    const expected = {
      type: types.EMPTY_BASKET
    }
    expect(actions.emptyBasket(0)).toEqual(expected)
  })
  it("test change basket quantity", () => {
    const expected = {
      type: types.CHANGE_BASKET_QUANTITY,
      id: 0,
      quantity: 1
    }
    expect(actions.changeBasketQuantity(0,1)).toEqual(expected)
  })
  it("test add to comparator", () => {
    const expected = {
      type: types.ADD_TO_COMPARATOR,
      id: 0
    }
    expect(actions.addToComparator(0)).toEqual(expected)
  })
  it("test removing item from comparator", () => {
    const expected = {
      type: types.REMOVE_FROM_COMPARATOR,
      id: 0
    }
    expect(actions.removeFromComparator(0)).toEqual(expected)
  })
  it("test change quantiy comparator", () => {
    const expected = {
      type: types.CHANGE_COMPARATOR_QUANTITY,
      id: 0,
      quantity: 1
    }
    expect(actions.changeComparatorQuantity(0,1)).toEqual(expected)
  })
  it("test reset", () => {
    const expected = {
      type: types.RESET_ALL
    }
    expect(actions.reset()).toEqual(expected)
  })
})
