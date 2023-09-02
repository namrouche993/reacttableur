import { startsWithElement } from './Tools/startsWithElement.js'
import { ddatafct,data22fct } from './data.js';
  //#region initials inputs nb
  export const last_row_after_header = 15;

  export const currencyht_nbnb = '$' //'DA'
  export const currencyht_toshow_nbnb = '' // ' $' // ' DA'  ///
  export const afterdigit_nbnb = 2;
  export const smallafterdigit_nbnb = Number(`1e-${afterdigit_nbnb}`)  // like 0.01 with afterdigit2
  export const afterdigitsmallnb_nbnb = 17;
  export const bignb_nbnb = 1e17;
  export const smallnb_nbnb = 1e-17;
  export const decimalnumbers_toshow_withoutrenderer_innumbers_nbnb = 10;
  export const usegrouping_nbnb_if_true = true;
  export const is_negativenb_accepted_nbnb=true;
  // export const is_float_accepted_nbnb = true;  // bayna beli true


  export const currencyht_intint = '' //'DA'
  export const currencyht_toshow_intint = '' // ' $' // ' DA'  ///
  export const afterdigit_intint = 0;
  export const smallafterdigit_intint = Number(`1e-${afterdigit_intint}`)  // like 0.01 with afterdigit2
  export const afterdigitsmallnb_intint = 17;
  export const bignb_intint = 1e17;
  export const smallnb_intint = 1e-17;
  export const decimalnumbers_toshow_withoutrenderer_innumbers_intint = 2;
  export const usegrouping_intint_if_true = true;
  export const is_negativenb_accepted_intint = false;
  export const is_float_accepted_intint = false;



  export const afterdigit_percentage_percperc = 2; //  how many decimal numbers will be displayed in renderer !
  export const smallafterdigit_percentage_percperc = Number(`1e-${afterdigit_percentage_percperc}`)  // like 0.01 with afterdigit2 ,  even though the value is small than this number , so displays it in renderer
  export const afterdigitsmallnb_percentage_percperc = 10; // even though the number is too small than the previous number (0.01) and it small than this number, so don't display it , and instead of it , display 0 because of maximumFractionDigits=this number
  export const bignbpercent_percperc = 1e10;
  export const smallnbpercent_percperc = 1e-10;
  export const decimalnumbers_toshow_withoutrenderer_inpercentage_percperc=10;
  export const is_negativenb_accepted_percperc = true;
  export const is_float_accepted_percperc = true;


  export const emails_length_em=50;
  export const phonenumbers_length_pn=50;
  export const onlynumbers_length_on = 50;
  export const text_length_txt = 600;
  export const use_en_time = true; // using english date 12/31/1993 ??
  export const use_all_language_modal_depend_langbrowser=true;
  export const which_lanaguage_touse_if_langbrowserisflse='fr';

  export const all_european_formal_are_test=false; // if it's true so "let navigator_language2 equal to fr-FR" and "let userLocale2 equal to fr" should equal to all_european_formal_are  
  export const all_european_formal_are = 'fr';  // works if the test above is true
  //#endregion initials inputs nb


      //#region date time zone (navigator.language)
      //export const userLocale = 'fr'//Intl.DateTimeFormat().resolvedOptions().locale //'fr'// editable maybe Intl.DateTimeFormat().resolvedOptions().locale || navigator.language || navigator.userLanguage;
      //export const navigator_language='fr-FR' //navigator.language // 'fr-FR' 'en-CA'  // editable
      export var userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      export var usTimeZones = [  'America/New_York',  'America/Chicago',  'America/Denver',  'America/Los_Angeles',  'America/Anchorage',  'America/Adak',  'Pacific/Honolulu',  'America/Phoenix',  'America/Indiana/Indianapolis',  'America/Indiana/Knox',  'America/Indiana/Marengo',  'America/Indiana/Petersburg',  'America/Indiana/Tell_City',  'America/Indiana/Vevay',  'America/Indiana/Vincennes',  'America/Indiana/Winamac',  'America/Kentucky/Louisville',  'America/Kentucky/Monticello',  'America/Detroit',  'America/Menominee',  'America/St_Johns',  'America/Puerto_Rico',  'America/Montserrat',  'America/New_York',  'America/North_Dakota/Beulah',  'America/North_Dakota/Center',  'America/North_Dakota/New_Salem'];
      //#endregion date time zone

      
      export const navigator_language2_bydefault_ifnotexist='fr-FR'
      export const userlocale2_bydefault_ifnotexist='en';
      export const decimalseparator2_bydefault_ifnotexist='.'
      export function convertDateFormat(date, fromFormat, toFormat) {
        var parts;
        
        if (fromFormat === 'en-CA') {
          parts = date.split('-');
        } else if (fromFormat === 'ja-JP') {
          parts = date.split('/');
        } else if (fromFormat === 'ko-KR' || fromFormat === 'de-DE') {
          parts = date.split('.');
        } else {
          parts = date.split('/');
        }
      
        var day, month, year;
      
        if (fromFormat === 'en-US') {
          day = parts[1];
          month = parts[0];
          year = parts[2];
        } else if (fromFormat === 'en-CA') {
          day = parts[2];
          month = parts[1];
          year = parts[0];
        } else if (fromFormat === 'ja-JP') {
          day = parts[2];
          month = parts[1];
          year = parts[0];
        } else if (fromFormat === 'ko-KR') {
          day = parts[2];
          month = parts[1];
          year = parts[0];
        } else {
          day = parts[0];
          month = parts[1];
          year = parts[2];
        }
      
        if (toFormat === 'fr-FR') {
          return day + '/' + month + '/' + year;
        } else if (toFormat === 'en-US') {
          return month + '/' + day + '/' + year;
        } else if (toFormat === 'de-DE') {
          return day + '.' + month + '.' + year;
        } else if (toFormat === 'en-CA') {
          return year + '-' + month + '-' + day;
        } else if (toFormat === 'ja-JP') {
          return year + '/' + month + '/' + day;
        } else if (toFormat === 'ko-KR') {
          return year + '.' + month + '.' + day;
        } else if (toFormat === 'de-DE') {
          return day + '.' + month + '.' + year;
        }
      }  

      export const display_plus_sign_in_the_start = true;

      //////////////////// REDUX ////////////////////////////
      
      export var navigator_language2 = localStorage.getItem('navigator_language2_storage')==null ? navigator.language : localStorage.getItem('navigator_language2_storage') // 'fr-FR' 'en-CA'  // editable
      //export var navigator_language2 = navigator.language // 'fr-FR' 'en-CA'  // editable
      
      
      export var navigator_language2_avant_modify=navigator_language2;
      

      export var userLocale2 = localStorage.getItem('userLocale2_storage')==null ? Intl.DateTimeFormat().resolvedOptions().locale : localStorage.getItem('userLocale2_storage'); //'fr'// editable maybe Intl.DateTimeFormat().resolvedOptions().locale || navigator.language || navigator.userLanguage;
      //export var userLocale2 = Intl.DateTimeFormat().resolvedOptions().locale //'fr'// editable maybe Intl.DateTimeFormat().resolvedOptions().locale || navigator.language || navigator.userLanguage;
      
      
      export var decimalSeparator2 = localStorage.getItem('decimalSeparator2_storage')==null ? (1234567.73).toLocaleString(userLocale2, { style: 'decimal' }).substring(9, 10).toString() : localStorage.getItem('decimalSeparator2_storage');
      //export var decimalSeparator2 = (1234567.73).toLocaleString(userLocale2, { style: 'decimal' }).substring(9, 10).toString();


      //export var condition_split2=true;

      //export var ds_haschanged= localStorage.getItem('ds_haschanged_storage')==null ? false : localStorage.getItem('ds_haschanged_storage');
      export var ds_haschanged=false; // editable and may deleted

      export var use_english_date_by_user_himeself_in_modal = localStorage.getItem('use_english_date_by_user_himeself_in_modal_storage')==null ? false : localStorage.getItem('use_english_date_by_user_himeself_in_modal_storage');
      //export var use_english_date_by_user_himeself_in_modal = false;
      
      
      //export var hot_undone2={};
      export var use_english_date_by_user_himeself_in_modal_withoutfct=false;

      //****************** REDUX ******************************/


      
   // start ----- --- condition_split2
    let condition_split2=true
    export function setInputValue_condition_split2(value) {
      condition_split2 = value;
     }
    export function getInputValue_condition_split2() {
         return condition_split2;
     }
  // end *********** condition_split2

  let srcautofillactivated=false
  export function setInputValue_srcautofillactivated(value) {
    srcautofillactivated = value;
   }
  export function getInputValue_srcautofillactivated() {
       return srcautofillactivated;
   }


  let last_row_to_use_for_dropdown_issue = ddatafct().length;
  
  export function setLast_row_to_use_for_dropdown_issue(value) {
    last_row_to_use_for_dropdown_issue=value;
  }

  export function getLast_row_to_use_for_dropdown_issue(value) {
    return last_row_to_use_for_dropdown_issue;
  }


  let hot_undone2={};
  export function setInputValue_hot_undone2(value){
   hot_undone2=value
  }
  export function getInputValue_hot_undone2() {
   return hot_undone2;
 };




      /*



  // start -------- navigator_language2
   let navigator_language2 = navigator.language // 'fr-FR' 'en-CA'  // editable
   export function setInputValue_navigator_language2(value) {
     navigator_language2 = value;
    }

   export function getInputValue_navigator_language2() {
        return navigator_language2;
    }


 // end *********** navigator_language2 

 let navigator_language2_avant_modify=getInputValue_navigator_language2();
 export function setInputValue_navigator_language2_avant_modify(value) {
  navigator_language2_avant_modify = value;
}
export function getInputValue_navigator_language2_avant_modify() {
    return navigator_language2_avant_modify;
}



  // start -------- userlocale2
   let userLocale2 = Intl.DateTimeFormat().resolvedOptions().locale //'fr'// editable maybe Intl.DateTimeFormat().resolvedOptions().locale || navigator.language || navigator.userLanguage;
   export function setInputValue_userLocale2(value) {
      userLocale2 = value;
    }
   export function getInputValue_userLocale2() {
        return userLocale2;
    }

  //  end *********** userlocal22
     


  // start -------- decimalseparator2
    let decimalSeparator2 = (1234567.73).toLocaleString(getInputValue_userLocale2(), { style: 'decimal' }).substring(9, 10).toString();
    ////console.log('decimalsep2 when let first : ')
    ////console.log(decimalSeparator2)
    export function setInputValue_decimalSeparator2(value) {     
      decimalSeparator2 = value;
     }

     export function getValue_decimalSeparator2() {
      return decimalSeparator2;
    }
  // end *********** decimalseparator2



  // start -------- dateformatlanguage
    export function getVal_dateformatlanguage() {
      return dateformatlanguage;
    }
  // end -------- dateformatlanguage


  // start -------- splitdate
    export function getVal_splitdate() {
      return splitdate;
    }
  // end *********** splitdate

  


     // start -------- ds_haschanged
     let ds_haschanged=false
     export function setInputValue_ds_haschanged(value) {
      ds_haschanged = value;
      }
     export function getInputValue_ds_haschanged() {
          return ds_haschanged;
      }
   // end *********** ds_haschanged
 



  let use_english_date_by_user_himeself_in_modal = false;
  export function setInputValue_use_english_date_by_user_himeself_in_modal(value) {
   use_english_date_by_user_himeself_in_modal = value;
   }
  export function getInputValue_use_english_date_by_user_himeself_in_modal() {
       return use_english_date_by_user_himeself_in_modal;
   };

   let hot_undone2={};
   export function setInputValue_hot_undone2(value){
    hot_undone2=value
   }
   export function getInputValue_hot_undone2() {
    return hot_undone2;
  };


    //#endregion date format starting



    */