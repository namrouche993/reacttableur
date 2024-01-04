import 
{ 
  userTimeZone,usTimeZones, //is_date_exist==false
  getInputValue_copypastelength,
  setInputValue_copypastelength
}
from '../initials_inputs.js'

export function beforeChangeFct(changes,source,hot,commentsPlugin){
    //const hot = otherArgs[otherArgs.length - 1];
    //console.log('beforeChange triggered')
    //console.log(changes)
    //console.log(source)
    if( (source=='CopyPaste.paste' && changes.length>30) || (source=='dataatrowprop_received_from_socket_server_event' && changes.length>30) ){
      setInputValue_copypastelength(true);
    }
    //console.log('beforechange after if souce copypaste ')
    //alert('beforechange')
    changes.forEach(([row, prop, oldValue, newValue]) => {
      ////console.log('changes foreach in beforechange')

      if (oldValue == '' && newValue == null  || oldValue == '' && newValue == '' && source == 'UndoRedo.undo' 
      ||  oldValue == ' ' && newValue == null  || oldValue == ' ' && newValue == ' ' && source == 'UndoRedo.undo' 
      ) {
        
        if(commentsPlugin.getCommentAtCell(row, prop)){
          ////console.log('not empty to null')
          
          setTimeout(() => {
            commentsPlugin.removeCommentAtCell(row,prop);
          }, 100);

        } else {
          ////console.log('empty to null')
        };
      
        
        ////////console.log('comments removed')
      }
      ////////console.log(`Change in row ${row} property ${prop}: ${oldValue} -> ${newValue}`);
    });  
  //console.log('end before change')
}
