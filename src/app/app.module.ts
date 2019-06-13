import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReportFormComponent } from './report-form/report-form.component';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//Translation
import { TranslationComponent } from './translation/translation.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    ReportFormComponent,
    TranslationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
   
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
