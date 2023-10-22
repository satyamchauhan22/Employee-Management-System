import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path:'view',component: ViewComponent},
  {path:'edit/:empid',component: EditComponent},
  {path:'details/:empid',component: DetailsComponent},
  {path:'delete/:empid',component: DeleteComponent},
  {path:'add',component:AddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
