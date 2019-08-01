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
                <li *ngFor="let item of items" class="list-group-item" (click)="enterChat(item.id)">
                    <div class="portrait"><img class="m-2" /></div>
                    <p class="name mt-1">{{ item.name }}</p>
                    <p class="time mt-2 text-secondary">{{ item.time ? item.time[0] : '' }}</p>
                    <p class="mess text-secondary">{{ item.mess ? item.mess[item.mess.length - 1] : '' }}</p>
                </li>
            </ul>   
        </div>
    </div>
    `,
    styleUrls: ["./indexer.component.css"]
})
export class IndexerComponent {
    constructor(private router: Router,
        private dataService: DataService) {}

    // ngOnInit() {
    //     this.items = this.dataService.items;
    // }

    enterChat(id: number) {
        this.router.navigateByUrl("/chat/" + id);
    }

    /**
     * 获取存入到service中的数据
     * 运用data[],实现先聊天的item展示在后聊天的item下
     * @readonly
     * @memberof IndexerComponent
     */
    get items() {
        let items = [];
        let data = [];
        const caCheValue = this.dataService.caCheValue;
        console.log(caCheValue)
        if (caCheValue) {
            for (let i in caCheValue) {
                items.push(caCheValue[i]);
            }
            const length = items.length;
            for (let j = 0; j < length; j++) {
                data.push(items.pop());
            }
        }
        return data;
    }
}