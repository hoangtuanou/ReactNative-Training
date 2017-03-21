import 'react-native';
import React from 'react';
import {basket, isServiceChosen} from '../basket';
import * as actions from '../../actions';

describe('test basket reducer', () => {
  let state = {
    items: []
  }
  it('should return initialState', () => {
    expect(basket(undefined,{})).toEqual(state);
  })
  it("testing add item to basket", () => {
    const actionAddItem = actions.addToBasket(0,"product1","sama",1)
    const expected = {
      items: [
        {
          id: 0,
          name: "product1",
          brand: "sama",
          ean: 1,
          quantity: 1,
          services: []
        }
      ]
    }
    state = basket(state,actionAddItem);
    expect(state).toEqual(expected);
  })
  it("testing add item to basket", () => {
    const actionAddItem = actions.addToBasket(1,"product2","sama",1)
    const expected = {
      items:[
        {
          id: 0,
          name: "product1",
          brand: "sama",
          ean: 1,
          quantity: 1,
          services: []
        },{
          id: 1,
          name: "product2",
          brand: "sama",
          ean: 1,
          quantity: 1,
          services: []
        }
      ]
    }
    state = basket(state,actionAddItem);
    expect(state).toEqual(expected);
  })

  it("testing toggle service", () => {
    const toggleService = actions.toggleService(0,"m")
    const expected = {
      items: [
        {
          id: 0,
          name: "product1",
          brand: "sama",
          ean: 1,
          quantity: 1,
          services: ["m"]
        },{
          id: 1,
          name: "product2",
          brand: "sama",
          ean: 1,
          quantity: 1,
          services: []
        }
      ]
    }
    state = basket(state,toggleService);
    expect(state).toEqual(expected);
  })

  it("testing change basket quantity", () => {
    const changeBasketQuantity = actions.changeBasketQuantity(0,2)
    const expected = {
      items: [
        {
          id: 0,
          name: "product1",
          brand: "sama",
          ean: 1,
          quantity: 2,
          services: ["m"]
        },{
          id: 1,
          name: "product2",
          brand: "sama",
          ean: 1,
          quantity: 1,
          services: []
        }
      ]
    }
    state = basket(state,changeBasketQuantity);
    expect(state).toEqual(expected);
  })

  it("testing isServiceChosen func", () => {
    const test = isServiceChosen(state,2,1);
    const expected = false;
    expect(test).toEqual(expected);
  })

  it("testing remove item from basket", () => {
    const removeItem = actions.removeFromBasket(0);
    const expected = {
      items: [
        {
          id: 1,
          name: "product2",
          brand: "sama",
          ean: 1,
          quantity: 1,
          services: []
        }
      ]
    }
    state = basket(state,removeItem);
    expect(state).toEqual(expected);
  })

  it("testing empty basket", () => {
    const emptyBasket = actions.emptyBasket(0)
    const expected = {
      items: []
    }
    state = basket(state,emptyBasket);
    expect(state).toEqual(expected);
  })

  it("testing reset all", () => {
    const resetAll = actions.reset()
    const expected = {
      items: []
    }
    state = basket(state,resetAll);
    expect(state).toEqual(expected);
  })
})
