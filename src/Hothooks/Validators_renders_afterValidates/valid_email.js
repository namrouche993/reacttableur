import{
    //decimalSeparator,userLocale,navigator_language,
    //userTimeZone,usTimeZones,

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

    setInputValue_copypastelength,
    getInputValue_copypastelength
  } from '../../initials_inputs.js';

  import { comments_messages } from '../../Tools/comments_messages.js'
  import {isValidDate} from '../../Tools/isValidDate.js'
  import { addToast } from 'react-toast-notifications';


  
  export function renderer_email(instance, td, row, col, prop, oldvalue, cellProperties,data22){
    //const data22 = otherArgs[otherArgs.length - 1];
    
    if(oldvalue==null){
      td.innerHTML=''
    } else {
      td.innerHTML=oldvalue;
      //data02[row][col]=td.innerHTML
    }
    //data22[row][col] = td.innerHTML;      // it was be with // i dont know why  
  
    cellProperties.className = 'htRight'; 
    td.style.textAlign = 'right';
    td.className = 'htLeft htMiddle custom-normalcell';
                  }
  
  export function validator_email(value, callback){
    //////console.log(value)
    if(value==null || /^[\w.-]+@[a-zA-Z0-9.,-]+\.[a-zA-Z]{2,}$/.test(value.toString().trim()) ) {
         callback(true)
     } else {
       callback(false)
     }
        }


  export function afterValidatefct_email(isValid, oldvalue, row, prop, source,hot,commentsPlugin,emails_length_em,setNotification){        
    //////console.log('prop==6')
    //////console.log(isValid)

    if (isValid && oldvalue == null ) {
       //////console.log('condition email  1')
       //////console.log('we are inside afterValidate email value==null')
       //////console.log('COULD END HERE')
      
       /*
       setTimeout(() => {
        commentsPlugin.removeCommentAtCell(row,prop);
      }, 100);
      */

     } else if (isValid && oldvalue !== undefined && typeof oldvalue === 'string'){
         if(/^\s+|\s+$/g.test(oldvalue)){
           //////console.log('if there is a trainling whitespace between ')
           //////console.log('we will call my_source_removewhitespacesign_email')
           hot.setDataAtCell(row, prop, oldvalue.toString().trim(), 'my_source_removewhitespacesign');
           commentsPlugin.removeCommentAtCell(row,prop);
         } else if(oldvalue.length>emails_length_em){
           commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'email_invalid','fr-FR'))
           setNotification({
            message: comments_messages(oldvalue,'email_invalid','fr-FR'),
            status: 'error',
            autoDismissTimeout: 3000, // Set your desired timeout
            lengthscreen:4,
            triggerNotification: Math.random()// Trigger when message is present
          });
           hot.setDataAtCell(row, prop,'','my_source_empty_email');
         } else {
           //////console.log('COULD END HERE')
           //////console.log('do nothing')
           commentsPlugin.removeCommentAtCell(row,prop);
         }
       }
       else if ( oldvalue =='') {
       //////console.log('condition email 3')
       //////console.log('do nothing could end here')
       } else {
         //////console.log('condition email 4')
       //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + oldvalue + "' n'est pas valide ");
       if(source!=='Autofill.fill_of_socket' && source!=='Autofill.fill' && (source!=='CopyPaste.paste' || getInputValue_copypastelength()==false) && (source!=='CopyPaste.paste_of_socket' || getInputValue_copypastelength()==false) ){
        commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'email_invalid','fr-FR'))
        setNotification({
          message: comments_messages(oldvalue,'email_invalid','fr-FR'),
          status: 'error',
          autoDismissTimeout: 3000, // Set your desired timeout
          lengthscreen:4,
          triggerNotification: Math.random()// Trigger when message is present
        });
       }
       hot.setDataAtCell(row, prop,'','my_source_empty_email')

       //////console.log('do nothing could end here')
       //////console.log('removes')
     }

  }



  /*
  
  ################################################################################"
  ################################################################################
  ######### put it in Columns_data_for_Validator_renderes.js file : ##############
  ################################################################################"
  ################################################################################"

    else if( i == 3 ) {
    var dd={
       className: "htLeft htMiddle" ,
       validator: function (oldvalue, callback) { // validator of numbers or amounts
          const thisrow = this.row;
          const thiscol = this.col;
        if(thisrow>5){ // editable
            validator_email(oldvalue, callback,thisrow,thiscol)
        }
        },
        
      renderer: function (instance, td, row, col, prop, oldvalue, cellProperties) { // renderer of numbers or amounts
        if(row>5){ // editable
          renderer_email(instance, td, row, col, prop, oldvalue, cellProperties,data22)
        } 
        else if ( row>3 ) { // editable
          td.innerHTML=oldvalue;
          data22[row][col] = td.innerHTML;
          td.className = 'htCenter htMiddle custom-titlecell2';
       }
        }
    }
    }

  ################################################################################"
  ################################################################################
  ##################### put it in afterValidatefct.js file :######################
  ################################################################################"

  
  else if (prop == 3) {
    afterValidatefct_email(isValid, oldvalue, row, prop, source,hot,commentsPlugin,emails_length_em)
  }

  */