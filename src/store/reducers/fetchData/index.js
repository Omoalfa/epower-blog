import { fetchData as initialState } from '../../initialState'

const fetchData = (state=initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_START':
        return {
          ...state,
          isLoading: true
        };
      case 'FETCH_DATA_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isSuccessful: true,
          data: action.payload
        };
      case 'FETCH_DATA_FAIL':
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      case 'FETCH_DATA_CLEANUP':
        return {
          ...state,
          isLoading: false,
          isSuccessful: false,
          error: null
        };
      default:
        return state;
    }
  }
  
  export default fetchData;