import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SharedBroadcastService } from './shared/index';
import { BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { MonacoEditorComponent } from './monaco-editor/index';
import {
  AppConfigComponent, ConfigLangComponent, ConfigThemeComponent,
  ConfigIndentComponent, ConfigTypeComponent
} from './app-config/index';
import {
  ZjsHintComponent, ZjsTitleComponent, ZjsNoticeComponent, ZjsInfoComponent,
  ZjsHistComponent, ZjsLoadingComponent, ZjsUpdateComponent
} from './attachments';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient]
      }
    }),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AppConfigComponent,
    ConfigLangComponent,
    ConfigThemeComponent,
    ConfigIndentComponent,
    ConfigTypeComponent,
    MonacoEditorComponent,
    ZjsHintComponent,
    ZjsTitleComponent,
    ZjsNoticeComponent,
    ZjsInfoComponent,
    ZjsHistComponent,
    ZjsLoadingComponent,
    ZjsUpdateComponent
  ],
  providers: [
    AppService,
    SharedBroadcastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
