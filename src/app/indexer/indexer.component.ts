import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
    selector: "indexer",
    template: `
    <div class="container-fluid">
        <div class="row title">
            <div class="col text-black text-center" style="height:60px">
                <p style="line-height:60px;font-size: 20px">WeChat</p>
            </div>
        </div>
        <input placeholder="Search" />
        <div class="row">
            <ul style="width: 100%;" class="listGroup">
                <li *ngFor="let item of items" class="list-group">
                    <ul>
                        <li *ngFor="let list of item['list']" class="list-group-item" (click)="enterChat(list.id)">
                        <div class="portrait"><img class="m-2" /></div>
                        <p class="name mt-1">{{ list.name }}</p>
                        <p class="time mt-2 text-secondary">{{ list.time ? list.time : '11:08' }}</p>
                        <p class="mess text-secondary">{{ list.mess ? list.mess : 0 }}</p>
                        </li>
                    </ul>
                    
                </li>
            </ul>   
        </div>
    </div>
    `,
    styleUrls: ["./indexer.component.css"]
})
export class IndexerComponent implements OnInit{
    items: any;

    constructor(private router: Router,
        private dataService: DataService) {}

    ngOnInit() {
        this.items = this.dataService.items;
        console.log(this.items);
    }

    enterChat(id: number) {
        this.router.navigateByUrl("/chat/" + id);
    }
}