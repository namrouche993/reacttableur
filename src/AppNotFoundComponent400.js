import React, { useState,useEffect } from 'react'
import LoadingComponent from './Tools/LoadingComponent';

export default function AppNotFoundComponent400() {
  const [displayeddelay,setDisplayeddelay]=useState(true);

  useEffect(() => {
    const delay = 100; // 2 seconds delay
    const timeoutId = setTimeout(() => {
      setDisplayeddelay(false);
    }, delay);
  });

    return (
      <div>
          {displayeddelay ? <LoadingComponent/> : 
            <div> 
              <h2>404- Not Found</h2> {/* editable langauge */}
              <p>The page you are looking for does not exist.</p>  {/* editable langauge */}
            </div> 
            }
      </div>
    )
  }