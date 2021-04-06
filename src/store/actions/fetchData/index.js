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
    let page;
    dispatch(fetchDataStart());
    if(!payload.page) {
        page = 1
    } else {
        page = payload.page;
    }
    //fetch data from backend
    const data = await axios.get(`https://blog.epower.ng/wp-json/wp/v2/posts?page=${page}`)

    dispatch(fetchDataSuccess(data));
  } catch (err) {
    dispatch(fetchDataFail(error));
  }
}
