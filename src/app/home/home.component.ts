import {Component, OnInit} from '@angular/core';
import {RecetteService} from '../recette.service';
import {NgForOf} from '@angular/common';

interface  lesrecettes{
  id : number,
  nom : string,
  type : string,
  image : string,
  ingrediants : string,
  chef : string,
  category : string,

}

@Component({
  selector: 'app-home',
  imports: [
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements  OnInit{

  recetteArray : lesrecettes[] = []
  constructor(private  service : RecetteService ){}




  ngOnInit(): void {
    this.service.getall().subscribe(data=>
      this.recetteArray = data

    )
  }


}
