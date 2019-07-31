import { Component, OnInit, OnDestroy, Input, AfterContentInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'tab',
    template: `
    <div class="tab">
       <a [routerLink]="['index']" class="tab-item active">Chats</a>
       <a [routerLink]="['contacts']" class="tab-item">Contacts</a>
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
        border-top: rgba(0,0,0,.125) 1px solid;
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
export class TabComponent {

}