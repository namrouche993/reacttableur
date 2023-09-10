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
    getInputValue_copypastelength,

    getInputValue_spinnerf,
    setInputValue_spinnerf

  } from '../../initials_inputs.js';

  import { comments_messages } from '../../Tools/comments_messages.js'
  // import {data22fct} from '../../data.js'
  import {isValidDate} from  '../../Tools/isValidDate.js';

  // REMEMBER , NOTE : dont change source and to include it (obviously)


/*
else if( i == 1 ) {
    var dd={
        type: 'dropdown',
        source: ['','yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white'], // editable
        validator: function(value, callback) {  // editable
            //const thisrow = this.row;
            //const thiscol = this.col;
            //if(thisrow>5){ // editable
                validator_dropdown(value, callback,['','yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white']) // editable dont forget to change my_source like source above
            //}
        }        
       }
    }
  
  else if (prop ==1) {
    afterValidatefct_dropdown(isValid, oldvalue, row, prop, source,hot,commentsPlugin)
  }
  
  */

  
  
//var data22 = data22fct(last_row_after_header);


  export function renderer_dropdown(instance, td, row, col, prop, oldvalue, cellProperties,data22){
    console.log('renderer_dropdown')

    //const data22 = otherArgs[otherArgs.length - 1];
    //td.innerHTML=oldvalue;
    //data22[row][col] = td.innerHTML;      // it was be with // i dont know why  
    //cellProperties.className = 'htRight'; 
    //td.style.textAlign = 'right';
    //td.className = 'htLeft htMiddle custom-normalcell'



                  }
  
  export function validator_dropdown(value, callback,my_source){
    console.log('validator_dropdown')
    if(value==null){
        callback(true)
      }else if(my_source.includes(value)){
      callback(true)
    } else if (value===' ') {
      callback(true)
    } else {
      callback(false)
    }
        }


  export function afterValidatefct_dropdown(isValid, oldvalue, row, prop, source,hot,commentsPlugin,isLoading){        
    ////console.log('prop==5')
    console.log('afterValidate_dropdown')
    console.log(isValid)
    console.log(oldvalue)
    console.log(row)
    console.log(prop)
    console.log(source)

    if(oldvalue==null){
        //data22[row][prop] = '';
        //////console.log('data22 in oldvalue==null')
        //////console.log(data22)

      }else if(!isValid){
        ////alert('invalid dropdown')
        ////console.log('first cond')
        //commentsPlugin.setCommentAtCell(row, prop, "Veuillez choisir une valeur incluse dans la liste");
        if(source!=='Autofill.fill' && (source!=='CopyPaste.paste' || getInputValue_copypastelength()==false) ){
          commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'dropdown_included','fr-FR'))
        }
        hot.setDataAtCell(row, prop,' ','my_source_empty_dropdown');
        
        //data22[row][prop] = '';
        //////console.log('data22 in !isvalid')
        //////console.log(data22)


        //hot.setDataAtCell(row, prop,'');
      } else if (oldvalue===' ') {
        ////console.log('2 cond')
        //commentsPlugin.removeCommentAtCell(row,prop);
        if(source!=='Autofill.fill' && (source!=='CopyPaste.paste' || getInputValue_copypastelength()==false) ){
          commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'dropdown_included','fr-FR'))
        }
        //commentsPlugin.setCommentAtCell(row, prop, "Veuillez choisir une valeur incluse dans la liste");
        
        //data22[row][prop] = '';
        //////console.log('data22 in oldvalue==" "')
        //////console.log(data22)

        //hot.setDataAtCell(row, prop,'');
      } else {
        ////console.log('3 cond')
        commentsPlugin.removeCommentAtCell(row,prop);
        
        //data22[row][prop] = oldvalue;
        //////console.log('data22 in else')
        //////console.log(data22)


      }
  }
 
/*

  ################################################################################"
  ################################################################################
  ######### put it in Columns_data_for_Validator_renderes.js file : ##############
  ################################################################################"
  ################################################################################"

else if( i == 2 ) {
  var dd={
      type: 'dropdown',
      source: ['','yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white'], // editable
      validator: function(value, callback) {  // editable
              validator_dropdown(value, callback,['','yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white']) // editable dont forget to change my_source like source above
      },
     }
  }


  ################################################################################"
  ################################################################################
  ##################### put it in afterValidatefct.js file :######################
  ################################################################################"
  
  else if (prop == 2 ) {
    afterValidatefct_dropdown(isValid, oldvalue, row, prop, source,hot,commentsPlugin)
  }



*/