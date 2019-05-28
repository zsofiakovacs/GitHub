import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: "home",
  loadChildren: "./home/home.module#HomeModule" //loadchildren is used to declare a lazy loading for the modules
  
  },
    {
      path: "report",
      loadChildren: "./report/report.module#ReportModule" //loadchildren is used to declare a lazy loading for the modules
      
      },
      {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
      }
     
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



  
}
