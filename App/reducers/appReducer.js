export const INITIAL_STATE = {
    categories: [],
    listings: [],
    priorities: [],
    loadingData: true,
    refreshing: false,
  };
  
  export const appReducer = (state, action) => {
    switch (action.type) {
      case 'get_categories':
        return { ...state, categories: action.payload };
      case 'get_priorities':
        return { ...state, priorities: action.payload };
  
      case 'get_listings':
        return {
          ...state,
          listings: action.payload,
          loadingData: false,
          refreshing: false,
        };
  
      case 'start_loading':
        return { ...state, loadingData: true };
  
      case 'start_refreshing':
        return { ...state, refreshing: true };
  
      default:
        return INITIAL_STATE;
    }
  };
  