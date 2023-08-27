import{

    last_row_after_header,
  
    currencyht_nbnb,currencyht_toshow_nbnb,afterdigit_nbnb, smallafterdigit_nbnb, afterdigitsmallnb_nbnb,
    bignb_nbnb,smallnb_nbnb,decimalnumbers_toshow_withoutrenderer_innumbers_nbnb,usegrouping_nbnb_if_true,
    is_negativenb_accepted_nbnb,
    // is_float_accepted_nbnb,
  
    currencyht_intint,currencyht_toshow_intint,afterdigit_intint,smallafterdigit_intint,afterdigitsmallnb_intint,
    bignb_intint,smallnb_intint,decimalnumbers_toshow_withoutrenderer_innumbers_intint,usegrouping_intint_if_true,
    is_negativenb_accepted_intint,is_float_accepted_intint,
  
    afterdigit_percentage_percperc,smallafterdigit_percentage_percperc,afterdigitsmallnb_percentage_percperc,
    bignbpercent_percperc,smallnbpercent_percperc,decimalnumbers_toshow_withoutrenderer_inpercentage_percperc,
    is_negativenb_accepted_percperc,is_float_accepted_percperc,
  
    emails_length_em,
    phonenumbers_length_pn,
    onlynumbers_length_on,
    text_length_txt,

    userTimeZone,
    usTimeZones,
    use_en_time,

    display_plus_sign_in_the_start
  } from '../initials_inputs.js';


  import { comments_messages } from '../Tools/comments_messages'
  
  import { afterValidatefct_percentage } from './Validators_renders_afterValidates/valid_percentage.js'
  import { afterValidatefct_amounts } from './Validators_renders_afterValidates/valid_amounts.js'
  import { afterValidatefct_integers } from './Validators_renders_afterValidates/valid_integers.js'
  import { afterValidatefct_date } from './Validators_renders_afterValidates/valid_date.js'  //is_date_exist==false
  import { afterValidatefct_dropdown } from './Validators_renders_afterValidates/valid_dropdown.js'
  import { afterValidatefct_email} from './Validators_renders_afterValidates/valid_email.js'
  import { afterValidatefct_onlynb} from './Validators_renders_afterValidates/valid_onlynb.js'
  import { afterValidatefct_phonenumber} from './Validators_renders_afterValidates/valid_phonenumber.js'
  import { afterValidatefct_text} from './Validators_renders_afterValidates/valid_text.js'


  
export function afterValidatefct(isValid, oldvalue, row, prop, source,hot,userLocale,decimalSeparator,navigator_language,use_english_date_by_user_himeself_in_modal_withoutfct,commentsPlugin){
  
  console.log('aftervalidate Function triggered')
    // const hot = otherArgs[otherArgs.length - 1];
    //alert('we are in afterValidatefct , and userLocale.current is : ' + userLocale.current + ' and decimalSeparator.current : ' + decimalSeparator.current)
    
  /* if(isValid && oldvalue==null){
    console.log('do nothing')
//    commentsPlugin.removeCommentAtCell(row, prop);
  } else {
    */
        if (prop == 10) {  //  props==2 afterValidate of integers
                afterValidatefct_integers(isValid, oldvalue, row, prop, source,hot,commentsPlugin,
  
                  decimalSeparator.current,userLocale.current,
                  //navigator_language,userTimeZone,usTimeZones,
      currencyht_intint,currencyht_toshow_intint,afterdigit_intint,smallafterdigit_intint,afterdigitsmallnb_intint,
      bignb_intint,smallnb_intint,decimalnumbers_toshow_withoutrenderer_innumbers_intint,usegrouping_intint_if_true,
      is_negativenb_accepted_intint,is_float_accepted_intint
  
                  )
          }
          //else if (prop==6  || prop==7  || prop==8  ||     prop==11  || prop==12  || prop==13 ) {  // afterValidate of numbers and amounts
          else if (prop == 8) {  // afterValidate of numbers and amounts
            afterValidatefct_amounts(isValid, oldvalue, row, prop, source,hot,commentsPlugin,
              decimalSeparator.current,userLocale.current,
              //navigator_language,userTimeZone,usTimeZones,

              last_row_after_header,
            
              currencyht_nbnb,currencyht_toshow_nbnb,afterdigit_nbnb, smallafterdigit_nbnb, afterdigitsmallnb_nbnb,
              bignb_nbnb,smallnb_nbnb,decimalnumbers_toshow_withoutrenderer_innumbers_nbnb,usegrouping_nbnb_if_true,
              is_negativenb_accepted_nbnb,

              display_plus_sign_in_the_start

              )

      }
      else if(prop == 7){ // afterValidate of percentage,  editable the index later 
        afterValidatefct_percentage(isValid, oldvalue, row, prop, source,hot,commentsPlugin,
          
decimalSeparator.current,userLocale.current,
//navigator_language,userTimeZone,usTimeZones,
afterdigit_percentage_percperc,smallafterdigit_percentage_percperc,afterdigitsmallnb_percentage_percperc,
bignbpercent_percperc,smallnbpercent_percperc,decimalnumbers_toshow_withoutrenderer_inpercentage_percperc,
is_negativenb_accepted_percperc,is_float_accepted_percperc

          )
  }
  else if (prop == 6 ) {
    afterValidatefct_date(isValid, oldvalue, row, prop, source,hot,commentsPlugin,
      decimalSeparator.current,userLocale.current,navigator_language.current,userTimeZone,usTimeZones,use_en_time,
      use_english_date_by_user_himeself_in_modal_withoutfct.current
      )        
  }
  
  else if (prop == 2 ) {
    afterValidatefct_dropdown(isValid, oldvalue, row, prop, source,hot,commentsPlugin)
  }
  
  else if (prop == 3) {
    afterValidatefct_email(isValid, oldvalue, row, prop, source,hot,commentsPlugin,emails_length_em)
  }

  else if (prop == 4 ){
    afterValidatefct_onlynb(isValid, oldvalue, row, prop, source,hot,commentsPlugin,onlynumbers_length_on)
  }

  else if (prop == 5) {
    afterValidatefct_phonenumber(isValid, oldvalue, row, prop, source,hot,commentsPlugin,phonenumbers_length_pn)
  }
  else if (prop==9) {
    afterValidatefct_text(isValid, oldvalue, row, prop, source,hot,commentsPlugin,text_length_txt)
  }

//}
          /*
     
                        
         
        else if (prop==1 || prop==9 || prop==14 ) { // afterValidate of texts
              //afterValidatefct_date(isValid, oldvalue, row, prop, source,hot,commentsPlugin)
              afterValidatefct_text(isValid, oldvalue, row, prop, source,hot,commentsPlugin,text_length_txt)

        }

*/


        /*
       
        */
        
          }
          
