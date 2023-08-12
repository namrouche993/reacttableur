import BigNumber from 'bignumber.js';

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
    onlynumbers_length_on
  
} from '../../initials_inputs.js'

import { comments_messages } from '../../Tools/comments_messages.js'

  export function renderer_integers(instance, td, row, col, prop, oldvalue, cellProperties,
    
    decimalSeparator,userLocale, 
    //navigator_language,userTimeZone,usTimeZones,
    currencyht_intint,currencyht_toshow_intint,afterdigit_intint,smallafterdigit_intint,afterdigitsmallnb_intint,
    bignb_intint,smallnb_intint,decimalnumbers_toshow_withoutrenderer_innumbers_intint,usegrouping_intint_if_true,
    is_negativenb_accepted_intint, is_float_accepted_intint

    ,data22){
    //const data22 = otherArgs[otherArgs.length - 1];
  //if(row>5){  // editable
                     if (oldvalue !== null) {
                       var value = oldvalue.toString().replace(currencyht_intint, '');
                     } else {
                       var value = null
                     }
      
                    //var value=oldvalue;
      
                    if (value == null || value == '') {
                      td.innerHTML = ''
                      data22[row][col] = td.innerHTML;
                    }
                     else if (decimalSeparator == "." && /^\s*[-+]?(\s*\d+)\s*$/.test(value)) {
                      console.log('we are inside renderer . whole number . !!')
                      console.log(value)
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_intint_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_intint,
                        maximumFractionDigits: afterdigit_intint,
                      });
                      const value_without_whitespace = value.replace(/^\s*([-+])?\s*(\d+)\s*$/, '$1$2');
                      const formattedNumber = formatter.format(Number(value_without_whitespace));
                      //Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_intint;
                      data22[row][col] = td.innerHTML;
      
                    }
                     else if (decimalSeparator == "," && /^\s*[-+]?(\s*\d+)\s*$/.test(value)) {
                      console.log('we are inside renderer , whole number , !!')
                      console.log(value)
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_intint_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_intint,
                        maximumFractionDigits: afterdigit_intint,
                      });
                      const value_without_whitespace = value.replace(/^\s*([-+])?\s*(\d+)\s*$/, '$1$2');
                      const formattedNumber = formatter.format(Number(value_without_whitespace));
                      //Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_intint;
                      console.log('td : ')
                      console.log(td)
                      data22[row][col] = td.innerHTML;
      
      
                    }
                     else if (decimalSeparator == '.' && /^\s*[-+]?(\s*\d+(\.\d*)?|\.\d+)\s*$/.test(value)) {
                      console.log('we are inside rendere 1')
                      console.log('//1234567.89 (BY DEFAULT VALUE) AMERICAN NUMERIC FORMAT WITHOUT THOUSAND SEPARATOR')
                      console.log(value)
                      const value_without_whitespace2 = value.replace(/^\s*([-+])\s*(\d+)/, '$1$2');
      
                      //const userLocale = Intl.NumberFormat().resolvedOptions().locale || 'fr' || 'en'
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_intint_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_intint,
                        maximumFractionDigits: afterdigit_intint,
                      }); //('en')
                      if (Math.abs(Number(value_without_whitespace2)) < smallafterdigit_intint) {
                        const formatter22 = new Intl.NumberFormat(userLocale, {
                          useGrouping: usegrouping_intint_if_true,
                          style: 'decimal',
                          maximumFractionDigits: afterdigitsmallnb_intint,
                        });
                        const formattedNumber22 = formatter22.format(value_without_whitespace2);
                        //Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber22 + currencyht_toshow_intint
                        console.log('we are inside td.innerhtml < 0.01')
                        data22[row][col] = td.innerHTML;
      
                      } else {
                        console.log('we are inside . and default and else (number value>0.01)')
                        const formattedNumber = formatter.format(Number(value_without_whitespace2));
                        //Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber + currencyht_toshow_intint;
                        data22[row][col] = td.innerHTML;
      
                      }
      
                      console.log(td.innerHTML)
                    }
                     else if (decimalSeparator == ',' && /^\s*[-+]?(\s*\d+(,\d*)?|,\d+)\s*$/.test(value)) {
                      console.log('we are inside rendere 2')
                      console.log('we are inside decimalseparator == , and ezaoeza ')
                      console.log('//1234567,89 EUROPEAN FORMAT NUMERIC FORMAT WITHOUT THOUSAND')
                      //const userLocale = Intl.NumberFormat().resolvedOptions().locale || 'fr' || 'en'
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_intint_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_intint,
                        maximumFractionDigits: afterdigit_intint,
                      });
                      const value_without_whitespace3 = value.replace(/^\s*([-+])\s*(\d+)/, '$1$2');
      
                      console.log('value in second :')
                      console.log(value_without_whitespace3)
                      const value_without_whitespace32 = value_without_whitespace3.toString().replace(',', '.')
                      //console.log('value2 :')
                      //console.log(value2)
                      console.log(Number(value_without_whitespace32))
      
                      if (Math.abs(Number(value_without_whitespace32)) < smallafterdigit_intint) {
                        console.log('ifnumbervalue2222<0.01 comma')
                        console.log(Number(value_without_whitespace32))
                        const formatter33 = new Intl.NumberFormat(userLocale, {
                          useGrouping: usegrouping_intint_if_true,
                          style: 'decimal',
                          maximumFractionDigits: afterdigitsmallnb_intint,
                        });
                        const formattedNumber33 = formatter33.format(value_without_whitespace32);
                        //Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber33 + currencyht_toshow_intint;
                        data22[row][col] = td.innerHTML;
      
                      } else {
                        const formattedNumber = formatter.format(value_without_whitespace32);
                        console.log(formattedNumber)
      
                        //Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber + currencyht_toshow_intint;
                        data22[row][col] = td.innerHTML;
      
                      }
      
                    }
                     else if (decimalSeparator == ',' && /^\s*[-+]?(\s*\d{1,3}( \d{3})*(,\d*)?|,\d+)\s*$/.test(value)) {
                      console.log('we are inside rendere 3')
                      console.log('we are inside else if 300 000,00')
                      console.log('// 1 234 567,89 FRENCH NUMERIC FORMAT WITH THOUSAND SEPARATOR')
      
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_intint_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_intint,
                        maximumFractionDigits: afterdigit_intint,
                      });
                      const value3 = value.replace(/\s/g, '').replace(',', '.');
                      const formattedNumber = formatter.format(Number(value3).toFixed(2));
                      //Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_intint;
                      data22[row][col] = td.innerHTML;
      
      
                    }
                     else if (decimalSeparator == '.' && /^\s*[-+]?(\s*\d{1,3}(,\d{3})*(\.\d+)?|\.\d+)\s*$/.test(value)) {
                      console.log('we are inside rendere 4')
                      console.log('5,455,653.35 ')
                      console.log('// 1,234,567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR')
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_intint_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_intint,
                        maximumFractionDigits: afterdigit_intint,
                      });
                      console.log('value in rendere 4 ')
                      console.log(value)
                      const value4 = value.replace(/,/g, '')
                     // // console.log(hot.undoRedo.doneActions)
                  /*    if(hot.undoRedo.doneActions.length>0){
                        
                      hot.undoRedo.doneActions[hot.undoRedo.doneActions.length - 1].changes.forEach((x, y) => {
                        console.log('we are inside foreach in renderer')
                         if (x[0] == row && x[1] == col) {
                        console.log('we are inside condition renderer')
                        //x[3] = value4
                      }
                      })
                      
                    }*/
                    //  hot.undoRedo.doneActions[hot.undoRedo.doneActions.length-1].changes[0][2]='820'
                     // if(src=='CopyPaste.paste'){
                     // console.log('inside copypaste.paste source in afterchange')
                     // console.log(changes)
                     //console.log(hot.undoRedo.doneActions[hot.undoRedo.doneActions.length-1].changes[0][2]='82')
                     // }
                     console.log('value4:') 
                     console.log(value4)
                      const formattedNumber = formatter.format(Number(value4).toFixed(2));
                      //Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_intint;
                      data22[row][col] = td.innerHTML;
      
      
                    }
                     else if (decimalSeparator == ',' && /^\s*[-+]?(\s*\d{1,3}(?:\.\d{3})+(?:,\d+)?)\s*(?=\s|$)/.test(value)) {
                      // 1.234.567,89 EUROPEAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as dot
                      console.log('we are inside rendere 5')
                      console.log('5.300.000,00')
                      console.log('// 1.234.567,89 EUROPEAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as dot')
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_intint_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_intint,
                        maximumFractionDigits: afterdigit_intint,
                      });
                      const value_without_whitespace4 = value.replace(/^\s*([-+])\s*(\d+)/, '$1$2')
                      const value_without_whitespace45 = value_without_whitespace4.trim().replace(/\./g, '').replace(',', '.')
                      //const value5 = value.trim().replace(/\./g, '')
      
                      const formattedNumber = formatter.format(Number(value_without_whitespace45).toFixed(2));
                      //Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_intint;
                      data22[row][col] = td.innerHTML;
      
                    } 
                    else if (decimalSeparator == '.' && /^\s*[-+]?(\s*\d{1,3}( \d{3})*(\.\d*)?|\.\d+)\s*$/.test(value)) {
                      console.log('we are inside rendere 6')
                      console.log('we are inside else if 300 000.00')
                      console.log('// 1 234 567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR')
      
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_intint_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_intint,
                        maximumFractionDigits: afterdigit_intint,
                      });
                      const value6 = value.replace(/\s/g, '');
                      const formattedNumber = formatter.format(Number(value6).toFixed(2));
                      //Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_intint;
                      data22[row][col] = td.innerHTML;
      
                    }
                     else if (decimalSeparator == '.' && /^\s*[-+]?[\s]*[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value)) {
                      console.log('we are inside rendere 7')
                      console.log('we are inside scientific notation :');
                      console.log('// 1.6e6 1.60E+04  -13.65E4  - 12.3E+03  scientific notation with E sign');
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_intint_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_intint,
                        maximumFractionDigits: afterdigit_intint,
                      });
                      const value7 = parseFloat(value.replace(/\s/g, ''));
                      const formattedNumber = formatter.format(Number(value7));
                      //Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_intint;
                      data22[row][col] = td.innerHTML;
      
                    }
                     else if (decimalSeparator == ',' && /^\s*[-+]?[\s]*[0-9]*,?[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value)) {
                      //console.log('----------------------------------------rendere 8 ---------------------------------------- rendere 8 ------------------------')
                      console.log('we are inside rendere 8')
                      console.log('we are inside scientific notation with comma :');
                      console.log('// 1,6e6 1,60E+04  -13,65E4  - 12,3E+03  scientific notation with E sign');
                      console.log('value inside scientific notation with comma else if : ')
                      const value8 = parseFloat(value.replace(',', '.').replace(/\s/g, ''));
                      console.log('value8 : ')
                      console.log(value8)
      
                      if (Math.abs(Number(value8)) < smallafterdigit_intint) {
                        console.log('ifnumbervalue2222<0.01 comma sceintific number')
                        console.log(Number(value8))
                        const formatter88 = new Intl.NumberFormat(userLocale, {
                          useGrouping: usegrouping_intint_if_true,
                          style: 'decimal',
                          maximumFractionDigits: afterdigitsmallnb_intint,
                        });
                        const formattedNumber88 = formatter88.format(value8);
                        //Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber88 + currencyht_toshow_intint;
                        data22[row][col] = td.innerHTML;
      
                      } else {
                        const formatter = new Intl.NumberFormat(userLocale, {
                          useGrouping: usegrouping_intint_if_true,
                          style: 'decimal',
                          minimumFractionDigits: afterdigit_intint,
                          maximumFractionDigits: afterdigit_intint,
                        });
                        const formattedNumber = formatter.format(Number(value8));
                        //Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber + currencyht_toshow_intint;
                        console.log(td.innerHTML)
                        data22[row][col] = td.innerHTML;
      
                      }
                    } 
                    else {
                      console.log('WE ARE INSIDE LAST ELSE RENDERER')
                    }
                  
                  td.className = 'htRight htMiddle custom-normalcell'
                  //td.innerHTML=''
                    //} else if(row>3){ // editable
                    //  //td.innerHTML = '<b>' + oldvalue + '</b>';
                    //  td.innerHTML=oldvalue;
                    //  data22[row][col] = td.innerHTML;      
                    //  td.className = 'htCenter htMiddle custom-titlecell2';
                    //  //td.style.fontWeight = 900;
                    //  //td.style.textAlign = 'left';
                    // }
                  
  }

  export function validator_integers(oldvalue, callback,thisrow,thiscol,

    decimalSeparator,userLocale,
    //navigator_language,userTimeZone,usTimeZones,
    currencyht_intint,currencyht_toshow_intint,afterdigit_intint,smallafterdigit_intint,afterdigitsmallnb_intint,
    bignb_intint,smallnb_intint,decimalnumbers_toshow_withoutrenderer_innumbers_intint,usegrouping_intint_if_true,
    is_negativenb_accepted_intint,is_float_accepted_intint

    ){
    console.log('************** before validator i === 2 in validator_renderers_integers ')
    console.log('i inside validator_integers : ')
           if (oldvalue != null) {//|| oldvalue.toString()!==null){
             var value = oldvalue.toString().replace(currencyht_intint, '');
             console.log('new VALuE in afterValidator is : ' + value)
           } else {
             console.log('we are inside validator oldvalue==null')
             var value = null;
           }

          //var value = oldvalue;

          //   const value = oldvalue.replace(currencyht_intint,'') ;
          // console.log('new VALuE in validator is : ' +  value);

          if (value == null ||
            /^\s*[-+]?(\s*\d+)\s*$/.test(value) || // /^\s*[-+]?(\d+)\s*$/.test(value) || // when the value is whole number like 45 1987 2 36 ... // /^\s*[-+]?(\d+)\s*\$?\s*$/.test("  1235$  ")
            /^\s*[-+]?(\s*\d+(\.\d*)?|\.\d+)\s*$/.test(value) || //1234567.89 (BY DEFAULT VALUE) AMERICAN NUMERIC FORMAT WITHOUT THOUSAND SEPARATOR
            /^\s*[-+]?(\s*\d+(,\d*)?|,\d+)\s*$/.test(value) || //1234567,89 EUROPEAN NUMERIC FORMAT WITHOUT THOUSAND SEPARATOR
            /^\s*[-+]?(\s*\d{1,3}( \d{3})*(,\d*)?|,\d+)\s*$/.test(value) || // 1 234 567,89 FRENCH NUMERIC FORMAT WITH THOUSAND SEPARATOR as space
            /^\s*[-+]?(\s*\d{1,3}(,\d{3})*(\.\d+)?|\.\d+)\s*$/.test(value) || // 1,234,567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as comma
            /^\s*[-+]?(\s*\d{1,3}(?:\.\d{3})+(?:,\d+)?)\s*(?=\s|$)/.test(value) || // 1.234.567,89 EUROPEAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as dot /^\s*[-+]?(\d{1,3}(?:[.,\s]\d{3})*(?:,\d+)?)\s*$/
            /^\s*[-+]?(\s*\d{1,3}( \d{3})*(\.\d*)?|\.\d+)\s*$/.test(value) ||   // 1 234 567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as space
            /^\s*[-+]?[\s]*[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value) || // 1.6e6 1.60E+04  -13.65E4  - 12.3E+03  scientific notation with E sign
            /^\s*[-+]?[\s]*[0-9]*,?[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value)    // 1,6e6 1,60E+04  -13,65E4  - 12.3E+03  scientific notation with E sign


          ) {
            console.log('it returns true in validator')
            if (value !== oldvalue) {
              console.log('it returns true inside validator and value != oldvalud')
              //callback(true,
              //  hot.setDataAtCell(thisrow, thiscol, value)
              //)
              callback(true)
              //hot.setDataAtCell(row,prop,this.getData()[row][prop])
            } else {
              callback(true)
            }
          } else {
            console.log('we are in callback false')
            callback(false);
          }
        }

  export function afterValidatefct_integers(isValid, oldvalue, row, prop, source,hot,commentsPlugin,

    decimalSeparator,userLocale,
    //navigator_language,userTimeZone,usTimeZones,
    currencyht_intint,currencyht_toshow_intint,afterdigit_intint,smallafterdigit_intint,afterdigitsmallnb_intint,
    bignb_intint,smallnb_intint,decimalnumbers_toshow_withoutrenderer_innumbers_intint,usegrouping_intint_if_true,
    is_negativenb_accepted_intint,is_float_accepted_intint
    
    ){      
    console.log('//////////////////// ************** prop2 ////////////////// ****')
    console.log('//////////////////// ************** prop2 ////////////////// ****')
    console.log('//////////////////// ************** prop2 ////////////////// ****')

    console.log('value : aftervalidate')
    console.log(oldvalue)
    console.log(typeof oldvalue)

     if (oldvalue !== null) {
       if (oldvalue.toString().includes(currencyht_intint) && currencyht_intint!=''  ) {
         console.log('new VALuE in afterValidator will be : ' + oldvalue.toString().replace(currencyht_intint, ''))
         hot.setDataAtCell(row, prop, oldvalue.toString().replace(currencyht_intint, ''), 'my_source');
       } else {
         var value = oldvalue //.toString() ;
         console.log('new VALuE in afterValidator still be : ' + value)
       }

     } else {
       var value = null
     }

    //var value=oldvalue;
    //const value = oldvalue.replace(regexcurrenciesht, '');

    console.log('source in afterValidate is : ')
    console.log(source)
    console.log(value)
    console.log(typeof value)
    console.log(/^\s*[-+]?(\s*\d+)\s*$/.test(value))

    if (isValid && value == null) {
      console.log('we are inside afterValidate value==null')
      console.log('COULD END HERE')

    } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d+)\s*$/.test(value)) {
      console.log('integer number')
      if (/^[-+](?=\s)\s*\d+\s*$/.test(value.trim())) {
        console.log('if there is a whitespace between sign +/- and the value so remove this whitespace')
        console.log('we will call my_source_removewhitespacesign')
        hot.setDataAtCell(row, prop, value.replace(/^\s*([-+])?\s*(\d+)\s*$/, '$1$2'), 'my_source_removewhitespacesign');
      } else {
        if (Math.abs(Number(value.trim())) < bignb_intint) {
          if (decimalSeparator == '.') {
            console.log('condition afterValidate whole number !.')

            if(Number(value.trim())<0 && is_negativenb_accepted_intint==false){
              commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_negative','fr-FR',userLocale,decimalSeparator))
              hot.setDataAtCell(row, prop, '', 'my_source_empty');
            } else {
              if(Number.isInteger(Number(value.trim()))==false && is_float_accepted_intint==false ){
                   commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_float','fr-FR',userLocale,decimalSeparator))
                   hot.setDataAtCell(row, prop, '', 'my_source_empty');
              }else {
               console.log('do nothing')
               console.log('COULD END HERE')
               commentsPlugin.removeCommentAtCell(row, prop);
              }
          }
          } else if (decimalSeparator == ",") {
            if(Number(value.trim())<0 && is_negativenb_accepted_intint==false){
              commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_negative','fr-FR',userLocale,decimalSeparator))
              hot.setDataAtCell(row, prop, '', 'my_source_empty');
            } else {
              if(Number.isInteger(Number(value.trim()))==false && is_float_accepted_intint==false ){
                   commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_float','fr-FR',userLocale,decimalSeparator))
                   hot.setDataAtCell(row, prop, '', 'my_source_empty');
              } else {
            console.log('do nothing')
            console.log('COULD END HERE')
            commentsPlugin.removeCommentAtCell(row, prop);
            }}
          }
        } else {
          //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
          commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'limit_autor','fr-FR',userLocale,decimalSeparator))
          hot.setDataAtCell(row, prop, '', 'my_source_empty');
        }
      }
    } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d+(\.\d*)?|\.\d+)\s*$/.test(value)) {
      //1234567.89 (BY DEFAULT VALUE) AMERICAN NUMERIC FORMAT WITHOUT THOUSAND SEPARATOR
      //const value_without_whitespace2= value.replace(/^\s*([-+])\s*(\d+)/, '$1$2');

      if (/^\s*[-+]\s+\d/.test(value.trim())) {
        console.log('if there is whitespaces between sign +/- and the value so remove this whitespace like + 123456.89  ')
        console.log('we will call my_source_removewhitespacesign')
        hot.setDataAtCell(row, prop, value.replace(/^\s*([-+])\s*(\d+)/, '$1$2'), 'my_source_removewhitespacesign');
      } else {
        if (decimalSeparator == '.') {
          console.log('condition 3 ta3 do nothing')
          console.log('//1234567.89 (BY DEFAULT VALUE) AMERICAN NUMERIC FORMAT WITHOUT THOUSAND SEPARATOR')
          if (Math.abs(Number(value.trim())) < bignb_intint) {
            //commentsPlugin.removeCommentAtCell(row, prop);
            //console.log('COULD END HERE')

            if((value.trim().toString().split('.')[1] || '').length>decimalnumbers_toshow_withoutrenderer_innumbers_intint) {
              hot.setDataAtCell(row, prop,Number(value.trim()).toFixed(decimalnumbers_toshow_withoutrenderer_innumbers_intint).replace(/\.?0+$/, "") , 'my_source');
              commentsPlugin.removeCommentAtCell(row, prop);
            } else {
              if(Number(value.trim())<0 && is_negativenb_accepted_intint==false){
              commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_negative','fr-FR',userLocale,decimalSeparator))
              hot.setDataAtCell(row, prop, '', 'my_source_empty');
            } else {
              if(Number.isInteger(Number(value.trim()))==false && is_float_accepted_intint==false ){
                   console.log('isinteger use == false && isfload =false')
                   commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_float','fr-FR',userLocale,decimalSeparator))
                   hot.setDataAtCell(row, prop, '', 'my_source_empty');
              }else {
              console.log('COULD END HERE')
              commentsPlugin.removeCommentAtCell(row, prop);
            }
          }
            }


          } else {
            //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
            commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'limit_autor','fr-FR',userLocale,decimalSeparator))
            hot.setDataAtCell(row, prop, '', 'my_source_empty');
          }

          // do nothing
        } else if (decimalSeparator == ',') {
          console.log('condition 4')
          //hot.setDataAtCell(row, prop, value.trim().replace('.', ','));
          //commentsPlugin.removeCommentAtCell(row,prop);

          if (/^\s*[-+]?(\s*\d{1,3}(\.\d{3})*|\d+)(,\d+)?\s*$/.test(value)) {
            console.log('condition 4.1')
            console.log('when 12.151')
            hot.setDataAtCell(row, prop, value.replace('.', ''), 'my_source');
            commentsPlugin.removeCommentAtCell(row, prop);
          } else {
            console.log('condition 4.2')
            //alert('voulez vous dire que 3.16 egale a 3,14 ? si oui changer svp ')
            //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + Number(value).toLocaleString(userLocale) + " est correct");
            commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_4','fr-FR',userLocale,decimalSeparator))
            commentsPlugin.showAtCell(row, prop);
            hot.setDataAtCell(row, prop, '', 'my_source_empty');
          }

        }
      }
    } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d+(,\d*)?|,\d+)\s*$/.test(value)) {
      //1234567,89 EUROPEAN NUMERIC FORMAT WITHOUT THOUSAND SEPARATOR
      if (/^\s*[-+]\s+\d/.test(value.trim())) {
        console.log('if there is whitespaces between sign +/- and the value so remove this whitespace like + 123456.89  ')
        console.log('we will call my_source_removewhitespacesign')
        hot.setDataAtCell(row, prop, value.replace(/^\s*([-+])\s*(\d+)/, '$1$2'), 'my_source_removewhitespacesign');
      } else {
        if (decimalSeparator == '.') {

          // WINDOWS ANGLAIS w NUMBER FRNACAIS
          // MAY CAUSE PROBLEM WITH NUMBERS
          // we have to do something
          console.log('may cause problem 1')
          //alert('may cause problem')
          console.log('condition 1 ')
          if (/^\s*[-+]?(\s*\d{1,3}(,\d{3})*(\.\d+)?|\.\d+)\s*$/.test(value)) {
            console.log('condition 1.1')
            console.log('like whole number with , as thousand separator 1,234')
            hot.setDataAtCell(row, prop, value.replace(/,/g, ''), 'my_source');
            commentsPlugin.removeCommentAtCell(row, prop);

          } else {
            console.log('condition 1.2')
            console.log('may cause problem')
            //alert('do you want to mean that ' + value + ' = ' + value.trim().replace(',', '.') + ' ?' )
            //hot.setDataAtCell(row, prop, value.trim().replace(',', '.'));
            //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + value.trim().replace(',', '.') + " est correct");
            commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_5','fr-FR',userLocale,decimalSeparator))
            hot.setDataAtCell(row, prop, '', 'my_source_empty');
          }

          //hot.setDataAtCell(row, prop, value.replace(/,/g, '') );

        } else if (decimalSeparator == ',') {
          // do nothing
          console.log('condition 2 ta3 do nothing')
          //hot.setDataAtCell(row, prop, value.trim());
          //console.log('COULD END HERE')

          if (Math.abs(Number(value.trim().replace(',', '.'))) < bignb_intint) {
            console.log('less than bignb_intint')
            console.log(value)
            console.log((Number(value.toString().trim().replace(',', '.')).toString().split('.')[1] || '').length)
            //commentsPlugin.removeCommentAtCell(row, prop);
            if((value.toString().trim().replace(',', '.').toString().split('.')[1] || '').length>decimalnumbers_toshow_withoutrenderer_innumbers_intint) {
              console.log('inside first condition')
              console.log(Number(value.toString().trim().replace(',', '.')).toFixed(decimalnumbers_toshow_withoutrenderer_innumbers_intint).replace(/\.?0+$/, "").replace('.', ','))
              hot.setDataAtCell(row, prop,Number(value.trim().replace(',', '.')).toFixed(decimalnumbers_toshow_withoutrenderer_innumbers_intint).replace(/\.?0+$/, "").replace('.', ',') , 'my_source');
              commentsPlugin.removeCommentAtCell(row, prop);
            } else {
             if(Number(value.trim().replace(',', '.'))<0 && is_negativenb_accepted_intint==false){
              commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_negative','fr-FR',userLocale,decimalSeparator))
              hot.setDataAtCell(row, prop, '', 'my_source_empty');
            } else {
              if(Number.isInteger(Number(value.trim().replace(',','.')))==false && is_float_accepted_intint==false ){
                   commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_float','fr-FR',userLocale,decimalSeparator))
                   hot.setDataAtCell(row, prop, '', 'my_source_empty');
              }else {
              console.log('COULD END HERE')
              commentsPlugin.removeCommentAtCell(row, prop);
            }
          }
            }

          } else {
            //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
            commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'limit_autor','fr-FR',userLocale,decimalSeparator))
            hot.setDataAtCell(row, prop, '', 'my_source_empty');
          }


        }
      }
    } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d{1,3}( \d{3})*(,\d*)?|,\d+)\s*$/.test(value)) {
      // 1 234 567,89 FRENCH NUMERIC FORMAT WITH THOUSAND SEPARATOR
      console.log('condition out 5')
      console.log('// 1 234 567,89 FRENCH NUMERIC FORMAT WITH THOUSAND SEPARATOR')
      //hot.setDataAtCell(row, prop, value.replace(/\s/g, '').replace(',', '.') );
      //console.log(value.replace(/\s/g, '').replace(',', '.'))
      console.log(value.replace(/\s/g, ''))
      hot.setDataAtCell(row, prop, value.replace(/\s/g, ''), 'my_source');



    } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d{1,3}(,\d{3})*(\.\d+)?|\.\d+)\s*$/.test(value)) {

      console.log('// 1,234,567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR')
      console.log('condition out 6 ')
      if (decimalSeparator == ',') {
        // may cause problem
        console.log('condition out 6.1')
        //alert('veuillez corriger l'ecriture selon la format de vos parametres)
        //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + Number(value.replace(/,/g, '')).toLocaleString(userLocale) + " est correct");
        commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_6','fr-FR',userLocale,decimalSeparator))
        hot.setDataAtCell(row, prop, '', 'my_source_empty');

      } else {
        //
        console.log('condition out 6.2')
      
        hot.setDataAtCell(row, prop, value.replace(/,/g, ''), 'my_source');
        commentsPlugin.removeCommentAtCell(row, prop);

      }
      //hot.setDataAtCell(row, prop, value.replace(/,/g, '') );
      // 1,234,567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR

    } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d{1,3}(?:\.\d{3})+(?:,\d+)?)\s*(?=\s|$)/.test(value)) {
      // 1.234.567,89 EUROPEAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as dot
      if (/^\s*[-+]\s+\d/.test(value.trim())) {
        console.log('if there is whitespaces between sign +/- and the value so remove this whitespace like + 1.234.567,89  ')
        console.log('we will call my_source_removewhitespacesign')
        hot.setDataAtCell(row, prop, value.replace(/^\s*([-+])\s*(\d+)/, '$1$2'), 'my_source_removewhitespacesign');
      } else {
        if (/^\s*[-+]?(?=\d)(?:(?:\d{1,3}(?:[.,\s]\d{3}){0,2})|(?:\d+))(?:,\d+)?(?<=,[\d,]*),(?!\d*,)\d+(?:\.\d+)?\s*$/.test(value)) {
          console.log('condition out 7.1')
          console.log('like 1,234,56 or 1.234.567,8956,78')
          //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide pour cette cellule. Veuillez saisir uniquement des valeurs numériques");
          commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_fill_only_numbers','fr-FR',userLocale,decimalSeparator))
          hot.setDataAtCell(row, prop, '', 'my_source_empty');
        } else {
          console.log('condition out 7')
          console.log('// 1.234.567,89 EUROPEAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as dot')
          //hot.setDataAtCell(row, prop, value.trim().replace(/\./g, '').replace(',', '.') );
          if (decimalSeparator == ',') {
            hot.setDataAtCell(row, prop, value.trim().replace(/\./g, ''), 'my_source');
            commentsPlugin.removeCommentAtCell(row, prop);

          } else {
            console.log('condition out 7.3')
            console.log('1.234.567 whole number')
            //hot.setDataAtCell(row, prop, value.trim().replace(/\./g, '') );
            //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + value.trim().replace(/\./g, '').replace(',', '.') + " est correct");
            commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_8','fr-FR',userLocale,decimalSeparator))
            hot.setDataAtCell(row, prop, '', 'my_source_empty');
          }
        }
      }
    } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d{1,3}( \d{3})*(\.\d*)?|\.\d+)\s*$/.test(value)) {
      // 1 234 567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR
      console.log('condition out 8')
      console.log('// 1 234 567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR')
      hot.setDataAtCell(row, prop, value.replace(/\s/g, ''), 'my_source');
      console.log(value.replace(/\s/g, ''))
      commentsPlugin.removeCommentAtCell(row, prop);

    } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?[\s]*[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value)) {
      console.log('condition out 12 ')
      // we a re inside scientific notation when mantissa is integer
      if (/^[+-]?[\s]+\d+(\.\d+)?([eE][+-]?\d+)?$/.test(value.trim())) {
        console.log('if there is whitespaces between sign +/- and the value so remove this whitespace like + 5e6  ')
        console.log('we will call my_source_removewhitespacesign')
        hot.setDataAtCell(row, prop, value.trim().replace(/\s/g, ''), 'my_source_removewhitespacesign');
        commentsPlugin.removeCommentAtCell(row, prop);

      } else {
        if (Math.abs(Number(value)) > Number(bignb_intint) || Math.abs(Number(value)) < Number(smallnb_intint)) {
          //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
          commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'limit_autor','fr-FR',userLocale,decimalSeparator))
          hot.setDataAtCell(row, prop, '', 'my_source_empty');
        } else {
          if (Math.abs(Number(value)) < smallafterdigit_intint) {
            console.log('we are in the case when integer scientific notation less than smallafterdigit_intint')
            if (decimalSeparator == '.') {
              hot.setDataAtCell(row, prop, Number(value).toFixed(Math.abs(BigNumber(value).e)).toString(), 'my_source');
              commentsPlugin.removeCommentAtCell(row, prop);

            } else {
              hot.setDataAtCell(row, prop, Number(value).toFixed(Math.abs(BigNumber(value).e)).toString().replace('.', ','), 'my_source');
              commentsPlugin.removeCommentAtCell(row, prop);

            }
          } else {
            if (decimalSeparator == '.') {
              console.log('integer scinetific notation and english dot')
              hot.setDataAtCell(row, prop, parseFloat(value.replace(/\s/g, '')).toString(), 'my_source');
              console.log(parseFloat(value.replace(/\s/g, '')).toString())
              commentsPlugin.removeCommentAtCell(row, prop);

            } else if (decimalSeparator == ',') {
              console.log('integer scinetific notation and european comma')
              hot.setDataAtCell(row, prop, parseFloat(value.replace(/\s/g, '')).toString().replace('.', ','), 'my_source');
              console.log(parseFloat(value.replace(/\s/g, '')).toString().replace('.', ','))
              commentsPlugin.removeCommentAtCell(row, prop);

            }
          }
        }
      }
    } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?[\s]*[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value)) {
      // we are inside scientific notation :
      // 1.6e6 1.60E+04  -13.65E4  - 12.3E+03  scientific notation with E sign
      console.log('condition out 9')
      console.log(value)
      if (Math.abs(Number(value)) > Number(bignb_intint) || Math.abs(Number(value)) < Number(smallnb_intint)) {
        //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
        commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'limit_autor','fr-FR',userLocale,decimalSeparator))
        hot.setDataAtCell(row, prop, '', 'my_source_empty');

      } else {
        if (Math.abs(Number(value)) < smallafterdigit_intint) {
          if (decimalSeparator == '.') {
            console.log('scientific format float mantissa and decimal separator is dot/dot and less than 0.01')
            hot.setDataAtCell(row, prop, Number(value).toFixed(Math.abs(BigNumber(value).e)).toString(), 'my_source');
            commentsPlugin.removeCommentAtCell(row, prop);

          } else if (decimalSeparator == ',') {
            console.log('scientific format float mantissa and decimal separator is dot/comma and less than 0.01')
           // commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres ");
            commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix','fr-FR',userLocale,decimalSeparator))

            hot.setDataAtCell(row, prop, '', 'my_source_empty');
          }
        } else {
          if (decimalSeparator == '.') {
            console.log('scinetific notation and english dot')
            console.log('scientific format float mantissa and decimal separator is dot/dot and greater than 0.01')
            console.log(parseFloat(value.replace(/\s/g, '')))
            hot.setDataAtCell(row, prop, parseFloat(value.replace(/\s/g, '')).toString(), 'my_source');
            commentsPlugin.removeCommentAtCell(row, prop)

          } else if (decimalSeparator == ',') {
            console.log('scientific format float mantissa and decimal separator is dot/comma and greater than 0.01')
            console.log('scinetific notation and european comma')
           // commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres ");
            commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix','fr-FR',userLocale,decimalSeparator))

            hot.setDataAtCell(row, prop, '', 'my_source_empty');
            // hot.setDataAtCell(row, prop, parseFloat(value.replace(/\s/g, '')).toString().replace('.',',') );
            // console.log(parseFloat(value.replace(/\s/g, '')).toString().replace('.',',') )
          }
          //commentsPlugin.removeCommentAtCell(row,prop);

          console.log('end conditon 9')
        }
      }
    } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?[\s]*[0-9]*,?[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value)) {
      // we are inside scientific notation with comma :
      // 1,6e6 1.60E+04  -13,65E4  - 12,3E+03  scientific notation with E sign
      console.log('condition out 10')
      console.log(value)
      const value1010 = value.replace(',', '.').replace(/\s/g, '')
      console.log('value1010 : ')
      console.log(value1010)
      if (Math.abs(Number(value1010)) > Number(bignb_intint) || Math.abs(Number(value1010)) < Number(smallnb_intint)) {
        //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
        commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'limit_autor','fr-FR',userLocale,decimalSeparator))
        hot.setDataAtCell(row, prop, '', 'my_source_empty');

      } else {
        if (Math.abs(Number(value1010)) < smallafterdigit_intint) {
          if (decimalSeparator == '.') {
            console.log('scientific format float mantissa and decimal separator is comma/dot and less than 0.01')
            //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres ");
            commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix','fr-FR',userLocale,decimalSeparator))

            hot.setDataAtCell(row, prop, '', 'my_source_empty');
          } else if (decimalSeparator == ',') {
            //bg=BigNumber(val)
            //expo=Math.abs(BigNumber(value1010).e)
            //Number(value1010).toFixed(Math.abs(BigNumber(value1010).e))
            //console.log('******************************************* we are inside condition out 10 less than 0.01 *******************************************')
            console.log('scientific format float mantissa and decimal separator is comma/comma and less than 0.01')
            hot.setDataAtCell(row, prop, Number(value1010).toFixed(Math.abs(BigNumber(value1010).e)).toString().replace('.', ','), 'my_source');
            commentsPlugin.removeCommentAtCell(row, prop);
          }

        } else {
          if (decimalSeparator == '.') {
            //maybe it will be a problem here : to fix after
            console.log('scientific format float mantissa and decimal separator is comma/dot and greather than 0.01')
            //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide pour cette cellule. Veuillez saisir uniquement des valeurs numériques");
            commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_fill_only_numbers','fr-FR',userLocale,decimalSeparator))

            hot.setDataAtCell(row, prop, '', 'my_source_empty')
          } else if (decimalSeparator == ',') {
            //console.log(' ////////////////////////////// we are inside condition out 10 decimal separator , /////////////////////////////////////////////')
            console.log('scientific format float mantissa and decimal separator is comma/comma and greather than 0.01')
            console.log(parseFloat(value.replace(',', '.').replace(/\s/g, '')))
            hot.setDataAtCell(row, prop, parseFloat(value.replace(',', '.').replace(/\s/g, '')).toString().replace('.', ','), 'my_source');
            commentsPlugin.removeCommentAtCell(row, prop);

          }
          console.log('end conditon 10')
        }
      }
    } else if (value == '') {
      console.log('do nothing , we are in last invalid')
      console.log('COULD END HERE')
      console.log(isValid)
      console.log(source)

      //commentsPlugin.removeCommentAtCell(row,prop); //aa

    } else if (isValid == false) {
      console.log('we are before COMMENT CONTENTS !!!!!!!!!!!!!!!!!!!!!!!!!!')
      console.log(value)
      //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide pour cette cellule. Veuillez saisir uniquement des valeurs numériques");
      commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_fill_only_numbers','fr-FR',userLocale,decimalSeparator))

      //commentsPlugin.setCommentAtCell(row, prop, 'Please enter only numbers.<br><br><p style="color:red;">Veuillez entrer uniquement des nombres.</p>');

      commentsPlugin.showAtCell(row, prop);
      console.log('isvalid==false')
      //hot.setDataAtCell(row,prop,hot.getData()[row][prop])
      hot.setDataAtCell(row, prop, '', 'my_source_empty')
    } else {
      console.log('WE ARE IN THE END OF AFTERVALIDATE , THE ELSE PART : ')
      hot.setDataAtCell(row, prop, '', 'my_source_empty')
      //hot.setDataAtCell(row, prop, null, 'my_source_else_empty')
      console.log('condition out 11 ')
      console.log(isValid)
      console.log(value !== undefined)
      console.log(typeof value)
      console.log(/^\s*[-+]?(\s*\d+(\.\d*)?|\.\d+)\s*$/.test(value))
      console.log(/^\s*[-+]?(\s*\d+(,\d*)?|,\d+)\s*$/.test(value))

    }

  }


  
/*

  ################################################################################"
  ################################################################################
  ######### put it in Columns_data_for_Validator_renderes.js file : ##############
  ################################################################################"
  ################################################################################"


 if(i == 2){  // editable of course
          //console.log('************** before validator i === 2 ')
            var dd={ data:i,
              className: "htRight htMiddle" ,
              validator: function (oldvalue, callback) { // validator of integers
                const thisrow = this.row;
                const thiscol = this.col;
               
                if(thisrow>5){ // editable
                  validator_integers(oldvalue, callback,thisrow,thiscol,

                    decimalSeparator2,userLocale2,
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

                    decimalSeparator2,userLocale2,
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


  ################################################################################"
  ################################################################################
  ##################### put it in afterValidatefct.js file :######################
  ################################################################################"


              afterValidatefct_integers(isValid, oldvalue, row, prop, source,hot,commentsPlugin,
                
                decimalSeparator,userLocale,
                //navigator_language,userTimeZone,usTimeZones,
    currencyht_intint,currencyht_toshow_intint,afterdigit_intint,smallafterdigit_intint,afterdigitsmallnb_intint,
    bignb_intint,smallnb_intint,decimalnumbers_toshow_withoutrenderer_innumbers_intint,usegrouping_intint_if_true,
    is_negativenb_accepted_intint,is_float_accepted_intint

                )
*/
