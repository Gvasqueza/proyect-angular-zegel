import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { MembresiasComponent } from './membresias/membresias.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { BibliotecaComponent } from './biblioteca/biblioteca.component';

export const routes: Routes = [
    { path: 'contact', component: ContactComponent },
    { path: 'footer', component: FooterComponent },
    { path: '', component: MainComponent },
    { path: 'login', component: LoginViewComponent},
    { path: 'membresias', component: MembresiasComponent},
    { path: 'nosotros', component: NosotrosComponent},
    { path: 'dashboard', component: DashboardComponent},
    // { path: 'biblioteca', component: BibliotecaComponent},
    { path: '**', redirectTo: '/' },
];
