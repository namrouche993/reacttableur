//is_date_exist==false
export function isValidDate(dateStr,splitsign,ndays,nmonths,nyears) {
        const datestr2 = dateStr.split(splitsign);
        const day = parseInt(datestr2[Number(ndays)-1]);
        const month = parseInt(datestr2[Number(nmonths)-1]);
        const year = parseInt(datestr2[Number(nyears)-1]);
        const parsedMonth = parseInt(month);
        const parsedDay = parseInt(day);
        const parsedYear = parseInt(year);
      
        if ( isNaN(day) || isNaN(month) || isNaN(year) ){
            return false;
        }
        // Check if year is within the allowed range
        if (parsedYear < 1000 || parsedYear>3000) {
          return false;
        }
      
        // Check if month is valid
        if (parsedMonth < 1 || parsedMonth > 12) {
          return false;
        }
      
        // Check if day is valid for the given month and year
        const daysInMonth = new Date(parsedYear, parsedMonth, 0).getDate();
        if (parsedDay < 1 || parsedDay > daysInMonth) {
          return false;
        }
      
        // If all checks pass, return true
        return true;
      }