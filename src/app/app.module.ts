import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { DxDataGridModule } from 'devextreme-angular';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './User-model/user.service';
import { ImagePopupComponent } from './image-popup/image-popup.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { DocumentDialogComponent } from './document-dialog/document-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageUploadDialogComponent } from './image-upload-dialog/image-upload-dialog.component';
import { MatIconModule } from '@angular/material/icon';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    ImagePopupComponent,
    NavbarComponent,
    DocumentDialogComponent,
    ImageUploadDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DxDataGridModule,
    GridModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
