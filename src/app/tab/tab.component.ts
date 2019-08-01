import { Component, OnInit, OnDestroy, Input, AfterContentInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'tab',
    template: `
    <div class="tab">
       <a [routerLink]="['index']" class="tab-item" [ngClass]="{active: chats}">Chats</a>
       <a [routerLink]="['contacts']" class="tab-item" [ngClass]="{active: contacts}">Contacts</a>
       <a class="tab-item">Discover</a>
       <a class="tab-item">Me</a>
    </div>
    `,
    styles: [`
    .tab {
        display: flex;
        line-height: 80px;
        height: 60px;
        background: #f5f5f5;
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
        color: limegreen;
    }
    `]
})
export class TabComponent implements AfterContentChecked {
    public chats: boolean = true;
    public contacts: boolean = false;
    
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
        } else if (elem == "NAME-LIST") {
            this.contacts = true;
            this.chats = false;
        }
    }
}