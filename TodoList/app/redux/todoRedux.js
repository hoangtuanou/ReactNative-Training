const types = {
  ADD_ITEM: 'ADD_ITEM',
  TOGGLE_ITEM_COMPLETED: 'TOGGLE_ITEM_COMPLETED',
  REMOVE_ITEM: 'REMOVE_ITEM',
  REMOVE_ITEM_COMPLETED: 'REMOVE_ITEM_COMPLETED'
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
  removeItem: (i) => {
    return {
      type: types.REMOVE_ITEM,
      payload: i
    }
  },
  removeItemCompleted: (item) => {
    return {
      type: types.REMOVE_ITEM_COMPLETED,
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
    case types.REMOVE_ITEM:
      return {
        ...state,
        items: items.filter((item,i)=> i!=payload)
      }
    case types.REMOVE_ITEM_COMPLETED:
      return {
        ...state,
        items: items.filter((item)=>!item.completed)
      }
    default: {
      return state
    }
  }
}
