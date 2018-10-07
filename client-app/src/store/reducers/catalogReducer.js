import * as actionTypes from '../actions/actionTypes';

const initialState = {
    catalogs: [],
    loading: false
}

const fetchCatalogsStart = (state,action) => {
    return{
        ...state,
        loading: true
    };
};

const fetchCatalogsSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        catalogs: action.catalogs
    };
};

const fetchCatalogsFail = (state,action) =>{
    return {
        ...state,
        loading:false
    };
};

const reducer = (state= initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_CATALOG_START: return fetchCatalogsStart(state, action);
        case actionTypes.FETCH_CATALOG_SUCCESS: return fetchCatalogsSuccess(state, action);
        case actionTypes.FETCH_CATALOG_FAIL: return fetchCatalogsFail(state, action);
        default: return state;
    }
};
export default reducer;