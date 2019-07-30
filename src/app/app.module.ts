import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NamelistComponent } from './namelist.component';
import { ListviewComponent } from './listview/listview.component';
import { ShortcutComponent } from './listview/shortcut.component';
import { ChatComponent } from './chat/chat.component';
import { RouterModule } from '@angular/router';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent, NamelistComponent, ListviewComponent, ChatComponent, ShortcutComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path: "namelist", component: NamelistComponent },
      { path: "chat/:id ", component: ChatComponent},
      { path: "**", redirectTo: "/namelist" }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
