import { Component, OnInit } from '@angular/core';
import { Condomino } from '../../condomino.models';
import { Familia } from '../../familia.model';

interface Estado {
  model: string;
  valor: string;
}
interface Sexo{
  model: string;
  valor: string;
}

@Component({
  selector: 'app-condomino-create',
  templateUrl: './condomino-create.component.html',
  styleUrls: ['./condomino-create.component.css']
})
export class CondominoCreateComponent implements OnInit {
  
  numero:number = 0;
  forms:any = [];
  

  familias:Familia[] = [];
  condomino:Condomino = new Condomino("","","",0,"","",0,"","",new Date());

  constructor() {}
 
  ngOnInit(): void {
    // this.familia = new Familia("Noe","Couoh","Dzul",999999,"Tio");
    this.condomino = new Condomino("Alam","","Cih",0,"","",0,"","",new Date());
  }
  get diagnostic(){
    return JSON.stringify(this.condomino);
  }
  guardarCondomino(){
    alert(JSON.stringify(this.condomino));
    this.condomino = new Condomino("","","",0,"","",0,"","",new Date());
    
  }
  estados: Estado[] = [
    {model: 'soltero(a)', valor: 'Soltero(a)'},
    {model: 'casado(a)', valor: 'Casado(a)'},
    {model: 'viudo(a)', valor: 'Viudo(a)'}
  ];
  sexos: Sexo[] = [
    {model: 'masculino', valor: 'Masculino'},
    {model: 'femenino', valor: 'Femenino'}
  ]

 

   guardarFamilia(famArray:Familia[]){

      for(let i = 0 ; i < famArray.length; i++ ){
          let familia = famArray[i];
          this.familias.push(familia);
      }
    alert(JSON.stringify(this.familias));
    this.forms.splice(0, this.forms.length);
    this.numero = 0;
   }




  generateForm(numero:number) {

    this.forms.splice(0, this.forms.length);
    
    for(let i = 0; i < numero ; i++){
       let form = {
         'referencia' : i + 1
       };
       this.forms.push(form);
   }
   return console.log(this.forms);
 }
 

}

