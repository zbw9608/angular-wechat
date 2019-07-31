import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: "name-list",
    template: `
    <div class="container-fluid">
        <div class="row title">
            <div class="col text-black text-center" style="height: 60px">
                <p style="line-height:60px;font-size: 20px">Contacts</p>
            </div>
        </div>
        <list-view [items]="items" class="row"></list-view>
        <short-cut [items]="items"></short-cut>
    </div>`,
    styles: [`
    .container-fluid {
        background-color: #f5f5f5;
        height: 100%;
    }
    .title {
        height: 65px;
        padding: 0;
        font-weight: 500;
        font-family: Arial, Helvetica, sans-serif;
    }
    `]
})
export class NamelistComponent implements OnInit{
    items: any;

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.items = this.normalizeName(this.dataService.items);
    }

    normalizeName(list) {
        let map = {};
        list.forEach(item => {
            const key = item["key"];
            const namelist = item["list"];
            if (!map[key]) {
                map[key] = {
                    title: key,
                    items: []
                }
            }
            for (let i of namelist) {
                map[key].items.push({
                    id: i.id,
                    name: i.name
                })
            }
        })
        let other = [];
        let ret = [];
        for (let key in map) {
            let val = map[key];
            if (val.title.match(/[a-zA-Z]/)) {
                ret.push(val);
            } else if (val.title === '#') {
                other.push(val);
            }
        }
        ret.sort((a, b) => {
            return a.title.charCodeAt(0) - b.title.charCodeAt(0);
        })
        if (other[0].items.length != 0) {
            return ret.concat(other);
        } else {
            return ret;
        }
    }
}