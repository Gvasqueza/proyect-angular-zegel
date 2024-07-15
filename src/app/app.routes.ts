import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { MembresiasComponent } from './membresias/membresias.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import  {RegistroComponent} from './registro/registro.component'

// Guards (Opcional, para proteger rutas)
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: MainComponent }, // Página principal
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'nosotros', component: NosotrosComponent },

  // Rutas protegidas (requieren autenticación)
  { path: 'membresias', 
    component: MembresiasComponent ,
    canActivate: [AuthGuard]
    },
  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [AuthGuard] // Ejemplo de uso de un guard
  },
  
  // { path: 'biblioteca', component: BibliotecaComponent, canActivate: [AuthGuard] }, // Descomenta cuando tengas el componente Biblioteca

  { path: '**', redirectTo: '' } // Redirección si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
