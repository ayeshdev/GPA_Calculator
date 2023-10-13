import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER,TuiButtonModule,TuiTextfieldControllerModule, TuiLoaderModule,tuiSvgOptionsProvider, TuiHintModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { StudentsComponent } from './components/students/students.component';
import { AddStudentComponent } from './components/add-student/add-student.component';

//taiga Ui
import {TuiTabsModule,TuiIslandModule,TuiInputModule,TuiInputNumberModule,TuiInputCountModule,TuiTagModule,TuiProgressModule, TuiInputPasswordModule,} from '@taiga-ui/kit';
import {TuiTableModule} from '@taiga-ui/addon-table';
import {TuiArcChartModule} from '@taiga-ui/addon-charts';
import {TuiBlockStatusModule} from '@taiga-ui/layout';
import { TuiMobileTabsModule } from "@taiga-ui/addon-mobile";



@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AddStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
      BrowserAnimationsModule,
      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule,
      TuiTabsModule,
      TuiIslandModule,
      TuiButtonModule,
      TuiTableModule,
      TuiInputModule,
      ReactiveFormsModule,
      TuiTextfieldControllerModule,
      TuiInputNumberModule,
      TuiArcChartModule,
      TuiInputCountModule,
      TuiTagModule,
      FormsModule,
      TuiBlockStatusModule,
      TuiLoaderModule,
      TuiProgressModule,
      TuiRootModule,
      TuiDialogModule,
      TuiMobileTabsModule,
      TuiHintModule,
      TuiInputPasswordModule,
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
