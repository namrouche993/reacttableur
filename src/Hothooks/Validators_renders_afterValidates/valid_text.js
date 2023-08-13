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
    text_length_txt
  } from '../../initials_inputs.js';

  import { comments_messages } from '../../Tools/comments_messages.js'


/*
  else if( i == 1 ) {
    var dd={
      className: "htRight htMiddle" ,
      validator: function (oldvalue, callback) { // validator of numbers or amounts
          const thisrow = this.row;
          const thiscol = this.col;
          if(thisrow>5){ // editable
            validator_text(oldvalue, callback,thisrow,thiscol,text_length_txt)
        }
        },
      renderer: function (instance, td, row, col, prop, oldvalue, cellProperties,...otherArgs) { // renderer of numbers or amounts
        
         if(row>5){ // editable
          renderer_text(instance, td, row, col, prop, oldvalue, cellProperties,text_length_txt,...otherArgs,data22)
        } else if ( row>3 ) { // editable
             td.innerHTML=oldvalue;
             data22[row][col] = td.innerHTML;
             td.className = 'htCenter htMiddle custom-titlecell2';
          }
          }
     
    }
  }

  afterValidatefct_text(isValid, oldvalue, row, prop, source,hot,commentsPlugin,text_length_txt)
  */

  export function renderer_text(instance, td, row, col, prop, oldvalue, cellProperties,text_length_txt,data22){
    //const data22 = otherArgs[otherArgs.length - 1];
    //console.log('data22 in renderer_text : ')
    //console.log(data22)
    //console.log('text_length_txt :::')
    //console.log(text_length_txt)
    td.innerHTML=oldvalue;
    data22[row][col] = td.innerHTML;      // it was be with // i dont know why  
    cellProperties.className = 'htLeft'; 
    td.style.textAlign = 'left';
    td.className = 'htLeft htMiddle custom-normalcell'
                  }
  
  export function validator_text(value, callback,text_length_txt){
    console.log('validator_text')
    console.log(text_length_txt)
    //alert('value in validator_text is : '  + value)
    if( value==null || 
        value.toString().length<text_length_txt    
    ) {
      console.log('calback trueeeeeeeeeeeeee in text')
      callback(true)
    } else {
     console.log('calback falseeeeeeeeeeeeeee in text')
     console.log(text_length_txt)
      callback(false)
    }
        }


  export function afterValidatefct_text(isValid, oldvalue, row, prop, source,hot,commentsPlugin,text_length_txt){        
        if (isValid && oldvalue == null ) {
          console.log('condition text 1')
          console.log('we are inside afterValidate date oldvalue==null')
          console.log('COULD END HERE')
          commentsPlugin.removeCommentAtCell(row, prop);
        } else if (isValid && oldvalue !== undefined && typeof oldvalue === 'string'){
          console.log('condition text 2')
        } else if (!isValid) {
          console.log('oldvalue :')
          console.log(oldvalue)
          console.log(oldvalue.toString().length)
            commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'text_depass_limit','fr-FR'))
            hot.setDataAtCell(row, prop, '', 'my_source_empty');
        }
  }
