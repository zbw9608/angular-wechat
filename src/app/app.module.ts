import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexerComponent } from './indexer/indexer.component';
import { TabComponent } from './tab/tab.component';
import { NamelistComponent } from './contacts/namelist.component';
import { ListviewComponent } from './listview/listview.component';
import { ShortcutComponent } from './listview/shortcut.component';
import { ChatComponent } from './chat/chat.component';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { DataService } from './data.service';
import { CustomRouteReuseStrategy } from './RouteReuseStrategy';

@NgModule({
  declarations: [
    AppComponent, NamelistComponent, ListviewComponent, 
    ChatComponent, ShortcutComponent, TabComponent, IndexerComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path: "index", component: IndexerComponent, data:{reload: true} },
      { path: "contacts", component: NamelistComponent, data:{reload: true} },
      { path: "chat/:id ", component: ChatComponent, data:{reload: true}},
      { path: "**", redirectTo: "/index" }
    ])
  ],
  providers: [
    DataService,
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
