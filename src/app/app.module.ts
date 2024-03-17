import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ButtonComponent } from './button/button.component';
import { SectionComponent } from './section/section.component';
import { PhotovoltaiqueComponent } from './pages/photovoltaique/photovoltaique.component';
import { ContentComponent } from './content/content.component';
import { ChauffageEcsComponent } from './pages/chauffage-ecs/chauffage-ecs.component';
import { VentilationComponent } from './pages/ventilation/ventilation.component';

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
    VentilationComponent
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
