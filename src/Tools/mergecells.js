export var mergecellsarray = [ // editable of course
    { row: 0, col: 1, rowspan: 1, colspan: 15 },
    { row: 1, col: 1, rowspan: 1, colspan: 15 },
    { row: 2, col: 1, rowspan: 1, colspan: 15 },


    { row: 4, col: 1, rowspan: 2, colspan: 1 },
    { row: 4, col: 2, rowspan: 2, colspan: 1 },
    { row: 4, col: 3, rowspan: 2, colspan: 1 },
    { row: 4, col: 4, rowspan: 2, colspan: 1 },

    { row: 4, col: 5, rowspan: 1, colspan: 5 },
    { row: 4, col: 10, rowspan: 1, colspan: 5 },

    //{ row: 9, col: 4, rowspan: 2, colspan: 1 },

    ]

export const mycellmergedfct = (mergecellsarray) => {
    const mycellsmerged = [];
    for (let index = 0; index < mergecellsarray.length; index++) {
        mycellsmerged.push(mergecellsarray[index]);
       }
       return mycellsmerged
}

export function getCellsBetweenRanges(from, to) {
    const cells = [];
  
    const startRow = Math.min(from.row, to.row);
    const endRow = Math.max(from.row, to.row);
    const startCol = Math.min(from.col, to.col);
    const endCol = Math.max(from.col, to.col);
  
    for (let row = startRow; row <= endRow; row++) {
      for (let col = startCol; col <= endCol; col++) {
        cells.push({ row, col });
      }
    }
    return cells;
  }

  export function hasCommonPair(array1, array2) {
    return array1.some(pair1 =>
      array2.some(pair2 =>
        JSON.stringify(pair1) === JSON.stringify(pair2)
      )
    );
  }
  

export const myoldmergedcells_fct = () => {
    const myoldmergedcells = [];
    mycellmergedfct(mergecellsarray).map((x,index)=>{
    var part1 = x.row;
    var part2 = x.col;
    var firstpair = {row:part1,col:part2}
    ////////console.log(firstpair)

    var part3 = x.row+x.rowspan-1;
    var part4 = x.col+x.colspan-1;
    var secondpair = {row:part3,col:part4}
   // //////console.log(secondpair)

    var cellsToAutofill_old = getCellsBetweenRanges( firstpair, secondpair);
    myoldmergedcells.push(cellsToAutofill_old)
    ////////console.log(cellsToAutofill_old)
  })
  var myoldmergedcells2 = [].concat(...myoldmergedcells)
  return myoldmergedcells2
}