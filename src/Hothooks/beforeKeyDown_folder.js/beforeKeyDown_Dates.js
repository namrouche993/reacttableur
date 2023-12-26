//is_date_exist==false

import 
{ 
  use_en_time,
  userTimeZone,usTimeZones,
  getInputValue_condition_split2,
  setInputValue_condition_split2
}
from '../../initials_inputs.js'


import {startsWithElement} from '../../Tools/startsWithElement.js'


export function beforeKeyDown_Dates_fct(event,hot,
  userLocale,
  decimalSeparator,
  navigator_language,
  //condition_split
  ) {  // editable the 2 indexx later inside 
//////console.log('condition_split : ')
//////console.log(getInputValue_condition_split2())
try {
  
  let condition_split=getInputValue_condition_split2();
    if(navigator_language=='en-US' && startsWithElement(usTimeZones,userTimeZone) && use_en_time){
        var dateformatlanguage = 'mm/dd/yyyy'; // 12/31/1990
        var splitdate='/';
        //var [monthdate,daydate, yeardate] = dateformatlanguage.split(splitdate);
      
          var betweensplit_dot = hot.getActiveEditor().getValue().split(".")
          var betweensplit_slash = hot.getActiveEditor().getValue().split("/")
          var betweensplit_hyphen = hot.getActiveEditor().getValue().split("-")
      
         // //////console.log(event.key)
          if( !isNaN(Number(event.key)) && (typeof condition_split=='undefined' || condition_split==true)){
            var betweensplit_dot = hot.getActiveEditor().getValue().split(".");
            betweensplit_dot[1]=betweensplit_dot[1]+event.key;
      
            var betweensplit_slash = hot.getActiveEditor().getValue().split("/");
            betweensplit_slash[1]=betweensplit_slash[1]+event.key;
      
            var betweensplit_hyphen = hot.getActiveEditor().getValue().split("-");
            betweensplit_hyphen[1]=betweensplit_hyphen[1]+event.key;
      
          
        if( ( (hot.getActiveEditor().getValue().length==1 && hot.getActiveEditor().getValue().toString()!=' ') && !isNaN(Number(event.key)) ) || (hot.getActiveEditor().getValue().length==4 && !isNaN(Number(event.key))) || (Number(betweensplit_dot[1])>9 && Number(betweensplit_dot[1])<100) || (Number(betweensplit_slash[1])>9 && Number(betweensplit_slash[1])<100) || (Number(betweensplit_hyphen[1])>9 && Number(betweensplit_hyphen[1])<100)  ){
        if( !isNaN(Number(event.key)) && (hot.getActiveEditor().getValue().split(".").length-1<2 && hot.getActiveEditor().getValue().split("/").length-1<2 && hot.getActiveEditor().getValue().split("-").length-1<2 ) ){
          hot.getActiveEditor().setValue(hot.getActiveEditor().getValue() + event.key + splitdate);
          event.stopImmediatePropagation();
          event.preventDefault();
        }
      }} else if (event.key=='.' || event.key=='/' || event.key=='-' ){
         //condition_split=false;
         setInputValue_condition_split2(false)

         if(hot.getActiveEditor().getValue().substring(hot.getActiveEditor().getValue().length - 1)==splitdate){ 
          hot.getActiveEditor().setValue(hot.getActiveEditor().getValue().substring(0,hot.getActiveEditor().getValue().length - 1)+event.key)
          event.stopImmediatePropagation();
          event.preventDefault();
        }
      }
      }
       else if(navigator_language=='ko-KR' || navigator_language=='hu-HU'){ // ######################################################################
        ////////console.log('we are in korean')
        var dateformatlanguage = 'yyyy.mm.dd' // 1990.12.31
        var splitdate='.';
        //var [yeardate,monthdate,daydate] = dateformatlanguage.split(splitdate);
      
      
          var betweensplit_dot = hot.getActiveEditor().getValue().split(".")
          var betweensplit_slash = hot.getActiveEditor().getValue().split("/")
          var betweensplit_hyphen = hot.getActiveEditor().getValue().split("-")
      
          ////////console.log(event.key)
          if( !isNaN(Number(event.key)) && (typeof condition_split=='undefined' || condition_split==true)){
            var betweensplit_dot = hot.getActiveEditor().getValue().split(".");
            betweensplit_dot[1]=betweensplit_dot[1]+event.key;
      
            var betweensplit_slash = hot.getActiveEditor().getValue().split("/");
            betweensplit_slash[1]=betweensplit_slash[1]+event.key;
      
            var betweensplit_hyphen = hot.getActiveEditor().getValue().split("-");
            betweensplit_hyphen[1]=betweensplit_hyphen[1]+event.key;
      
          
        if( ( (hot.getActiveEditor().getValue().length==3 ) && !isNaN(Number(event.key)) ) || (hot.getActiveEditor().getValue().length==6 && !isNaN(Number(event.key))) || (Number(betweensplit_dot[1])>9 && Number(betweensplit_dot[1])<100) || (Number(betweensplit_slash[1])>9 && Number(betweensplit_slash[1])<100) || (Number(betweensplit_hyphen[1])>9 && Number(betweensplit_hyphen[1])<100)  ){
        if( !isNaN(Number(event.key)) && (hot.getActiveEditor().getValue().split(".").length-1<2 && hot.getActiveEditor().getValue().split("/").length-1<2 && hot.getActiveEditor().getValue().split("-").length-1<2 ) ){
          hot.getActiveEditor().setValue(hot.getActiveEditor().getValue() + event.key + splitdate);
          event.stopImmediatePropagation();
          event.preventDefault();
        }
      }} else if (event.key=='.' || event.key=='/' || event.key=='-' ){
         //condition_split=false;
         setInputValue_condition_split2(false)

         if(hot.getActiveEditor().getValue().substring(hot.getActiveEditor().getValue().length - 1)==splitdate){ 
          hot.getActiveEditor().setValue(hot.getActiveEditor().getValue().substring(0,hot.getActiveEditor().getValue().length - 1)+event.key)
          event.stopImmediatePropagation();
          event.preventDefault();
        }
      }
      
      
      } 
      else if(navigator_language=='ja-JP' || navigator_language=='ZH-CN'){ //  ######################################################################
        var dateformatlanguage = 'yyyy/mm/dd' // 1990/12/31
        var splitdate='/';
        //var [yeardate,monthdate,daydate] = dateformatlanguage.split(splitdate);
      
          var betweensplit_dot = hot.getActiveEditor().getValue().split(".")
          var betweensplit_slash = hot.getActiveEditor().getValue().split("/")
          var betweensplit_hyphen = hot.getActiveEditor().getValue().split("-")
      
          ////////console.log(event.key)
          if( !isNaN(Number(event.key)) && (typeof condition_split=='undefined' || condition_split==true)){
            var betweensplit_dot = hot.getActiveEditor().getValue().split(".");
            betweensplit_dot[1]=betweensplit_dot[1]+event.key;
      
            var betweensplit_slash = hot.getActiveEditor().getValue().split("/");
            betweensplit_slash[1]=betweensplit_slash[1]+event.key;
      
            var betweensplit_hyphen = hot.getActiveEditor().getValue().split("-");
            betweensplit_hyphen[1]=betweensplit_hyphen[1]+event.key;
      
          
        if( ( (hot.getActiveEditor().getValue().length==3 ) && !isNaN(Number(event.key)) ) || (hot.getActiveEditor().getValue().length==6 && !isNaN(Number(event.key))) || (Number(betweensplit_dot[1])>9 && Number(betweensplit_dot[1])<100) || (Number(betweensplit_slash[1])>9 && Number(betweensplit_slash[1])<100) || (Number(betweensplit_hyphen[1])>9 && Number(betweensplit_hyphen[1])<100)  ){
        if( !isNaN(Number(event.key)) && (hot.getActiveEditor().getValue().split(".").length-1<2 && hot.getActiveEditor().getValue().split("/").length-1<2 && hot.getActiveEditor().getValue().split("-").length-1<2 ) ){
          hot.getActiveEditor().setValue(hot.getActiveEditor().getValue() + event.key + splitdate);
          event.stopImmediatePropagation();
          event.preventDefault();
        }
      }} else if (event.key=='.' || event.key=='/' || event.key=='-' ){
         //condition_split=false;
         setInputValue_condition_split2(false)

         if(hot.getActiveEditor().getValue().substring(hot.getActiveEditor().getValue().length - 1)==splitdate){ 
          hot.getActiveEditor().setValue(hot.getActiveEditor().getValue().substring(0,hot.getActiveEditor().getValue().length - 1)+event.key)
          event.stopImmediatePropagation();
          event.preventDefault();
        }
      }
      
      } 
      else if(navigator_language=='en-CA'){  // ######################################################################
        var dateformatlanguage = 'yyyy-mm-dd' // 1990-12-31
        var splitdate='-';
        //var [yeardate,monthdate,daydate] = dateformatlanguage.split(splitdate);
      
          var betweensplit_dot = hot.getActiveEditor().getValue().split(".")
          var betweensplit_slash = hot.getActiveEditor().getValue().split("/")
          var betweensplit_hyphen = hot.getActiveEditor().getValue().split("-")
      
          ////////console.log(event.key)
          if( !isNaN(Number(event.key)) && (typeof condition_split=='undefined' || condition_split==true)){
            var betweensplit_dot = hot.getActiveEditor().getValue().split(".");
            betweensplit_dot[1]=betweensplit_dot[1]+event.key;
      
            var betweensplit_slash = hot.getActiveEditor().getValue().split("/");
            betweensplit_slash[1]=betweensplit_slash[1]+event.key;
      
            var betweensplit_hyphen = hot.getActiveEditor().getValue().split("-");
            betweensplit_hyphen[1]=betweensplit_hyphen[1]+event.key;
      
          
        if( ( (hot.getActiveEditor().getValue().length==3 ) && !isNaN(Number(event.key)) ) || (hot.getActiveEditor().getValue().length==6 && !isNaN(Number(event.key))) || (Number(betweensplit_dot[1])>9 && Number(betweensplit_dot[1])<100) || (Number(betweensplit_slash[1])>9 && Number(betweensplit_slash[1])<100) || (Number(betweensplit_hyphen[1])>9 && Number(betweensplit_hyphen[1])<100)  ){
        if( !isNaN(Number(event.key)) && (hot.getActiveEditor().getValue().split(".").length-1<2 && hot.getActiveEditor().getValue().split("/").length-1<2 && hot.getActiveEditor().getValue().split("-").length-1<2 ) ){
          hot.getActiveEditor().setValue(hot.getActiveEditor().getValue() + event.key + splitdate);
          event.stopImmediatePropagation();
          event.preventDefault();
        }
      }} else if (event.key=='.' || event.key=='/' || event.key=='-' ){
         //condition_split=false;
         setInputValue_condition_split2(false)

         if(hot.getActiveEditor().getValue().substring(hot.getActiveEditor().getValue().length - 1)==splitdate){ 
          hot.getActiveEditor().setValue(hot.getActiveEditor().getValue().substring(0,hot.getActiveEditor().getValue().length - 1)+event.key)
          event.stopImmediatePropagation();
          event.preventDefault();
        }
      }
      
      
      
      }
       else if(navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR'){ // ######################################################################
        var dateformatlanguage = 'dd.mm.yyyy' // 12.31.1990
        var splitdate='.';
      
          var betweensplit_dot = hot.getActiveEditor().getValue().split(".")
          var betweensplit_slash = hot.getActiveEditor().getValue().split("/")
          var betweensplit_hyphen = hot.getActiveEditor().getValue().split("-")
      
        //  //////console.log(event.key)
          if( !isNaN(Number(event.key))){
            var betweensplit_dot = hot.getActiveEditor().getValue().split(".");
            betweensplit_dot[1]=betweensplit_dot[1]+event.key;
      
            var betweensplit_slash = hot.getActiveEditor().getValue().split("/");
            betweensplit_slash[1]=betweensplit_slash[1]+event.key;
      
            var betweensplit_hyphen = hot.getActiveEditor().getValue().split("-");
            betweensplit_hyphen[1]=betweensplit_hyphen[1]+event.key;
      
          
        if( ( (hot.getActiveEditor().getValue().length==1 && hot.getActiveEditor().getValue().toString()!=' ') && !isNaN(Number(event.key)) ) || (hot.getActiveEditor().getValue().length==4 && !isNaN(Number(event.key))) || (Number(betweensplit_dot[1])>9 && Number(betweensplit_dot[1])<100) || (Number(betweensplit_slash[1])>9 && Number(betweensplit_slash[1])<100) || (Number(betweensplit_hyphen[1])>9 && Number(betweensplit_hyphen[1])<100)  ){
        if( !isNaN(Number(event.key)) && (hot.getActiveEditor().getValue().split(".").length-1<2 && hot.getActiveEditor().getValue().split("/").length-1<2 && hot.getActiveEditor().getValue().split("-").length-1<2 ) ){
          hot.getActiveEditor().setValue(hot.getActiveEditor().getValue() + event.key + splitdate);
          event.stopImmediatePropagation();
          event.preventDefault();
        }
      }} else if (event.key=='.' || event.key=='/' || event.key=='-' ){
         if(hot.getActiveEditor().getValue().substring(hot.getActiveEditor().getValue().length - 1)==splitdate){ 
          hot.getActiveEditor().setValue(hot.getActiveEditor().getValue().substring(0,hot.getActiveEditor().getValue().length - 1)+event.key)
          event.stopImmediatePropagation();
          event.preventDefault();
        }
      }
      
      }
       else {        // ############################################################################################################################################
        // european and other formats
        var dateformatlanguage = 'dd/mm/yyyy' // 31/12/1990
        var splitdate='/';
        ////////console.log('condition_split in beforekey start : ')
        // //////console.log(condition_split)
      
        //var [daydate,monthdate,yeardate] = dateformatlanguage.split(splitdate);
          ////console.log('hot.getActiveEditor')
          ////console.log(hot.getActiveEditor())
          var betweensplit_dot = hot.getActiveEditor().getValue().split(".")
          var betweensplit_slash = hot.getActiveEditor().getValue().split("/")
          var betweensplit_hyphen = hot.getActiveEditor().getValue().split("-")
      
          ////////console.log(event.key)
          if( !isNaN(Number(event.key)) && (typeof condition_split=='undefined' || condition_split==true)){
            var betweensplit_dot = hot.getActiveEditor().getValue().split(".");
            betweensplit_dot[1]=betweensplit_dot[1]+event.key;
      
            var betweensplit_slash = hot.getActiveEditor().getValue().split("/");
            betweensplit_slash[1]=betweensplit_slash[1]+event.key;
      
            var betweensplit_hyphen = hot.getActiveEditor().getValue().split("-");
            betweensplit_hyphen[1]=betweensplit_hyphen[1]+event.key;
      
          
        if( ( (hot.getActiveEditor().getValue().length==1 && hot.getActiveEditor().getValue().toString()!=' ') && !isNaN(Number(event.key)) ) || (hot.getActiveEditor().getValue().length==4 && !isNaN(Number(event.key))) || (Number(betweensplit_dot[1])>9 && Number(betweensplit_dot[1])<100) || (Number(betweensplit_slash[1])>9 && Number(betweensplit_slash[1])<100) || (Number(betweensplit_hyphen[1])>9 && Number(betweensplit_hyphen[1])<100)  ){
        if( !isNaN(Number(event.key)) && (hot.getActiveEditor().getValue().split(".").length-1<2 && hot.getActiveEditor().getValue().split("/").length-1<2 && hot.getActiveEditor().getValue().split("-").length-1<2 ) ){
          hot.getActiveEditor().setValue(hot.getActiveEditor().getValue() + event.key + splitdate);
          event.stopImmediatePropagation();
          event.preventDefault();
        }
      }} else if (event.key=='.' || event.key=='/' || event.key=='-' ){
         //condition_split=false;
         setInputValue_condition_split2(false)

         if(hot.getActiveEditor().getValue().substring(hot.getActiveEditor().getValue().length - 1)==splitdate){ 
          hot.getActiveEditor().setValue(hot.getActiveEditor().getValue().substring(0,hot.getActiveEditor().getValue().length - 1)+event.key)
          event.stopImmediatePropagation();
          event.preventDefault();
        }
      }
         ////////console.log(condition_split)
      
      }
    } catch (error) {
      //console.log('Error : ' + 'Maybe viewer with editing dates' + error)
    }      
}
