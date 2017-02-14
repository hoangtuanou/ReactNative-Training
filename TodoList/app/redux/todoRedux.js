const types = {
  ADD_ITEM: 'ADD_ITEM',
  TOGGLE_ITEM_COMPLETED: 'TOGGLE_ITEM_COMPLETED',
  REMOVE_ITEM: 'REMOVE_ITEM'
}

export const actionCreators = {
  addItem: (text) =>{
    return {
      type: types.ADD_ITEM,
      payload: text
    }
  },
  toggleItem: (i) => {
    return {
      type: types.TOGGLE_ITEM_COMPLETED,
      payload: i
    }
  },
  removeItem: (item) => {
    return {
      type: types.REMOVE_ITEM,
      payload: item
    }
  }  
}

const initialState = {
  items: [],
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action
  const {items} = state;
  switch(type) {
    case types.ADD_ITEM:
      return {
        ...state,
        items: [{label:payload, completed:false},...items]
      }
    case types.TOGGLE_ITEM_COMPLETED:
      return {
        ...state,
        items: items.map((item,i)=>{
          if(i==payload){
            return {label:item.label,completed:!item.completed};
          }
          return item;
        })
      }
    default: {
      return state
    }
  }
}
