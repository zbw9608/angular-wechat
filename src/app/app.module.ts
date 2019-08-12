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
import { MoreComponent } from './more/more.component';
import { DragDirective } from './more/drag.directive';
import { RouterModule } from '@angular/router';
import { DataService } from './data.service';
import { PopupComponent } from './common/popup.component';
import { LoginComponent } from './login/login.component';
import { PersonalComponent } from './personal/personal.component';
import { DiscoverComponent } from './discover/discover.component';

@NgModule({
  declarations: [
    AppComponent, NamelistComponent, ListviewComponent, 
    ChatComponent, ShortcutComponent, TabComponent, IndexerComponent,
    MoreComponent, DragDirective, PopupComponent, LoginComponent, 
    PersonalComponent, DiscoverComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path: "index", component: IndexerComponent },
      { path: "contacts", component: NamelistComponent },
      { path: "chat/:id ", component: ChatComponent},
      { path: "login", component: LoginComponent},
      { path: "personal", component: PersonalComponent},
      { path: "discover", component: DiscoverComponent},
      { path: "**", redirectTo: "/index" }
    ])
  ],
  providers: [DataService, ChatComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
