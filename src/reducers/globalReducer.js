export const reducer = (state, action) => {
    switch (action.type) {
      case 'increment': return { count: state.count + action.value};
      case 'decrement': return { count: state.count - 1 };
      case 'reset': return { count: 0 };
      default: return state;
    }
  }