import 
{ 
  userTimeZone,usTimeZones, //is_date_exist==false
}
from '../initials_inputs.js'

export function beforeChangeFct(changes,source,hot){
    //const hot = otherArgs[otherArgs.length - 1];
    var commentsPlugin = hot.getPlugin('comments');

    changes.forEach(([row, prop, oldValue, newValue]) => {
      if (oldValue == '' && newValue == null || oldValue == '' && newValue == '' && source == 'UndoRedo.undo') {
        commentsPlugin.removeCommentAtCell(row, prop);
        //console.log('comments removed')
      }
      //console.log(`Change in row ${row} property ${prop}: ${oldValue} -> ${newValue}`);
    });
    //console.log('end before change')
}
