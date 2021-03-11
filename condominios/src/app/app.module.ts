import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Forms
import { FormsModule } from '@angular/forms';

//Angular Material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApDispComponent} from './dispositivos/ap-disp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitaCreateComponent } from './ventas/citas/cita-create/cita-create.component';
import { IndexComponent } from './ventas/citas/index/index.component';
import { CondominoCreateComponent } from './proyectos/condominos/condomino-create/condomino-create.component';
import { CondominoListComponent } from './proyectos/condominos/condomino-list/condomino-list.component';
import { FormFamiliaComponent } from './proyectos/condominos/form-familia/form-familia.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    ApDispComponent,
    CitaCreateComponent,
    IndexComponent,
    CondominoCreateComponent,
    CondominoListComponent,
    FormFamiliaComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
