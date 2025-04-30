import { Component } from '@angular/core';
import {RecetteService} from '../recette.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent  {

  data = {
    nom : "",
    type : "",
    image : "",
    ingrediant : "",
    chef : "",
    category : ""


  }

  constructor(private service : RecetteService , private router : Router) {}


  createrec(){
    this.service.create(this.data).subscribe({
      next : (data)=>
        this.router.navigate(['/accueil'])
      }

    )
  }

}
