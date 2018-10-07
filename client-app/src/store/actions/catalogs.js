import axios from 'axios';

import *as actionTypes from './actionTypes';

export const fetchCatalogStart = () =>{
    return{
        type: actionTypes.FETCH_CATALOG_START
    };
};

export const fetchCatalogSuccess = (catalogs) =>{
    return{
        type: actionTypes.FETCH_CATALOG_SUCCESS,
        catalogs :catalogs
    };
};

export const fetchCatalogFail = (error) =>{
    return{
        type: actionTypes.FETCH_CATALOG_FAIL,
        error: error
    };
};

export const fetchCatalogs = () =>{
    return dispatch => {
       dispatch(fetchCatalogStart());
       axios.get('http://127.0.0.1:5000/api/v1/data_catalog')
         .then(response => {
             console.log(response.data.datacatalog);
             dispatch(fetchCatalogSuccess(response.data.datacatalog));
         })
         .catch(error => {
              dispatch(fetchCatalogFail(error));
         });
    };
};