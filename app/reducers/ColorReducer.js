const initialState = {
  colorName: 'WHITE',
};

const ColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COLOR_CHANGED':
      return { ...state, colorName: action.payload.colorName };
    default:
      return state;
  }
};

export default ColorReducer;
