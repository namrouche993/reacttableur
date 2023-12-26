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

  /*
  

  */

  export function renderer_percentage(instance, td, row, col, prop, oldvalue, cellProperties,

    decimalSeparator,userLocale,
    //navigator_language,userTimeZone,usTimeZones,
    afterdigit_percentage_percperc,smallafterdigit_percentage_percperc,afterdigitsmallnb_percentage_percperc,
    bignbpercent_percperc,smallnbpercent_percperc,decimalnumbers_toshow_withoutrenderer_inpercentage_percperc,
    is_negativenb_accepted_percperc,is_float_accepted_percperc,

    display_plus_sign_in_the_start
    ,data22){
    //const data22 = otherArgs[otherArgs.length - 1];
                      ////////console.log('renderer percentage start')
                     // if(row>5){  // editable
      
                     
                        if (oldvalue==null){
                        //////////console.log('renderer percentage 0 part')
                        td.innerHTML='';
                        //data22[row][col] = td.innerHTML;      
                        cellProperties.className = 'htRight'; 
                        td.style.textAlign = 'right';
                        }
                         else if( //oldvalue == null || // value == '' ||
                          /^[-+]?(\s*\d+(\.\d+)?)\s*%$/.test(oldvalue.toString().trim()) || // for example 14.65%  "14.65 %"  
                          /^[-+]?(\s*\d+(,\d+)?)\s*%$/.test(oldvalue.toString().trim()) || // for example 14,65%   "14,65 %"
                          
                          /^[-+]?(\s*\d+(\.\d+)?)\s*$/.test(oldvalue.toString().trim()) || // for example 14.65  "14.65 "  
                          /^[-+]?(\s*\d+(,\d+)?)\s*$/.test(oldvalue.toString().trim()) // for example 14,65   "14,65 "
                        ) {
                             ////////console.log('renderer percentage 1part')
                             const value_percentage_renderer = parseFloat(oldvalue.toString().replace(',', '.').toString().replace('%','').toString().replace(/\s/g, ''));
                             ////////console.log(oldvalue)
                             ////////console.log(value_percentage_renderer)
                             if(Math.abs(value_percentage_renderer)<smallafterdigit_percentage_percperc){
                              const formatter88_percentage = new Intl.NumberFormat(userLocale, {
                                style: 'decimal',
                                maximumFractionDigits: afterdigitsmallnb_percentage_percperc,
                                useGrouping: false // removing thousand separator
                              });
                              const formattedNumber88_percentage = formatter88_percentage.format(value_percentage_renderer);
                              ////Handsontable.renderers.TextRenderer.apply(this, arguments);
                              
                              if(Number(value_percentage_renderer.toString().trim())>0 && display_plus_sign_in_the_start==true){
                                if(value_percentage_renderer.toString().trim().includes("+")){
                                  td.innerHTML = "+" + formattedNumber88_percentage + '%';
                                } else {
                                  td.innerHTML = "+" + formattedNumber88_percentage + '%';
                                }
                              } else {
                                if(value_percentage_renderer.toString().trim().includes("+")){
                                  td.innerHTML = formattedNumber88_percentage.toString().replace("+",'') + '%';
                                } else {
                                  td.innerHTML = formattedNumber88_percentage + '%';
                                }
                              }
                              
                              //data22[row][col] = td.innerHTML+'%'
            
                              cellProperties.className = 'htRight'; 
                              td.style.textAlign = 'right';
                               
                             } else {
                             const formatter_percentage = new Intl.NumberFormat(userLocale, {
                                style: 'decimal',
                                minimumFractionDigits: afterdigit_percentage_percperc,
                                maximumFractionDigits: afterdigit_percentage_percperc,
                                useGrouping: false // removing thousand separator
                              });
                              //////////console.log('renderer 2condition : ')
                              //////////console.log(oldvalue)
                              //////////console.log(value_percentage_renderer)
                              const formattedNumber_percentage = formatter_percentage.format(Number(value_percentage_renderer));
                              //////////console.log(formattedNumber_percentage)
            
                              ////Handsontable.renderers.TextRenderer.apply(this, arguments);
                              if(Number(value_percentage_renderer.toString().trim())>0 && display_plus_sign_in_the_start==true){
                                if(value_percentage_renderer.toString().trim().includes("+")){
                                  td.innerHTML = "+" + formattedNumber_percentage + '%';
                                } else {
                                  td.innerHTML = "+" + formattedNumber_percentage + '%';
                                }
                              } else {
                                if(value_percentage_renderer.toString().trim().includes("+")){
                                  td.innerHTML = formattedNumber_percentage.toString().replace("+",'') + '%';
                                } else {
                                  td.innerHTML = formattedNumber_percentage + '%';
                                }
                              }
                              
                              //  //////////console.log(td.innerHTML)
                              //data22[row][col] = td.innerHTML+'%';      
                             //td.innerHTML=oldvalue;
                             cellProperties.className = 'htRight'; 
                             td.style.textAlign = 'right';
                             }
                      }
                      else {
                        ////////////console.log('renderer percentage 02 part')
                        td.innerHTML='';
                        //data22[row][col] = td.innerHTML;      
                        td.className = 'htRight'; 
                        td.style.textAlign = 'right';
                      }
                      td.className = 'htLeft htMiddle custom-normalcell'
                      
                      td.style.fontFamily = 'Roboto Mono, monospace'; // Set the desired font family
                      td.style.fontSize = '11px'


                      ////////////console.log('renderer percentage end')
            
                      //} else if ( row>3 ) {
                      //  //data22[row][col] = td.innerHTML;      
                      //      td.innerHTML=oldvalue;
                     //      data22[row][col] = td.innerHTML;      
                     //       td.className = 'htCenter htMiddle custom-titlecell2';
                   // }
                    
                    
                  }
  
  export function validator_percentage(value, callback,
    
    decimalSeparator,userLocale,
    //navigator_language,userTimeZone,usTimeZones,
    afterdigit_percentage_percperc,smallafterdigit_percentage_percperc,afterdigitsmallnb_percentage_percperc,
    bignbpercent_percperc,smallnbpercent_percperc,decimalnumbers_toshow_withoutrenderer_inpercentage_percperc,
    is_negativenb_accepted_percperc,is_float_accepted_percperc

    ){
    if (value == null || // value == '' ||
    /^[-+]?(\s*\d+(\.\d+)?)\s*%$/.test(value.toString().trim()) || // for example 14.65%  "14.65 %"  
    /^[-+]?(\s*\d+(,\d+)?)\s*%$/.test(value.toString().trim()) || // for example 14,65%   "14,65 %"
    
    /^[-+]?(\s*\d+(\.\d+)?)\s*$/.test(value.toString().trim()) || // for example 14.65  "14.65 "  
    /^[-+]?(\s*\d+(,\d+)?)\s*$/.test(value.toString().trim()) // for example 14,65   "14,65 "
  ) {
    //////////console.log('it returns true in percentage validator')             
    callback(true)              
  } else {
    //////////console.log('we are in callback false percentage validator')
    callback(false);
  }
        }


  export function afterValidatefct_percentage(isValid, oldvalue, row, prop, source,hot,commentsPlugin,
    
    
    decimalSeparator,userLocale,
    //navigator_language,userTimeZone,usTimeZones,
    afterdigit_percentage_percperc,smallafterdigit_percentage_percperc,afterdigitsmallnb_percentage_percperc,
    bignbpercent_percperc,smallnbpercent_percperc,decimalnumbers_toshow_withoutrenderer_inpercentage_percperc,
    is_negativenb_accepted_percperc,is_float_accepted_percperc,

    display_plus_sign_in_the_start,setNotification

    
    ){      
        //////////console.log(isValid)
        //////////console.log(oldvalue)
        //////////console.log(source)
          ////////console.log('we are inside aftervalidate prop==2')
          if (isValid && oldvalue == null ) {
            ////////console.log('condition percentage 1')
            ////////console.log('we are inside afterValidate percentage value==null')
            ////////console.log('COULD END HERE')
            
            /*
            setTimeout(() => {
              commentsPlugin.removeCommentAtCell(row,prop);
            }, 100);
            */

          } else if (isValid && oldvalue !== undefined && typeof oldvalue === 'string'){
            if(Math.abs(Number(oldvalue.toString().replace('%','').toString().replace(',','.').toString().replace(/\s+/g, '').toString().trim()))>bignbpercent_percperc){
              ////////console.log('condition percentage 1,2')
              ////////console.log('if the number is too big')
              //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
              commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'limit_autor','fr-FR',userLocale,decimalSeparator))
              setNotification({
                message: comments_messages(oldvalue,'limit_autor','fr-FR',userLocale,decimalSeparator),
                status: 'error',
                autoDismissTimeout: 3000, // Set your desired timeout
                lengthscreen:4,
                triggerNotification: Math.random()// Trigger when message is present
              });
              hot.setDataAtCell(row, prop,'','my_source_empty_percentage')
            } else if (Math.abs(Number(oldvalue.toString().replace('%','').toString().replace(',','.').toString().replace(/\s+/g, '').toString().trim())  ) <smallnbpercent_percperc) {
              ////////console.log('condition percentage 1,35')
              ////////console.log('if the number is too small')
              //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
              //hot.setDataAtCell(row, prop,0,'my_source_empty_percentage')
              hot.setDataAtCell(row, prop,0,'my_source_convertitto_0')

              // to view later  
            } else if(/^[-+]?(\s*\d+)\s*%$/.test(oldvalue.toString().trim())){
              ////////console.log('if the value is integer and with %')
              ////////console.log('condition percentage 1,5')
              if((/\s+%$/.test(oldvalue.toString().trim()) || /^[-+]\s/.test(oldvalue.toString().trim())  ) ){ 
              // condition for removing leading zerors if((/\s+%$/.test(oldvalue.toString().trim()) || /^[-+]\s/.test(oldvalue.toString().trim()) || /^(\+|\-)?0+/.test(oldvalue.toString().trim())  ) ){ 
                ////////console.log('condition percentage 1,5.1')
                // removing leading zerors hot.setDataAtCell(row, prop, oldvalue.toString().replace(/\s+/g, '').toString().trim().replace(/^(\+|\-)?0+/, '$1'),'my_source_removewhitespacesign_percentage')
                hot.setDataAtCell(row, prop, oldvalue.toString().replace(/\s+/g, '').toString().trim(),'my_source_removewhitespacesign_percentage')
                commentsPlugin.removeCommentAtCell(row, prop);
              } else {
                if(Number(oldvalue.toString().replace('%','').toString().trim())<0 && is_negativenb_accepted_percperc==false){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'refuse_negative','fr-FR',userLocale,decimalSeparator))
                    setNotification({
                      message: comments_messages(oldvalue,'refuse_negative','fr-FR',userLocale,decimalSeparator),
                      status: 'error',
                      autoDismissTimeout: 3000, // Set your desired timeout
                      lengthscreen:4,
                      triggerNotification: Math.random()// Trigger when message is present
                    });
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                } else {
                  if(Number.isInteger(Number(oldvalue.toString().replace('%','').toString().trim()))==false && is_float_accepted_percperc==false ){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'refuse_float','fr-FR',userLocale,decimalSeparator))
                    setNotification({
                      message: comments_messages(oldvalue,'refuse_float','fr-FR',userLocale,decimalSeparator),
                      status: 'error',
                      autoDismissTimeout: 3000, // Set your desired timeout
                      lengthscreen:4,
                      triggerNotification: Math.random()// Trigger when message is present
                    });
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                  } else {
                    if(/^([+-]?)0+(?=\d)/.test(oldvalue.toString().trim().replace('%','')) ){
                      hot.setDataAtCell(row, prop,oldvalue.toString().trim().replace(/^([+-]?)0+(?=\d)/, '$1'), 'my_source_removewhitespacesign');
                    
                    } else {
                      if(Number(oldvalue.toString().replace('%','').toString().trim())>0 && display_plus_sign_in_the_start==true){
                        if(oldvalue.toString().trim().includes("+")){
                           ////////console.log('COULD END HERE')
                           commentsPlugin.removeCommentAtCell(row,prop);
                        } else {
                          hot.setDataAtCell(row, prop, '+' + oldvalue.toString().trim(), 'my_source_removewhitespacesign');
                        }
                      //alert('we set must + sign')
                      } else {
                        if(oldvalue.toString().trim().includes("+") && display_plus_sign_in_the_start==false){
                          hot.setDataAtCell(row, prop, oldvalue.toString().trim().replace("+",''), 'my_source_removewhitespacesign');
                        } else {               
                       ////////console.log('do nothing')
                      ////////console.log('COULD END HERE')
                      commentsPlugin.removeCommentAtCell(row,prop);
                  }
                  }
                    }
              }    
              }
              }
            } else if (/^[-+]?\s*\d+\s*$/.test(oldvalue.toString().trim())){
              ////////console.log('if the value is integer and without %')
              ////////console.log('condition percentage 1,7')
              if((/^[-+]\s/.test(oldvalue.toString().trim()) )){ 
                ////////console.log('condition percentage 1,7.1')
                hot.setDataAtCell(row, prop, oldvalue.toString().replace(/\s+/g, '').toString().trim()+'%','my_source_removewhitespacesign_percentage')
                commentsPlugin.removeCommentAtCell(row, prop);
              } else {
                if(Number(oldvalue.toString().replace('%','').toString().trim())<0 && is_negativenb_accepted_percperc==false){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'refuse_negative','fr-FR',userLocale,decimalSeparator))
                    setNotification({
                      message: comments_messages(oldvalue,'refuse_negative','fr-FR',userLocale,decimalSeparator),
                      status: 'error',
                      autoDismissTimeout: 3000, // Set your desired timeout
                      lengthscreen:4,
                      triggerNotification: Math.random()// Trigger when message is present
                    });
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                } else {
                  if(Number.isInteger(Number(oldvalue.toString().replace('%','').toString().trim()))==false && is_float_accepted_percperc==false ){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'refuse_float','fr-FR',userLocale,decimalSeparator))
                    setNotification({
                      message: comments_messages(oldvalue,'refuse_float','fr-FR',userLocale,decimalSeparator),
                      status: 'error',
                      autoDismissTimeout: 3000, // Set your desired timeout
                      lengthscreen:4,
                      triggerNotification: Math.random()// Trigger when message is present
                    });
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                  } else {
                    if(/^([+-]?)0+(?=\d)/.test(oldvalue.toString().trim().replace('%','')) ){
                      hot.setDataAtCell(row, prop,oldvalue.toString().trim().replace(/^([+-]?)0+(?=\d)/, '$1'), 'my_source_removewhitespacesign');
                    } else {
                ////////console.log('condition percentage 1,7.2');
                ////////console.log('could end here');
                commentsPlugin.removeCommentAtCell(row, prop);
                  }
                }
                }
              }

            } else if( /^[-+]?(\s*\d+(\.\d+)?)\s*$/.test(oldvalue.toString().trim())){
              ////////console.log('condition percentage 2.1')
              if(decimalSeparator=='.'){    
                ////////console.log('condition percentage 2.1.1')            
                  ////////console.log(' "+ 15.63" or "12.36" or "19"  and without % , so we add it and we remove whitespaces')
                  //hot.setDataAtCell(row, prop, oldvalue.toString().replace(/\s+/g, '').toString().trim()+'%')
                  hot.setDataAtCell(row, prop, Number(oldvalue.toString().replace(/\s+/g, '').toString().trim()).toFixed(decimalnumbers_toshow_withoutrenderer_inpercentage_percperc).toString().replace(/\.?0+$/, "")+'%','my_source_removewhitespacesign_percentage')

                  commentsPlugin.removeCommentAtCell(row, prop);

              } else if (decimalSeparator==','){
                ////////console.log('condition percentage 2.1.2')            
                  ////////console.log('may cause problem')
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + oldvalue + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + oldvalue.toString().replace(/\s+/g, '').toString().trim().replace('.', ',') + " est correct (virguale à la place du point)");
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + oldvalue + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + oldvalue.toString().replace(/\s+/g, '').toString().trim().replace('.', ',') + " est correct (virguale à la place du point)");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'val_try_to_fix_comma_instead_dot','fr-FR',userLocale,decimalSeparator))
                  setNotification({
                    message: comments_messages(oldvalue,'val_try_to_fix_comma_instead_dot','fr-FR',userLocale,decimalSeparator),
                    status: 'error',
                    autoDismissTimeout: 4500, // Set your desired timeout
                    lengthscreen:4,
                    triggerNotification: Math.random()// Trigger when message is present
                  });
                  hot.setDataAtCell(row, prop, '', 'my_source_empty_percentage');
              }
            } else if(/^[-+]?(\s*\d+(,\d+)?)\s*$/.test(oldvalue.toString().trim())){
              ////////console.log('condition percentage 2.2')
              if(decimalSeparator=='.'){
                ////////console.log('condition percentage 2.2.1')
                  ////////console.log('may cause problem')
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + oldvalue + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + oldvalue.toString().replace(/\s+/g, '').toString().trim().replace(',', '.') + " est correct (point à la place de la virgule)");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'val_try_to_fix_dot_instead_comma','fr-FR',userLocale,decimalSeparator))
                  setNotification({
                    message: comments_messages(oldvalue,'val_try_to_fix_dot_instead_comma','fr-FR',userLocale,decimalSeparator),
                    status: 'error',
                    autoDismissTimeout: 4500, // Set your desired timeout
                    lengthscreen:4,
                    triggerNotification: Math.random()// Trigger when message is present
                  });
                  hot.setDataAtCell(row, prop, '', 'my_source_empty_percentage');
              } else if (decimalSeparator==','){
                ////////console.log('condition percentage 2.2.2')
                ////////console.log(' "+ 15,63" or "12,36" or "19"  and without % , so we add it and we remove whitespaces')
                hot.setDataAtCell(row, prop, Number(oldvalue.toString().replace(/\s+/g, '').toString().trim().replace(',','.')).toFixed(decimalnumbers_toshow_withoutrenderer_inpercentage_percperc).toString().replace(/\.?0+$/, "").toString().replace('.',',')+'%','my_source_removewhitespacesign_percentage')
                commentsPlugin.removeCommentAtCell(row, prop);

              }
            } else if (/^[-+]?(\s*\d+(\.\d+)?)\s*%$/.test(oldvalue.toString().trim())){
              ////////console.log('condition percentage 2.3')
              if(decimalSeparator=='.'){
                ////////console.log('condition percentage 2.3.1')
                if((/\s+%$/.test(oldvalue.toString().trim()) || /^[-+]\s/.test(oldvalue.toString().trim()) )){ 
                  ////////console.log('condition percentage 2.3.1.1')
                  hot.setDataAtCell(row, prop, Number(oldvalue.toString().replace(/\s+/g, '').toString().trim().replace('%','')).toFixed(decimalnumbers_toshow_withoutrenderer_inpercentage_percperc).toString().replace(/\.?0+$/, "")+'%','my_source_removewhitespacesign_percentage' )
                  commentsPlugin.removeCommentAtCell(row, prop);
                 } else {
                  if( (oldvalue.toString().replace('%','').split('.')[1] || '').length>decimalnumbers_toshow_withoutrenderer_inpercentage_percperc ) {
                    ////////console.log('condition percentage 2.3.1.1.5')
                    if( Math.abs(Number(oldvalue.toString().replace('%','')))<smallafterdigit_percentage_percperc ){ // smallafterdigit_percentage_percperc like 0.01 in case of 2
                      hot.setDataAtCell(row, prop,0,'my_source_convertitto_0');
                      commentsPlugin.removeCommentAtCell(row, prop);
                    } else {                  
                    hot.setDataAtCell(row, prop, Number(oldvalue.toString().replace('%','')).toFixed(decimalnumbers_toshow_withoutrenderer_inpercentage_percperc).toString().replace(/\.?0+$/, "")+'%','my_source_removegreaterdecimalnumbers_percentage' )
                    commentsPlugin.removeCommentAtCell(row, prop); 
                  }

                  } else {
                  if(Number(oldvalue.toString().replace('%','').toString().trim())<0 && is_negativenb_accepted_percperc==false){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'refuse_negative','fr-FR',userLocale,decimalSeparator))
                    setNotification({
                      message: comments_messages(oldvalue,'refuse_negative','fr-FR',userLocale,decimalSeparator),
                      status: 'error',
                      autoDismissTimeout: 3000, // Set your desired timeout
                      lengthscreen:4,
                      triggerNotification: Math.random()// Trigger when message is present
                    });
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                } else {
                  if(Number.isInteger(Number(oldvalue.toString().replace('%','').toString().trim()))==false && is_float_accepted_percperc==false ){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'refuse_float','fr-FR',userLocale,decimalSeparator))
                    setNotification({
                      message: comments_messages(oldvalue,'refuse_float','fr-FR',userLocale,decimalSeparator),
                      status: 'error',
                      autoDismissTimeout: 3000, // Set your desired timeout
                      lengthscreen:4,
                      triggerNotification: Math.random()// Trigger when message is present
                    });
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                  } else {
                    if(/^([+-]?)0+(?=\d)/.test(oldvalue.toString().trim().replace('%','')) ){
                      hot.setDataAtCell(row, prop,oldvalue.toString().trim().replace(/^([+-]?)0+(?=\d)/, '$1'), 'my_source_removewhitespacesign');
                    } else {
                      if(Number(oldvalue.toString().replace('%','').toString().trim())>0 && display_plus_sign_in_the_start==true){
                        if(oldvalue.toString().trim().includes("+")){
                           ////////console.log('COULD END HERE')
                           commentsPlugin.removeCommentAtCell(row,prop);
                        } else {
                          hot.setDataAtCell(row, prop, '+' + oldvalue.toString().trim(), 'my_source_removewhitespacesign');
                        }
                      //alert('we set must + sign')
                      } else {
                        if(oldvalue.toString().trim().includes("+") && display_plus_sign_in_the_start==false){
                          hot.setDataAtCell(row, prop, oldvalue.toString().trim().replace("+",''), 'my_source_removewhitespacesign');
                        } else {               
                       ////////console.log('do nothing')
                      ////////console.log('COULD END HERE')
                      commentsPlugin.removeCommentAtCell(row,prop);
                  }
                  }
                    }
                }
                }
                }
                }
                } else if(decimalSeparator==','){
                  ////////console.log('condition percentage 2.3.2')
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + oldvalue + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + oldvalue.toString().replace(/\s+/g, '').toString().trim().replace('.', ',') + " est correct (virgule à la place du point)");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'val_try_to_fix_comma_instead_dot','fr-FR',userLocale,decimalSeparator))
                  setNotification({
                    message: comments_messages(oldvalue,'val_try_to_fix_comma_instead_dot','fr-FR',userLocale,decimalSeparator),
                    status: 'error',
                    autoDismissTimeout: 4500, // Set your desired timeout
                    lengthscreen:4,
                    triggerNotification: Math.random()// Trigger when message is present
                  });
                  hot.setDataAtCell(row, prop, '', 'my_source_empty_percentage');
                }
              } else if (/^[-+]?(\s*\d+(,\d+)?)\s*%$/.test(oldvalue.toString().trim())){
                ////////console.log('condition percentage 2.4')
                ////////console.log('aa')
                if(decimalSeparator=='.'){
                  ////////console.log('condition percentage 2.4.1')
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + oldvalue + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + oldvalue.toString().replace(/\s+/g, '').toString().trim().replace(',', '.') + " est correct (point à la place de la virgule)");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'val_try_to_fix_dot_instead_comma','fr-FR',userLocale,decimalSeparator))
                  setNotification({
                    message: comments_messages(oldvalue,'val_try_to_fix_dot_instead_comma','fr-FR',userLocale,decimalSeparator),
                    status: 'error',
                    autoDismissTimeout: 4500, // Set your desired timeout
                    lengthscreen:4,
                    triggerNotification: Math.random()// Trigger when message is present
                  });
                  hot.setDataAtCell(row, prop, '', 'my_source_empty_percentage');
                } else if (decimalSeparator==','){
                  ////////console.log('condition percentage 2.4.2')
                    if((/\s+%$/.test(oldvalue.toString().trim()) || /^[-+]\s/.test(oldvalue.toString().trim()) )){ 
                      ////////console.log('condition percentage 2.4.2.1')
                       hot.setDataAtCell(row, prop, Number(oldvalue.toString().replace(/\s+/g, '').toString().trim().replace('%','').toString().replace(',','.')).toFixed(decimalnumbers_toshow_withoutrenderer_inpercentage_percperc).toString().replace(/\.?0+$/, "").toString().replace('.',',')+'%','my_source_removewhitespacesign_percentage' )
                       commentsPlugin.removeCommentAtCell(row, prop);
                     } else {
                       if( (oldvalue.toString().replace('%','').toString().replace(',','.').split('.')[1] || '').length>decimalnumbers_toshow_withoutrenderer_inpercentage_percperc ){
                          ////////console.log('condition percentage 2.4.2.1.5')
                             //////////console.log(oldvalue)
                            //////////console.log(Number(oldvalue.toString().replace('%','').toString().replace(',','.'))<0 )
                            //if( Math.abs(Number(oldvalue.toString().replace('%','').toString().replace(',','.'))) < smallafterdigit_percentage_percperc ){
                            //  ////////console.log('cons1.1')
                            //  hot.setDataAtCell(row, prop, Number(oldvalue.toString().trim().replace('%','').toString().replace(',','.')).toFixed(afterdigitsmallnb_percentage_percperc).toString().replace(/\.?0+$/, "").toString().replace('.',',')+'%','my_source_removegreaterdecimalnumbers_percentage' )
                            //  commentsPlugin.removeCommentAtCell(row, prop);
                           //   } else {
                            if( Math.abs(Number(oldvalue.toString().replace('%','').toString().replace(',','.') ))<smallafterdigit_percentage_percperc ){ // smallafterdigit_percentage_percperc like 0.01 in case of 2
                              hot.setDataAtCell(row, prop,0,'my_source_convertitto_0');
                              commentsPlugin.removeCommentAtCell(row, prop);
                            } else {
                                ////////console.log('cons1.2')
                                hot.setDataAtCell(row, prop, Number(oldvalue.toString().trim().replace('%','').toString().replace(',','.')).toFixed(decimalnumbers_toshow_withoutrenderer_inpercentage_percperc).toString().replace(/\.?0+$/, "").toString().replace('.',',')+'%','my_source_removegreaterdecimalnumbers_percentage' )
                                commentsPlugin.removeCommentAtCell(row, prop);
                            }
                                // }

                       } else {
                        if(Number(oldvalue.toString().replace('%','').toString().replace(',','.').toString().trim())<0 && is_negativenb_accepted_percperc==false){
                          commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'refuse_negative','fr-FR',userLocale,decimalSeparator))
                          setNotification({
                            message: comments_messages(oldvalue,'refuse_negative','fr-FR',userLocale,decimalSeparator),
                            status: 'error',
                            autoDismissTimeout: 3000, // Set your desired timeout
                            lengthscreen:4,
                            triggerNotification: Math.random()// Trigger when message is present
                          });
                          hot.setDataAtCell(row, prop, '', 'my_source_empty');
                            } else {
                              if(Number.isInteger(Number(oldvalue.toString().replace('%','').toString().replace(',','.').toString().trim()))==false && is_float_accepted_percperc==false ){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'refuse_float','fr-FR',userLocale,decimalSeparator))
                    setNotification({
                      message: comments_messages(oldvalue,'refuse_float','fr-FR',userLocale,decimalSeparator),
                      status: 'error',
                      autoDismissTimeout: 3000, // Set your desired timeout
                      lengthscreen:4,
                      triggerNotification: Math.random()// Trigger when message is present
                    });
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                  } else {
                    if(/^([+-]?)0+(?=\d)/.test(oldvalue.toString().trim().replace('%','')) ){
                      hot.setDataAtCell(row, prop,oldvalue.toString().trim().replace(/^([+-]?)0+(?=\d)/, '$1'), 'my_source_removewhitespacesign');
                    } else {
                      if(Number(oldvalue.toString().replace('%','').toString().replace(',','.').toString().trim())>0 && display_plus_sign_in_the_start==true){
                        if(oldvalue.toString().trim().includes("+")){
                           ////////console.log('COULD END HERE')
                           commentsPlugin.removeCommentAtCell(row,prop);
                        } else {
                          hot.setDataAtCell(row, prop, '+' + oldvalue.toString().trim(), 'my_source_removewhitespacesign');
                        }
                      //alert('we set must + sign')
                      } else {
                        if(oldvalue.toString().trim().includes("+") && display_plus_sign_in_the_start==false){
                          hot.setDataAtCell(row, prop, oldvalue.toString().trim().replace("+",''), 'my_source_removewhitespacesign');
                        } else {               
                       ////////console.log('do nothing')
                      ////////console.log('COULD END HERE')
                      commentsPlugin.removeCommentAtCell(row,prop);
                  }
                  }
                    }
                      }
                      }
                      }

                   }  
                }
           }
           } else if (oldvalue=='%'){
            //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + oldvalue + "' n'est pas valide ");
            ////////console.log('condition percentage 2.%')
            hot.setDataAtCell(row, prop,'','my_source_empty_percentage')
           } else if ( oldvalue =='') {
            ////////console.log('condition percentage 3')
            ////////console.log('do nothing could end here')
            } else {
              ////////console.log('condition percentage 4')
            //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + oldvalue + "' n'est pas valide ");
            if(source!=='Autofill.fill' && (source!=='CopyPaste.paste' || getInputValue_copypastelength()==false) ){
              commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'percentage_no_valid_isvalidfalse_end','fr-FR',userLocale,decimalSeparator))
              setNotification({
                message: comments_messages(oldvalue,'percentage_no_valid_isvalidfalse_end','fr-FR',userLocale,decimalSeparator),
                status: 'error',
                autoDismissTimeout: 3000, // Set your desired timeout
                lengthscreen:4,
                triggerNotification: Math.random()// Trigger when message is present
              });
            }
            hot.setDataAtCell(row, prop,'','my_source_empty_percentage')

            ////////console.log('do nothing could end here')
            ////////console.log('removes')
          }
  }


/*  
  ################################################################################"
  ################################################################################
  ######### put it in Columns_data_for_Validator_renderes.js file : ##############
  ################################################################################"
  ################################################################################"

  else if(i>7){  //editable of course
    var dd={ data:i,
      className: "htRight htMiddle" ,
        editor: PercentageEditor,
        validator: function (value, callback) { // validator of percentage
          const thisrow = this.row;
          const thiscol = this.col;
        
          if(thisrow>5){ // editable
            validator_percentage(value, callback,
              
decimalSeparator2,userLocale2,
//navigator_language,userTimeZone,usTimeZones,
afterdigit_percentage_percperc,smallafterdigit_percentage_percperc,afterdigitsmallnb_percentage_percperc,
bignbpercent_percperc,smallnbpercent_percperc,decimalnumbers_toshow_withoutrenderer_inpercentage_percperc,
is_negativenb_accepted_percperc,is_float_accepted_percperc

              
              )
        }
        },
        renderer: function (instance, td, row, col, prop, oldvalue, cellProperties) { // renderer of integers
        
          if(row>5){ // editable
            renderer_percentage(instance, td, row, col, prop, oldvalue, cellProperties,
              
decimalSeparator2,userLocale2,
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

  ################################################################################"
  ################################################################################
  ##################### put it in afterValidatefct.js file :######################
  ################################################################################"

      else if(prop>7){ // afterValidate of percentage,  editable the index later 
        afterValidatefct_percentage(isValid, oldvalue, row, prop, source,hot,commentsPlugin,
          
decimalSeparator,userLocale,
//navigator_language,userTimeZone,usTimeZones,
afterdigit_percentage_percperc,smallafterdigit_percentage_percperc,afterdigitsmallnb_percentage_percperc,
bignbpercent_percperc,smallnbpercent_percperc,decimalnumbers_toshow_withoutrenderer_inpercentage_percperc,
is_negativenb_accepted_percperc,is_float_accepted_percperc

          )
  }



*/