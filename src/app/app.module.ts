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
import { RouterModule } from '@angular/router';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent, NamelistComponent, ListviewComponent, 
    ChatComponent, ShortcutComponent, TabComponent, IndexerComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path: "index", component: IndexerComponent },
      { path: "contacts", component: NamelistComponent },
      { path: "chat/:id ", component: ChatComponent},
      { path: "**", redirectTo: "/index" }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
