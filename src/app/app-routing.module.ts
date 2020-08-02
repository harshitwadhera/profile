import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { About2Component } from './about2/about2.component';
import { Home2Component } from './home2/home2.component';
import { Skills2Component } from './skills2/skills2.component';

const routes: Routes = [
  {path:"home2",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"skills",component:SkillsComponent},
  {path:"education",component:EducationComponent},
  {path:"experience",component:ExperienceComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"contact",component:ContactComponent},
  {path:"about2",component:About2Component},
  {path:"home",component:Home2Component},
  {path:"skills2",component:Skills2Component},
  {path:"**",redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
