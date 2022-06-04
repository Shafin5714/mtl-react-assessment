import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILED,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILED,
} from "./productConstants";

import axios from "axios";

// Get Req
export const getProductList = (sortData,filterData,searchData) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let { data } = await axios.get(`http://localhost:4000/products`, config);
    if(sortData){
      if(sortData === 'name'){
        const sortedData = data.sort((a, b) => a.name.localeCompare(b.name))
        dispatch({
          type: PRODUCT_LIST_SUCCESS,
          payload: sortedData,
        });
      }else{
        const sortedData = data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        dispatch({
          type: PRODUCT_LIST_SUCCESS,
          payload: sortedData,
        });
      }
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    }else if(filterData){
      const filteredData = data.filter((p)=>p.category === filterData)
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: filteredData,
      });
    }
    else if(searchData){
      console.log(searchData);
      
     const filteredData = data.filter(p => p.name.toLowerCase().includes(searchData.toLowerCase()))
     console.log(filteredData);
       
    
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: filteredData,
      });
    
    }else{
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    }

    
   

   
  } catch (e) {
    dispatch({
      type: PRODUCT_LIST_FAILED,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

// Get Req
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`http://localhost:4000/products/${id}`, config);
    // console.log(data);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: PRODUCT_DETAILS_FAILED,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
