import axios from 'axios'

export const fetchDataStart = () => ({
  type: 'FETCH_DATA_START'
});

export const fetchDataSuccess = payload => ({
  type: 'FETCH_DATA_SUCCESS',
  payload
});

export const fetchDataFail = payload => ({
  type: 'FETCH_DATA_FAIL',
  payload
});

export const fetchDataCleanup = () => ({
  type: 'FETCH_DATA_CLEANUP'
});

export const fetchData = payload => async dispatch => {
   
  try {
    dispatch(fetchDataStart());
    
    //fetch data from backend
    const data = await axios.get(`https://blog.epower.ng/wp-json/wp/v2/posts?page=${payload}`)

    console.log(data)
    dispatch(fetchDataSuccess(data));
  } catch (err) {
    dispatch(fetchDataFail(err));
  }
}
