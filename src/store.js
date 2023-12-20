// store.js
import { createStore } from 'redux';
import { 
  navigator_language2,
  navigator_language2_avant_modify,
  userLocale2,
  decimalSeparator2,
  //condition_split2,
  ds_haschanged,
  use_english_date_by_user_himeself_in_modal,
  use_english_date_by_user_himeself_in_modal_withoutfct,
  hot_undone2,
  last_row_after_header

  
 }
   from './initials_inputs';

   import { ddatafct,data22fct } from './data.js';

const initialState = {
  hotInstance_redux:null,
  value1: 5,
  navigator_language2: navigator_language2, //'fr-FR',
  navigator_language2_avant_modify: navigator_language2_avant_modify,
  userLocale2: userLocale2, //'fr',
  decimalSeparator2: decimalSeparator2, // ','
  //condition_split2: condition_split2,
  ds_haschanged: ds_haschanged,
  use_english_date_by_user_himeself_in_modal: use_english_date_by_user_himeself_in_modal,
  use_english_date_by_user_himeself_in_modal_withoutfct:use_english_date_by_user_himeself_in_modal_withoutfct,
  //hot_undone2: hot_undone2,

  unmerged_cells_to_unmerge: [],
  data22:data22fct(last_row_after_header),
  role_user_redux:'Writer',
  display_create_new_table:true
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
        case 'SET_HOT':
          return {
            ...state,
            hotInstance_redux: action.payload,
          };
          case 'SET_VALUE1':
            return {
              ...state,
              value1: action.payload,
            };
            case 'SET_navigator_language2':
              return {
                ...state,
                navigator_language2: action.payload,
              };
            case 'SET_navigator_language2_avant_modify':
              return {
                ...state,
                navigator_language2_avant_modify: action.payload
              };
              case 'SET_userLocale2':
              return {
                ...state,
                userLocale2: action.payload
              };
              case 'SET_decimalSeparator2':
                return {
                  ...state,
                  decimalSeparator2: action.payload
                };
                
              // case 'SET_condition_split2':
              //   return {
              //     ...state,
              //     condition_split2: action.payload
              //   };
                
              case 'SET_ds_haschanged':
                return {
                  ...state,
                  ds_haschanged: action.payload
                };
                
              case 'SET_use_english_date_by_user_himeself_in_modal':
                return {
                  ...state,
                  use_english_date_by_user_himeself_in_modal: action.payload
                };
                
              case 'SET_use_english_date_by_user_himeself_in_modal_withoutfct':
                return {
                  ...state,
                  use_english_date_by_user_himeself_in_modal_withoutfct: action.payload
                };
              // case 'SET_hot_undone2':
              //   return {
              //     ...state,
              //     hot_undone2: action.payload
              //   };
                
              case 'SET_UNMERGEDCELLS':
                return {
                  ...state,
                  unmerged_cells_to_unmerge: action.payload
                };
              case 'SET_DATA22':
                return {
                  ...state,
                  data22: action.payload
                };
              case 'SET_ROLE_USER_REDUX':
                  return {
                    ...state,
                    role_user_redux: action.payload
                  };
                  case 'SET_DISPLAY_CREATE_NEW_TABLE':
                    return {
                      ...state,
                      display_create_new_table: action.payload
                    };
                                
              
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
