import React, { useRef, useEffect } from 'react';
import Handsontable from 'handsontable';
import afterValidatefct from 'afterValidatefct.js'

const MyHandsontable = () => {
  const hotElementRef = useRef(null);

  useEffect(() => {
    const hot = Handsontable(hotElementRef.current, {
      data: [['john.doe@example.com'], ['invalid-email'], ['alice.smith@example.com']],
      columns: [
        {
          type: 'text',
          validator: (value, callback) => {
            // Use a simple regex to check if the value is a valid email
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

            // If not a valid email, set the value to an empty string
            if (!isValidEmail) {
              callback(false);
            } else {
              callback(true);
            }
          },
        },
      ],
      afterValidate: (isValid, value, row, prop, source) => {
        afterValidatefct(isValid, value, row, prop, source, hot);

        if (!isValid) {
           hot.setDataAtCell(row,prop, '')
        }
      },
    });

    return () => {
      hot.destroy();
    };
  }, []);

  return <div ref={hotElementRef} />;
};

export default MyHandsontable;
