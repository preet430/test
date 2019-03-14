import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShirtsComponent } from './shirts/shirts.component';
import { HomeComponent } from './home/home.component';
// import { PantsComponent } from './pants/pants.component';
// import { HowitworkComponent } from './howitwork/howitwork.component';
// import { ContactComponent } from './contact/contact.component';
// import { AboutComponent } from './about/about.component';
// import { CustomizerComponent } from './customizer/customizer.component';
// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shirts',component:ShirtsComponent},
  {path:'home',component:HomeComponent},
  // {path:'pants',component:PantsComponent},
  // {path:'howitwork',component:HowitworkComponent},
  // {path:'contact',component:ContactComponent},
  // {path:'about',component:AboutComponent},
  // {path:'customizer',component:CustomizerComponent},
  // {path:'register',component:RegisterComponent},
  // {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
