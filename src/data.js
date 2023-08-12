import{ last_row_after_header} from './initials_inputs'
export function ddatafct(){
            var ddata= [];
            ddata.push(  
            ['','Etat ','','','','','','','','','','','','','','','',   ''],
            ['','Etat2','','','','','','','','','','','','','','','',   ''],
            ['','Etat333','','','','','','','','','','','','','','','',   ''],
            ['','Etat444','','','','','','','','','','','','','','','','',   ''],
            //['','','','','','','','','','','','','','','','','',''],
            //[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
            ['','Projet','Consistance de Projet',"Taux d'\navancement\ndes travaux\nlogements","Taux d'avancement des travaux VRD",'Raccordement en énergie Electrique','','','','','Raccordement en énergie Gaziere','','','','',   ''],
            ['','','','','',"Taux d'avancement des travaux",'Montant des travaux (devis SADEG)','Montant payé (DA)','Créances détenues travaux','Contraintes',"Taux d'avancement des travaux",'Montant des travaux (devis SADEG)','Montant payé (DA)','Créances détenues travaux','Contraintes',   ''],
            //['','aaz','36','','','','','','','','','','','','','','',   ''],
            //['','','','','','','','','','','','','','','','','',   '']       
            //['','','','','','','','','','','','','','','','','','',   '']            

            
            
            ) 
        
        for(let i=0 ; i<=last_row_after_header ; i++) {
          //let zzrow=['','123 456 789','1234567','52%','','','','','','','','','','','','','',   '']
          let zzrow=['','','','','','','','','','','','','','','','','',   '']

          ddata.push(zzrow);
        }
        return ddata
    }

        export function data22fct(){
            var retddata = ddatafct(last_row_after_header)
            return retddata.map(arr => [...arr]);
        }