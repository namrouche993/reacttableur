import React, { useEffect, useRef } from 'react';
import 'handsontable/dist/handsontable.full.css'; // Import Handsontable CSS
import Handsontable from 'handsontable';

const HotEmpty = () => {
  const hotContainer = useRef(null);

  useEffect(() => {
    const hotInstance = new Handsontable(hotContainer.current, {
      data: Handsontable.helper.createEmptySpreadsheetData(40, 15), // Empty data
      readOnly:true,
      colHeaders: true,
      rowHeaders: true,
      colWidths: 100, // Adjust column width as needed
      //rowHeights: 23, // Adjust row height as needed
    });

    return () => {
      hotInstance.destroy();
    };
  }, []);

  return <div ref={hotContainer} />;
};

export default HotEmpty;
