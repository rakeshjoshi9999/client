import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { TreeModule } from 'primeng/tree';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XTermComponent } from './x-term/x-term.component';
import { FileTreeComponent } from './file-tree/file-tree.component';
import {HttpClientModule } from '@angular/common/http';
const config: SocketIoConfig = { url: 'http://localhost:9000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    XTermComponent,
    FileTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    TreeModule,
    ButtonModule,
    SplitterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
