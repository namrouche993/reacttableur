import { last_row_after_header } from './initials_inputs.js';
import  secureLocalStorage  from  "react-secure-storage";
import { useLocation } from 'react-router-dom';


export function ddatafct(last_row_after_header){
            var ddata= [];
            ddata.push(  
            ['',"République Algérienne Démocratique et Populaire",'','','','','','','','','','','','','',   ''],
            ['',"Ministére de l'Habitat, de l'Urbanisme et de la Ville",'','','','','','','','','','','','','',   ''],
            ['',"Etat d'éxecution des travaux de raccordement en énergies électrique et gaziéres  - Projets achevés ou dépassants les 50% d'avancement",'','','','','','','','','','','','','',   ''],

            ['','Organisme :','','','','','','','','','','','','','',''],


            ['','Projet','Consistance de Projet',"Taux d'\navancement\ndes travaux\nlogements","Taux d'avancement des travaux VRD",'Raccordement en énergie Electrique','','','','','Raccordement en énergie Gaziere','','','','',   ''],
            ['','','','','',"Taux d'avancement des travaux",'Montant des travaux (devis SADEG)','Montant payé (DA)','Créances détenues travaux','Contraintes',"Taux d'avancement des travaux",'Montant des travaux (devis SADEG)','Montant payé (DA)','Créances détenues travaux','Contraintes',   ''],
            
            
            ) 
        
        for(let i=0 ; i<=last_row_after_header ; i++) {
          //let zzrow=['','123 456 789','1234567','52%','','','','','','','','','','','','','',   '']
          let zzrow=['','','','','','','','','','','','','','','','','',   '']

          ddata.push(zzrow);
        }
        return ddata
    }

    var connecting_multiple_users = true;

    //console.log('dataaa 31 ')
    //console.log(secureLocalStorage.getItem('ussd74kasd75_2aaa')==null)
    //console.log(secureLocalStorage.getItem('data_localstorage_storage_2')=='undefined')
    //alert('we are in data.js')    

    if(secureLocalStorage.getItem('ussd74kasd75_2')!==null && secureLocalStorage.getItem('hisownroute')!==null){
    const fetchDatadata = async () => {
        try {
          const response = await fetch('http://localhost:5000/getdata',{
          method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            },
            
            //body: JSON.stringify({"idusername":email,"dataa": [5,8,4,6] })//data_localstorage})
            body: JSON.stringify({
             //"act_data":hotInstance_existed,
             "hisroute": window.location.pathname,//secureLocalStorage.getItem('hisownroute'),
             "idusername":secureLocalStorage.getItem('ussd74kasd75_2')
           }) //data_localstorage})
          })

          //const response = await fetch('http://localhost:5000/getdata');
          if (response.ok) {
            const result = await response.json();
            return result.data00;
          } else {
            return null;
            // new Error('Failed to fetch data');
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      };
      
      const processFetchedData = async () => {
        try {
          const resultdatafromfct = await fetchDatadata();
          //console.log('Result from fetchData:');
          //console.log(resultdatafromfct);
          return resultdatafromfct
      
          // Here you can perform any further operations with the data
        } catch (error) {
          console.error('Error:', error);
        }
      };

    
    var result_from_fetch_data = await processFetchedData();
    //console.log('result_from_fetch_data ----------------------------------- ')
    //console.log(result_from_fetch_data)
  } else {
    var result_from_fetch_data = null ;
  }
//console.log('result_from_fetch_data')
//console.log(result_from_fetch_data)
    export var data_localstorage =  result_from_fetch_data ? result_from_fetch_data : secureLocalStorage.getItem('data_localstorage_storage_2')==null || secureLocalStorage.getItem('data_localstorage_storage_2')==undefined || secureLocalStorage.getItem('data_localstorage_storage_2')=='undefined' ? ddatafct(last_row_after_header) : JSON.parse(secureLocalStorage.getItem('data_localstorage_storage_2'));
    //console.log('data_localstorage')
    //console.log(data_localstorage)

    
    export function data22fct(last_row_after_header){
           // alert('data2ffcttt')
            //var retddata = JSON.parse(data_localstorage)
            var retddata = data_localstorage
            return retddata.map(arr => [...arr]);
        }


        
let last_row_to_use_for_dropdown_issue = ddatafct(last_row_after_header).length;
  
export function setLast_row_to_use_for_dropdown_issue(value) {
    last_row_to_use_for_dropdown_issue=value;
}

export function getLast_row_to_use_for_dropdown_issue(value) {
    return last_row_to_use_for_dropdown_issue;
}

