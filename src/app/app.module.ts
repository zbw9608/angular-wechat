import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexerComponent } from './indexer/indexer.component';
import { TabComponent } from './tab/tab.component';
import { NamelistComponent } from './contacts/namelist.component';
import { ListviewComponent } from './contacts/listview/listview.component';
import { ShortcutComponent } from './contacts/listview/shortcut.component';
import { ChatComponent } from './chat/chat.component';
import { MoreComponent } from './chat/more/more.component';
import { RouterModule } from '@angular/router';
import { DataService } from './data.service';
import { PopupComponent } from './common/popup/popup.component';
import { LoginComponent } from './login/login.component';
import { PersonalComponent } from './personal/personal.component';
import { DiscoverComponent } from './discover/discover.component';
import { SearchComponent } from './common/search/search.component';
import { SettingComponent } from './personal/setting/setting.component';
import { AccountComponent } from './contacts/account/account.component';
import { EditSettingComponent } from './contacts/account/edit/editsetting.component';
import { EditContactComponent } from './contacts/account/edit/editcontact.component';

@NgModule({
  declarations: [
    AppComponent, NamelistComponent, ListviewComponent, 
    ChatComponent, ShortcutComponent, TabComponent, IndexerComponent,
    MoreComponent, PopupComponent, LoginComponent, PersonalComponent, 
    DiscoverComponent, SearchComponent, SettingComponent, AccountComponent,
    EditSettingComponent, EditContactComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path: "index", component: IndexerComponent },
      { path: "contacts", component: NamelistComponent },
      { path: "chat/:id ", component: ChatComponent},
      { path: "account/:id ", component: AccountComponent},
      { path: "login", component: LoginComponent},
      { path: "personal", component: PersonalComponent},
      { path: "discover", component: DiscoverComponent},
      { path: "settings", component: SettingComponent},
      { path: "setting/:id", component: EditSettingComponent},
      { path: "edit/:id", component: EditContactComponent},
      { path: "**", redirectTo: "/login" }
    ])
  ],
  providers: [DataService, ChatComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
