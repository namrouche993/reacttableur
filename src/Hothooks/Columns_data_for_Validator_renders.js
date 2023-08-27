import { data22fct } from '../data.js';
import { PercentageEditor } from '../Tools/PercentageEditor';
import { validator_amounts,renderer_amounts } from './Validators_renders_afterValidates/valid_amounts.js'
import { validator_integers,renderer_integers } from './Validators_renders_afterValidates/valid_integers'
import { validator_percentage,renderer_percentage } from './Validators_renders_afterValidates/valid_percentage.js'
import { validator_date,renderer_date } from './Validators_renders_afterValidates/valid_date.js' //is_date_exist==false

import { validator_dropdown,renderer_dropdown } from './Validators_renders_afterValidates/valid_dropdown.js'
import { validator_email,renderer_email } from './Validators_renders_afterValidates/valid_email.js'
import { validator_onlynb,renderer_onlynb } from './Validators_renders_afterValidates/valid_onlynb.js'
import { validator_phonenumber,renderer_phonenumber } from './Validators_renders_afterValidates/valid_phonenumber.js'
import { validator_text,renderer_text } from './Validators_renders_afterValidates/valid_text.js'

//

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

import { useSelector, useDispatch } from 'react-redux'; 
import Handsontable from 'handsontable';



var data22 = data22fct()

//var columnsdata = (imin,imax) => {
export function Columns_data_for_Validator_renders(imin,imax,
  userLocale2,
  decimalSeparator2,
  navigator_language2,

  navigator_language2_avant_modify,
  //condition_split2,
  ds_haschanged,
  use_english_date_by_user_himeself_in_modal,
  use_english_date_by_user_himeself_in_modal_withoutfct,
  hot_undone2,
  ) {
    //alert('userLocale2  in Columns_data_for.. will be : '  + userLocale2.current + ' and decimalSeparator2 : ' + decimalSeparator2.current)
  //console.log('before using it')

        //////console.log('columnsdata')
        console.log('COLUMNS DATA FOR VALIDATOR')
        var fa=[]
        fa.push({data:0,readOnly:true})      
          for(let i=imin+1;i<imax-1;i++){
          // couting start from 1 (normal way ta3 normal way)  i==3 means the third column of THE SPREADSHEET without counting the first negeglible column (A)   
        
        if(i == 10){  // validator and renderers of integers i == 2 editable of course
          ////console.log('************** before validator i === 2 ')
            var dd={ data:i,
              className: "htRight htMiddle" ,
              validator: function (oldvalue, callback) { // validator of integers
                const thisrow = this.row;
                const thiscol = this.col;
               
                if(thisrow>5){ // editable
                  validator_integers(oldvalue, callback,thisrow,thiscol,

                    decimalSeparator2.current,userLocale2.current,
                    //navigator_language,userTimeZone,usTimeZones,
    currencyht_intint,currencyht_toshow_intint,afterdigit_intint,smallafterdigit_intint,afterdigitsmallnb_intint,
    bignb_intint,smallnb_intint,decimalnumbers_toshow_withoutrenderer_innumbers_intint,usegrouping_intint_if_true,
    is_negativenb_accepted_intint,is_float_accepted_intint

                    )
                }
                },
      
              renderer: function (instance, td, row, col, prop, oldvalue, cellProperties) { // renderer of integers
                if(row>5){  // editable
               
                  renderer_integers(instance, td, row, col, prop, oldvalue, cellProperties,

                    decimalSeparator2.current,userLocale2.current,
                    //navigator_language,userTimeZone,usTimeZones,
    currencyht_intint,currencyht_toshow_intint,afterdigit_intint,smallafterdigit_intint,afterdigitsmallnb_intint,
    bignb_intint,smallnb_intint,decimalnumbers_toshow_withoutrenderer_innumbers_intint,usegrouping_intint_if_true,
    is_negativenb_accepted_intint,is_float_accepted_intint

                    ,data22)
                } else if (row>3){ // editable about headers
                          td.innerHTML=oldvalue;
                          data22[row][col] = td.innerHTML;      
                          td.className = 'htCenter htMiddle custom-titlecell2';                  
                }
                }
        }
        
      
      }
      
      //else if(i == 6 || i == 7 || i == 8      || i == 11 || i == 12 || i == 13 ){ //editable of course
      else if(i == 8 ){ // validator and renderers of amounts editable of course

        var dd={
          className: "htRight htMiddle" ,
          validator: function (oldvalue, callback) { // validator of numbers or amounts
              const thisrow = this.row;
              const thiscol = this.col;
            
              if(thisrow>5){ // editable
                validator_amounts(oldvalue, callback,thisrow,thiscol,
                  decimalSeparator2.current,userLocale2.current,
                  //navigator_language,userTimeZone,usTimeZones,

                  last_row_after_header,
                
                  currencyht_nbnb,currencyht_toshow_nbnb,afterdigit_nbnb, smallafterdigit_nbnb, afterdigitsmallnb_nbnb,
                  bignb_nbnb,smallnb_nbnb,decimalnumbers_toshow_withoutrenderer_innumbers_nbnb,usegrouping_nbnb_if_true,
                  is_negativenb_accepted_nbnb,

                  )
            }
            },
          renderer: function (instance, td, row, col, prop, oldvalue, cellProperties) { // renderer of numbers or amounts
            
             if(row>5){ // editable
            
              renderer_amounts(instance, td, row, col, prop, oldvalue, cellProperties,
                decimalSeparator2.current,userLocale2.current,
                //navigator_language,userTimeZone,usTimeZones,

                last_row_after_header,
              
                currencyht_nbnb,currencyht_toshow_nbnb,afterdigit_nbnb, smallafterdigit_nbnb, afterdigitsmallnb_nbnb,
                bignb_nbnb,smallnb_nbnb,decimalnumbers_toshow_withoutrenderer_innumbers_nbnb,usegrouping_nbnb_if_true,
                is_negativenb_accepted_nbnb,

                display_plus_sign_in_the_start
                ,data22)
            } else if ( row>3 ) { // editable
                 td.innerHTML=oldvalue;
                 data22[row][col] = td.innerHTML;
                 td.className = 'htCenter htMiddle custom-titlecell2';
              }
              }
         
        }
    }
    else if(i == 7){  // validator and renderers of percentage 
      var dd={ data:i,
        className: "htRight htMiddle" ,
          editor: PercentageEditor,
          validator: function (value, callback) { // validator of percentage
            const thisrow = this.row;
            const thiscol = this.col;
          
            if(thisrow>5){ // editable
              validator_percentage(value, callback,
                
decimalSeparator2.current,userLocale2,
//navigator_language,userTimeZone,usTimeZones,
afterdigit_percentage_percperc,smallafterdigit_percentage_percperc,afterdigitsmallnb_percentage_percperc,
bignbpercent_percperc,smallnbpercent_percperc,decimalnumbers_toshow_withoutrenderer_inpercentage_percperc,
is_negativenb_accepted_percperc,is_float_accepted_percperc

                
                )
          }
          },
          renderer: function (instance, td, row, col, prop, oldvalue, cellProperties) { // renderer of percentage
          
            if(row>5){ // editable
              renderer_percentage(instance, td, row, col, prop, oldvalue, cellProperties,
                
decimalSeparator2.current,userLocale2.current,
//navigator_language,userTimeZone,usTimeZones,
afterdigit_percentage_percperc,smallafterdigit_percentage_percperc,afterdigitsmallnb_percentage_percperc,
bignbpercent_percperc,smallnbpercent_percperc,decimalnumbers_toshow_withoutrenderer_inpercentage_percperc,
is_negativenb_accepted_percperc,is_float_accepted_percperc

                ,data22)
            } else if (row>3){ // editable
              td.innerHTML=oldvalue;
              data22[row][col] = td.innerHTML;      
              td.className = 'htCenter htMiddle custom-titlecell2';
            }
            }   
}
}

else if(i == 6){ // validator and renderers of dates
  var dd={
    className: "htRight htMiddle" ,
    validator: function (oldvalue, callback) { // validator of dates
        const thisrow = this.row;
        const thiscol = this.col;
            
        if(thisrow>5){ // editable
          validator_date(oldvalue, callback, // validator of dates
                decimalSeparator2.current,userLocale2.current,navigator_language2,userTimeZone,usTimeZones,use_en_time,
                use_english_date_by_user_himeself_in_modal_withoutfct
            )
      }
      },
    renderer: function (instance, td, row, col, prop, oldvalue, cellProperties) { // renderer of dates
          
       if(row>5){ // editable
        renderer_date(instance, td, row, col, prop, oldvalue, cellProperties,
              decimalSeparator2.current,userLocale2.current,navigator_language2,userTimeZone,usTimeZones,use_en_time
          ,data22)
      } else if ( row>3 ) { // editable
           td.innerHTML=oldvalue;
           data22[row][col] = td.innerHTML;
           td.className = 'htCenter htMiddle custom-titlecell2';
        }
        }
   
  }
}

else if( i == 2 ) { // validator of dropdown-  editable : source
  var dd={
      type: 'dropdown',
      source: ['','yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white'], // editable
      validator: function(value, callback) {  // editable
              validator_dropdown(value, callback,['','yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white']) // editable dont forget to change my_source like source above
      },
     }
  }

  else if( i == 3 ) {  // validator and renderer of emails
    var dd={
       className: "htLeft htMiddle" ,
       validator: function (oldvalue, callback) { // validator of emails
          const thisrow = this.row;
          const thiscol = this.col;
        if(thisrow>5){ // editable
            validator_email(oldvalue, callback,thisrow,thiscol)
        }
        },
        
      renderer: function (instance, td, row, col, prop, oldvalue, cellProperties) { // renderer of email
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

  else if( i == 4 ) {  // validator and renderer of onlynb
      var dd={
        className: "htLeft htMiddle" ,
        validator: function (oldvalue, callback) { // validator of onlynb
            const thisrow = this.row;
            const thiscol = this.col;
            if(thisrow>5){ // editable
              validator_onlynb(oldvalue, callback,onlynumbers_length_on)
          }
          },
          
        renderer: function (instance, td, row, col, prop, oldvalue, cellProperties) { // renderer of onlynb
          if(row>5){ // editable
            renderer_onlynb(instance, td, row, col, prop, oldvalue, cellProperties,onlynumbers_length_on,data22)
          } 
          else if ( row>3 ) { // editable
            td.innerHTML=oldvalue;
            data22[row][col] = td.innerHTML;
            td.className = 'htCenter htMiddle custom-titlecell2';
         }
  
                  }
       
      }
      }
  else if( i == 5 ) { // validator and renderers of phonenumber
        var dd={
          className: "htLeft htMiddle" ,
          validator: function (oldvalue, callback) { // validator of phonenumber
              const thisrow = this.row;
              const thiscol = this.col;
              if(thisrow>5){ // editable
                validator_phonenumber(oldvalue, callback,phonenumbers_length_pn)
            }
            },
            
            renderer: function (instance, td, row, col, prop, oldvalue, cellProperties) { // renderer of phonenumber
              if(row>5){ // editable
                renderer_phonenumber(instance, td, row, col, prop, oldvalue, cellProperties,phonenumbers_length_pn,data22)
               } 
              else if ( row>3 ) { // editable
                td.innerHTML=oldvalue;
                data22[row][col] = td.innerHTML;
                td.className = 'htCenter htMiddle custom-titlecell2';
             }
         
        }
        }
      }

  else if( i == 9 || i == 1) { // validator and renderers of text
        var dd={
          className: "htRight htMiddle" ,
          validator: function (oldvalue, callback) { // validator of text
              const thisrow = this.row;
              const thiscol = this.col;
              if(thisrow>5){ // editable
                validator_text(oldvalue, callback,text_length_txt)
            }
            },
          renderer: function (instance, td, row, col, prop, oldvalue, cellProperties) { // renderer of numbers or amounts
            
             if(row>5){ // editable
              renderer_text(instance, td, row, col, prop, oldvalue, cellProperties,text_length_txt,data22)
            } else if ( row>3 ) { // editable
                 td.innerHTML=oldvalue;
                 data22[row][col] = td.innerHTML;
                 td.className = 'htCenter htMiddle custom-titlecell2';
              }
              }
         
        }
      }
    
    
  



      /*
    
        else if( i == 1 || i == 9 || i == 14) { // editable
          var dd={
            className: "htRight htMiddle" ,
            validator: function (oldvalue, callback) { // validator of texts
                const thisrow = this.row;
                const thiscol = this.col;
                if(thisrow>5){ // editable
                  validator_text(oldvalue, callback,text_length_txt)
              }
              },
            renderer: function (instance, td, row, col, prop, oldvalue, cellProperties,...otherArgs) { // renderer of texts                        
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
      
        else { //editable if has to
          //////console.log('columnsdata else ')
            var dd={data:i,type:'text'}
            //////console.log(dd)
          }
          */
          else { //editable if has to
            //////console.log('columnsdata else ')
              var dd={data:i,type:'text'}
              //////console.log(dd)
            }
          fa.push(dd) 
      }
      fa.push({data:15,readOnly:true})
      return fa
      }