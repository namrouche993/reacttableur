import React, { useState } from 'react'
import 'handsontable/dist/handsontable.full.css'; // Import Handsontable CSS
import Handsontable from 'handsontable';
import { useSelector, useDispatch } from 'react-redux'; 

function Essaitest() { // WITHOUT REDUX WE PUT Changeval(props)

    ////console.log('we are inside changeval component')
    const hotInstance_redux  = useSelector(state => state.hotInstance_redux);

     ////console.log('hotInstance_redux : ')
     ////console.log(hotInstance_redux)
     const data00 = hotInstance_redux==null?"":hotInstance_redux.getData();
     ////console.log(data00)

    // ////console.log(hotInstance_redux.getData())


    const [input1text2,setInputtext2] = useState('')

    const onchangeinputfct2 = (e) => {
      setInputtext2(e.target.value)
    }

    const onclickbttn = () => {
       //props.hota.setDataAtCell(0, 0,input1text2)  // WITHOUT REDUX
       hotInstance_redux.setDataAtCell(0,0,input1text2)
    }
    
    if (!hotInstance_redux) {
        // Return some loading or placeholder content if hotInstance_redux is not available yet
        return <div>Loading...</div>;
    }

  return (
    <>
        <input value={input1text2} type='text' onChange={onchangeinputfct2}/> - - {input1text2}
        <br></br>
        <button onClick={onclickbttn}>send</button>
    </>
  )
}

export default React.memo(Essaitest)