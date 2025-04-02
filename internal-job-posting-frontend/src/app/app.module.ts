import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'; // Import HomeComponent

@NgModule({
    declarations: [
        // Add HomeComponent here
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppComponent,
        HomeComponent
    ],
    providers: [],

})
export class AppModule { }
