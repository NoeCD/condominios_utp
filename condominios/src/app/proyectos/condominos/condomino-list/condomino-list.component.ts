import { Component, OnInit } from '@angular/core';
import {Condomino} from '../../condomino.models';
import condominos from './condominos.json';

@Component({
  selector: 'app-condomino-list',
  templateUrl: './condomino-list.component.html',
  styleUrls: ['./condomino-list.component.css']
})
export class CondominoListComponent implements OnInit {

  constructor() { }

  public condominoCollection: Condomino[] = condominos;
  
  ngOnInit(): void {
  }

}
