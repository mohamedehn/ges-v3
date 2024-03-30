import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { ButtonComponent } from './components/button/button.component';
import { SectionComponent } from './components/section/section.component';
import { PhotovoltaiqueComponent } from './pages/photovoltaique/photovoltaique.component';
import { ContentComponent } from './components/content/content.component';
import { ChauffageEcsComponent } from './pages/chauffage-ecs/chauffage-ecs.component';
import { VentilationComponent } from './pages/ventilation/ventilation.component';
import { IsolationComponent } from './pages/isolation/isolation.component';
import { AidesComponent } from './pages/aides/aides.component';
import { ProComponent } from './pages/pro/pro.component';
import { IrveComponent } from './pages/irve/irve.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorksComponent } from './pages/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    ButtonComponent,
    SectionComponent,
    PhotovoltaiqueComponent,
    ContentComponent,
    ChauffageEcsComponent,
    VentilationComponent,
    IsolationComponent,
    AidesComponent,
    ProComponent,
    IrveComponent,
    ContactComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
