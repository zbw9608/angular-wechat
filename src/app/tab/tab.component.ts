import { Component, AfterContentChecked } from '@angular/core';

@Component({
    selector: 'tab',
    template: `
    <div class="tab">
       <a [routerLink]="['index']" class="tab-item" [ngClass]="{active: chats}">Chats</a>
       <a [routerLink]="['contacts']" class="tab-item" [ngClass]="{active: contacts}">Contacts</a>
       <a [routerLink]="['discover']" class="tab-item" [ngClass]="{active: discover}">Discover</a>
       <a [routerLink]="['personal']" class="tab-item" [ngClass]="{active: personal}">Me</a>
    </div>
    `,
    styles: [`
    .tab {
        display: flex;
        line-height: 80px;
        height: 60px;
        background: rgba(246,246,246,.8);
        border-top: rgba(0,0,0,.05) 1px solid;
    }
    .tab-item {
        flex: 1;
        text-align: center;
    }
    a {
        font-size: 12px;
        font-family: Arial, Helvetica, sans-serif;
        color: black;
        text-decoration: none;
    }
    .active {
        color: #36b05d;
    }
    `]
})
export class TabComponent implements AfterContentChecked {
    public chats: boolean = true;
    public contacts: boolean = false;
    public discover: boolean = false;
    public personal: boolean = false;
    
    constructor() {}
    
    /**
     * 判断页面组件以此判断当前显示页面，导航栏随之改变
     * @memberof TabComponent
     */
    ngAfterContentChecked() {
        const elem = document.getElementsByTagName("app-root")[0].children[1].nodeName;
        if (elem == "INDEXER") {
            this.chats = true;
            this.contacts = false;
            this.personal = false;
            this.discover = false;
        } else if (elem == "NAME-LIST") {
            this.contacts = true;
            this.chats = false;
            this.personal = false;
            this.discover = false;
        } else if (elem == "PERSONAL") {
            this.contacts = false;
            this.chats = false;
            this.personal = true;
            this.discover = false;
        } else {
            this.contacts = false;
            this.chats = false;
            this.personal = false;
            this.discover = true;
        }
    }
}