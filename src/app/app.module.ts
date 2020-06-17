import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule, Title }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ScaleGeneratorComponent } from './scale-generator/scale-generator.component';
import { MainFrameComponent } from './main-frame/main-frame.component';
import { TabsGeneratorComponent } from './tabs-generator/tabs-generator.component';
import { ChordDiagramGeneratorComponent } from './chord-diagram-generator/chord-diagram-generator.component';
import { WordpressProjectsComponent } from './wordpress-projects/wordpress-projects.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'scale-generator', component: ScaleGeneratorComponent },
  { path: 'tabs-generator', component: TabsGeneratorComponent },
  { path: 'chord-diagram-generator', component: ChordDiagramGeneratorComponent },
  { path: 'wordpress-projects', component: WordpressProjectsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PlaygroundComponent,
    ScaleGeneratorComponent,
    MainFrameComponent,
    TabsGeneratorComponent,
    ChordDiagramGeneratorComponent,
    WordpressProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
