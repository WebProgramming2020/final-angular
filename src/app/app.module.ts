import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFirestoreModule} from "@angular/fire/firestore";
import { AngularFireModule} from "@angular/fire";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { environment } from 'src/environments/environment';
import { ConversionlistComponent } from './conversionlist/conversionlist.component';
import { DataComponent } from './data/data.component';
import { FirebaseDataService } from './firebase-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    HeaderComponent,
    FooterComponent,
    ConversionlistComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule, 
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [FirebaseDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
