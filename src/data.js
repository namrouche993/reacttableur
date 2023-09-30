import { last_row_after_header } from './initials_inputs.js';
import  secureLocalStorage  from  "react-secure-storage";

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

    
    export var data_localstorage = secureLocalStorage.getItem('data_localstorage_storage_2')==null ? ddatafct(last_row_after_header) : JSON.parse(secureLocalStorage.getItem('data_localstorage_storage_2'));
    
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

