import Handsontable from 'handsontable';
import{ last_row_after_header} from '../initials_inputs.js'  
const imin = 6;
const imax = 6+last_row_after_header
export function normalcellloop(){ // editable of course
  //console.log('******* normalcellloop ******++++++++++++++++++')
  ////console.log(otherArgs)
    const aus = [
      { row: 0, col: 1, className: 'htCenter htMiddle headertop' },  // Etat
      { row: 1, col: 1, className: 'htCenter htMiddle headertop' },  // Etat2
      { row: 2, col: 1, className: 'htCenter htMiddle headertop' },  // Etat333
      { row: 3, col: 1, className: 'htLeft htMiddle headertop' },    // Etat444
  
  
      { row: 4, col: 1, className: 'htCenter htMiddle custom-titlecell' },
      { row: 4, col: 2, className: 'htCenter htMiddle custom-titlecell' },
      { row: 4, col: 3, className: 'htCenter htMiddle custom-titlecell' },
      { row: 4, col: 4, className: 'htCenter htMiddle custom-titlecell' },
      { row: 4, col: 5, className: 'htCenter htMiddle custom-titlecell' },
      { row: 4, col: 10, className: 'htCenter htMiddle custom-titlecell' },
  
      { row: 5, col: 1, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 2, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 3, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 4, className: 'htCenter htMiddle custom-titlecell2' },
      
      { row: 5, col: 5, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 6, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 7, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 8, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 9, className: 'htCenter htMiddle custom-titlecell2' },
      //{ row: 5, col: 10, className: 'htCenter htMiddle custom-titlecell2' },
  
      
      { row: 5, col: 10, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 11, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 12, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 13, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 14, className: 'htCenter htMiddle custom-titlecell2' },
      //{ row: 5, col: 16, className: 'htCenter htMiddle custom-titlecell2' },
    ];
  
    for(let i=imin ; i<=imax ; i++) {
      for(let j=1 ; j<=14 ; j++){
        if(j==2 || j==3){   // which column text align is center
          ////console.log('we are in j==2 : ')
          //var zz={ row: i, col: j, className: 'htRight' };
          var zz={ row: i, col: j, className: 'htRight htMiddle custom-normalcell' };

          aus.push(zz);
          ////console.log(zz)
         
        } else {
          var zz={ row: i, col: j, className: 'htRight htTop custom-normalcell' };
          aus.push(zz);
        }
              }
    }
    return aus
  }

  export function cellscells(row,column){
      var cellProperties = {};
      if(row<6){ // editable
        cellProperties.readOnly = true;
        cellProperties.renderer = function(instance, td, row, col, prop, value, cellProperties) {
          Handsontable.renderers.TextRenderer.apply(this, arguments); // Use the TextRenderer for those cells
        };
      }
      return cellProperties;
    }