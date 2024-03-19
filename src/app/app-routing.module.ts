import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhotovoltaiqueComponent } from './pages/photovoltaique/photovoltaique.component';
import { ChauffageEcsComponent } from './pages/chauffage-ecs/chauffage-ecs.component';
import { VentilationComponent } from './pages/ventilation/ventilation.component';
import { IsolationComponent } from './pages/isolation/isolation.component';
import { AidesComponent } from './pages/aides/aides.component';
import { ProComponent } from './pages/pro/pro.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'isolation', component: IsolationComponent},
  { path: 'photovoltaique', component: PhotovoltaiqueComponent },
  { path: 'ventilation', component: VentilationComponent },
  { path: 'chauffage-ecs', component: ChauffageEcsComponent },
  { path: 'professionnels', component: ProComponent },
  { path: 'aides', component: AidesComponent },
  // { path: 'contact'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
