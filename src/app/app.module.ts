import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormQLModule } from '@formql/core';
import { FormQLEditorModule } from '@formql/editor';

import { AppComponent } from './app.component';
import { MyAppService } from './services/my-app.service';
import { SomeFormComponent } from './components/some-form/some-form.component';
import { SomeFieldComponent } from './components/some-field/some-field.component';

@NgModule({
  declarations: [
    AppComponent,
    SomeFormComponent,
    SomeFieldComponent
  ],
  imports: [
    BrowserModule,
    FormQLModule,
    FormQLEditorModule,
    HttpClientModule
  ],
  entryComponents: [
    SomeFormComponent,
    SomeFieldComponent
  ],
  providers: [
    MyAppService,
    {
      provide: 'FormQLService',
      useClass: MyAppService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
