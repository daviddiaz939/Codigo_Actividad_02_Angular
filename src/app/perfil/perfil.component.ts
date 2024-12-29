import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: false,
  
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

  public miVariable: String = "";

  public miFuncionDeBuscar() {
    window.open("http://www.google.com/search?q=" + this.miVariable,'_blank');
  }

}