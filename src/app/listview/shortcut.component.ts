import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
    selector: 'short-cut',
    template: `
    <div class="list-shortcut">
        <ul>
            <li *ngFor="let item of items, let i = index" class="item" 
            [ngClass]="{current: currentIndex==i}">
                <a href="contacts#{{ item.title }}" [ngClass]="{current: currentIndex==i}">{{ item.title }}</a>
            </li>
        </ul>
    </div>
    <div class="list-fixed" *ngIf="!isInput">
        <h1 class="fixed-title">{{ fixedTitle }}</h1>
    </div>`,
    styleUrls: ['./listview.component.css']
})
export class ShortcutComponent implements OnInit, OnDestroy {
    @Input() items: any[];

    public currentIndex: number = 0;
    public isInput: boolean = true;
    

    ngOnInit() {
        window.addEventListener('scroll', this.scrollEvent, true);
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scrollEvent, true);
    }

    scrollEvent = (event: any): void => {
        const elem = document.elementFromPoint(0, 95);
        if (elem.className === "listGroup") {
            this.isInput = true;
        } else {
            this.isInput = false;
        }
        if (elem && elem.attributes["data-group"]) {
            this.currentIndex = parseInt(elem.attributes["data-group"].value);
        }
    }

    get fixedTitle() {
        if (this.isInput === true) {
            return ''
        } else {
            let map = [];
            this.items.forEach((item, index) => {
                const key = item.title;
                if (map.indexOf(key) === -1) {
                    map.push(key);
                }
            })
            return map[this.currentIndex];
        }
    }
}