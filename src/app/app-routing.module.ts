import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PhotovoltaiqueComponent } from './pages/photovoltaique/photovoltaique.component';
import { ChauffageEcsComponent } from './pages/chauffage-ecs/chauffage-ecs.component';
import { VentilationComponent } from './pages/ventilation/ventilation.component';
import { IsolationComponent } from './pages/isolation/isolation.component';
import { AidesComponent } from './pages/aides/aides.component';
import { ProComponent } from './pages/pro/pro.component';
import { IrveComponent } from './pages/irve/irve.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorksComponent } from './pages/works/works.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'isolation', component: IsolationComponent},
  { path: 'photovoltaique', component: PhotovoltaiqueComponent },
  { path: 'ventilation', component: VentilationComponent },
  { path: 'chauffage-ecs', component: ChauffageEcsComponent },
  { path: 'professionnels', component: ProComponent },
  { path: 'aides', component: AidesComponent },
  { path: 'irve', component: IrveComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'metiers', component: WorksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
