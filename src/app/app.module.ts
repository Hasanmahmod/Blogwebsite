import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialreferenceModule } from './materialreference/materialreference.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './modules/user/user.module';

const module=[UserModule,BrowserAnimationsModule,MaterialreferenceModule]



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    module
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
