
function OwnAppComponent(){

  const hotInstance_redux  = useSelector(state => state.hotInstance_redux);
  console.log('hotInstance_redux')
  console.log(hotInstance_redux);

  let ownRoute = useParams();
  console.log(ownRoute.ownroute)

  /*
  async function FetchAppOwnEnter (){
    try {
     const response = await fetch('http://localhost:5000/api/ownenter', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        //body: JSON.stringify({"idusername":email,"dataa": [5,8,4,6] })//data_localstorage})
        body: JSON.stringify({
         //"act_data":hotInstance_existed,
         "ownroute":ownRoute.ownroute
       }) //data_localstorage})
      });
      //console.log('response : ');
      //console.log(response);
      
      if (response.ok) {
        console.log('response.ok true in ownenter request')
        //props.onClose();
        const values_ownroute = await response.json();
        console.log('values_ownroute :')
        console.log(values_ownroute)
        console.log(hotInstance_redux)
        console.log('getcellmeta_of_31 : ')
        var getcellmeta_of_31 = hotInstance_redux.getCellMeta(3, 1); // editable index      
        console.log(getcellmeta_of_31)
        getcellmeta_of_31.renderer= function(instance, td, row, col, prop, value, cellProperties) {
          Handsontable.renderers.TextRenderer.apply(this, arguments); // Use the TextRenderer for those cells
        };
        getcellmeta_of_31.validator=undefined;
        hotInstance_redux.setCellMeta(3,1,'readOnly',false);  // editable index        
        hotInstance_redux.setDataAtCell(3,1,values_ownroute.organisme + ' | ' + values_ownroute.region,'changeorganismesrc') // editable index
  
        //window.location.href = value_ownroute.hisownroute;
        //alert('already entered')
        
        console.log('Data sent successfully to the server.');
        return (
          <div>
          <Navbar display_modaledit={false} displayed_pr={false} />
          <br></br>
          <div style={{marginTop:43}}>
            <Hottable/>
           </div>
           <h1>Own App Component for Route: {ownRoute.ownroute}</h1>       
       </div>
        )
        //const datajj = await response.json();
        //localStorage.setItem('token', datajj.token);
        //return datajj.token; // Return the JWT token///
  
      } else {
        return (
        <div>
          <h2>404 - Not Found</h2>
          <p>The page you are looking for does not exist.</p>
        </div>
        )
        console.error('Error sending data to the server.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
   }
  */

  const rendererComponentOwnEnter =  'aaa' //FetchAppOwnEnter();

  return  <div> {rendererComponentOwnEnter} </div>
         

}
