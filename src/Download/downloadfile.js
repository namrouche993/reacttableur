import jsPDF from 'jspdf'
import 'jspdf-autotable'

import { pdf_return_table_to_downloading_Fct } from './pdf_return_table_to_downloading_Fct';
import { pdf_edit_size_table_to_downloading_sadeg_Fct } from './pdf_edit_size_table_to_downloading_sadeg';

export function downloadfile(hot,data22) {
    //console.log('hot just in starting downloadfile : ')
    //console.log(hot)
    var doc = new jsPDF({orientation:'landscape'});
    const table=pdf_return_table_to_downloading_Fct(hot,data22)
    //console.log('table in downloadfile after declaring :')
    //console.log(table)

    const { columnStyles, font_size } = pdf_edit_size_table_to_downloading_sadeg_Fct(table);
  
  doc.autoTable({  // the complete width of the A4 landscape page is : 297 (i think the unit is by mm so 297mm x 210mm  or 210mm x 297mm)
                 
                  body:table,
                  theme:'grid',
                  margin:{left:7,right:4},        // maybe editable  
                  columnStyles: columnStyles,
                  styles:{fontSize:font_size,
      textColor: [0, 0, 0], // Set text color to black
      lineColor: [0, 0, 0], // Set line color to black
      lineWidth: 0.1 // Set line width to 0.1 (adjust as needed)},
           },
      didParseCell:function(data){data.cell.styles.font = "helvetica";} //helvetica
           
  })
  doc.save('taaa.pdf')
}
