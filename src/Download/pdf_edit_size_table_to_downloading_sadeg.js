export function pdf_edit_size_table_to_downloading_sadeg_Fct(table){
  
    let font_size=6;
function normalmincolwidth(fontsize) { // the minimum widths, and we set it for columns title names i think ,
    if(fontsize==7){
        return [19,17,17,17,  1.15*17, 1.10*17, 1.10*17, 1.10*17,20   , 1.15*17, 1.10*17, 1.10*17, 1.10*17,20];
             //return [19,17,17,17,17,  1.15*17, 1.10*17, 1.10*17, 1.10*17,20   , 1.15*17, 1.10*17, 1.10*17, 1.10*17,20];

      } else if (fontsize==6){
        return [17,15,15,15,  1.10*18, 1.07*18, 1.07*18, 1.07*18,18   , 1.10*18, 1.07*18, 1.07*18, 1.07*18,18]
             //return [17,15,15,15,15,  1.10*18, 1.07*18, 1.07*18, 1.07*18,18   , 1.10*18, 1.07*18, 1.07*18, 1.07*18,18]
    }
}

function calcwidth(fontsize,textwidth) {
 if(fontsize==9){
     return 1.8*textwidth;
 } else if (fontsize==8){
     return 1.64*textwidth;
 } else if (fontsize==7){
     return 1.5*textwidth;
 } else if (fontsize==6){
     return 1.38*textwidth;
 }
}
////console.log('table before slice : ')
////console.log(table)

var data2=table.slice(2); //editable
////console.log('data2 : ')
////console.log(data2)
let columnMaxLengths = [];
// Initialize the array with zeros for each column
for (let i = 0; i < data2[0].length; i++) {
  columnMaxLengths[i] = 0;
}
// Iterate over each row and update the maximum length for each column
for (let row of data2) {
  for (let i = 0; i < row.length; i++) {
    var cellValue = row[i].content!==null ? row[i].content : '';
    columnMaxLengths[i] = Math.max(columnMaxLengths[i], calcwidth(font_size,cellValue.toString().length));
  }
}
////console.log(columnMaxLengths)
for (let i = 0; i < data2[0].length; i++) {
    if(i==5 || i==6 || i==7 || i==8 ||  i==10 || i==11 || i==12 || i==13){
  columnMaxLengths[i] = Math.max(columnMaxLengths[i],normalmincolwidth(font_size)[i]); // so if columnMaxLengths max column width is too short , so we set normalmincolwidth so that's why above i said column title names
    } else {
  columnMaxLengths[i] = normalmincolwidth(font_size)[i] // because obviously the columnMaxLengths will be short due to the cellvalues of percentages , so we take normalmincolwidth
    }   
}
////console.log('***************------------------------*******');
////console.log("columnMaxLengths avant test sum : ");
////console.log(columnMaxLengths)
////console.log(font_size)

var sumcolumnMaxLengths = columnMaxLengths.reduce((acc, curr) => acc + curr, 0); //calculates the sum of the array columnMaxLengths 
////console.log('sumcolumnMaxLengths : ')
////console.log(sumcolumnMaxLengths)

//#region second part of sadeg example : (here we reduce font_size if the page is not enough)
    if(sumcolumnMaxLengths>290 && font_size>6){
        ////console.log('font_size : ')
        ////console.log(font_size)
        font_size--;
        ////console.log(font_size);
        ////console.log('yessss it is greather than 290');
        ////console.log(sumcolumnMaxLengths)
        columnMaxLengths = [];
// Initialize the array with zeros for each column
for (let i = 0; i < data2[0].length; i++) {
  columnMaxLengths[i] = 0;
}

        for (let row of data2) {
  for (let i = 0; i < row.length; i++) {
//    cellValue = row[i].content;
    var cellValue = row[i].content!==null ? row[i].content : '';

    //////console.log('font_size after cellvalue : ');
    //////console.log(font_size);
    columnMaxLengths[i] = Math.max(columnMaxLengths[i], calcwidth(font_size,cellValue.toString().length));
  }
}
        
for (let i = 0; i < data2[0].length; i++) {
    if(i==5 || i==6 || i==7 || i==8 ||  i==10 || i==11 || i==12 || i==13){
  columnMaxLengths[i] = Math.max(columnMaxLengths[i],normalmincolwidth(font_size)[i]);
    } else {
  columnMaxLengths[i] = normalmincolwidth(font_size)[i]
    }   
}
    }
////console.log("columnMaxLengths apres test sum : ");
////console.log(columnMaxLengths)
var sumcolumnMaxLengths = columnMaxLengths.reduce((acc, curr) => acc + curr, 0);
////console.log(sumcolumnMaxLengths)

if(sumcolumnMaxLengths<286){
  ////console.log('sumcolwidth<286')
  var restecolumnswidth = 286-sumcolumnMaxLengths
  ////console.log(sumcolumnMaxLengths)
  ////console.log(restecolumnswidth)
  ////console.log(columnMaxLengths)
  columnMaxLengths[0]=columnMaxLengths[0]+restecolumnswidth/2
  columnMaxLengths[8]=columnMaxLengths[8]+restecolumnswidth/4
  columnMaxLengths[13]=columnMaxLengths[13]+restecolumnswidth/4

}

////console.log('font_size : ')
////console.log(font_size)
//#endregion second part of sadeg example : (here we reduce font_size if the page is not enough)


var columnStyles = {
  0: { columnWidth: columnMaxLengths[0] }, // Column 1 width
  1: { columnWidth: columnMaxLengths[1] }, // Column 2 width
  2: { columnWidth: columnMaxLengths[2] },  
  3: { columnWidth: columnMaxLengths[3] },  
  4: { columnWidth: columnMaxLengths[4] },  
  5: { columnWidth: columnMaxLengths[5] },  
  6: { columnWidth: columnMaxLengths[6] },  
  7: { columnWidth: columnMaxLengths[7] },  
  8: { columnWidth: columnMaxLengths[8] },
  9: { columnWidth: columnMaxLengths[9] },  
  10: { columnWidth: columnMaxLengths[10] },  
  11: { columnWidth: columnMaxLengths[11] },  
  12: { columnWidth: columnMaxLengths[12] },  
  13: { columnWidth: columnMaxLengths[13] },
  //14: { columnWidth: columnMaxLengths[14] },  

};

return { columnStyles, font_size };


}