import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { ServiceService } from './service.service';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    EditComponent,
    DetailsComponent,
    DeleteComponent,
    AddComponent,
    SearchPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
