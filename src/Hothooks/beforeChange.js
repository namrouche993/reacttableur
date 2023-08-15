import 
{ 
  userTimeZone,usTimeZones, //is_date_exist==false
}
from '../initials_inputs.js'

export function beforeChangeFct(changes,source,hot,commentsPlugin){
    //const hot = otherArgs[otherArgs.length - 1];
    console.log('beforeChange triggered')


    changes.forEach(([row, prop, oldValue, newValue]) => {
      console.log('changes foreach in beforechange')

      if (oldValue == '' && newValue == null  || oldValue == '' && newValue == '' && source == 'UndoRedo.undo' 
      ||  oldValue == ' ' && newValue == null  || oldValue == ' ' && newValue == ' ' && source == 'UndoRedo.undo' 
      ) {
        
        if(commentsPlugin.getCommentAtCell(row, prop)){
          console.log('not empty to null')
          
          setTimeout(() => {
            commentsPlugin.removeCommentAtCell(row,prop);
          }, 100);

        } else {
          console.log('empty to null')
        };
      
        
        ////console.log('comments removed')
      }
      ////console.log(`Change in row ${row} property ${prop}: ${oldValue} -> ${newValue}`);
    });
    ////console.log('end before change')
}
