import { Component } from '@angular/core';

@Component({
    selector: 'search',
    template: `
    <div class="container-fluid">
        <div class="search" *ngIf="total">
            <div><img src="../../assets/search.png" /></div>
            <input placeholder="Search" />
            <span (click)="close()">取消</span>
        </div>
        <div class="detail" *ngIf="!total">
            <div class="back"><img src="../../assets/back_search.png" (click)="back()" /></div>
            <div class="icon"><img src="../../assets/{{type}}_search.png" /></div>
            <input placeholder="Search {{ type }}" />
            <span (click)="close()">取消</span>
        </div>
        <div class="type" *ngIf="total">
            <p class="text-center">Search by Type</p>
            <table class="text-center">
                <tr>
                    <td *ngFor="let type of ftypes;let i = index" 
                    class="index{{i}}" (click)="searchDetail(type)">{{ type }}</td>
                </tr>
            </table>
            <table class="text-center">
                <tr>
                    <td *ngFor="let type of stypes;let i = index" 
                    class="index{{i}}" (click)="searchDetail(type)">{{ type }}</td>
                </tr>
            </table>
        </div>
    </div>
    `,
    styles: [`
    .container-fluid {
        background-color: rgba(237,237,237,1);
        height: 100%;
    }
    .search {
        padding-top: 10px;
    }
    .search > div, .icon {
        width: 36px;
        height: 40px;
        background: white;
        outline: none;
        border-top: rgba(0,0,0,.08) 1px solid;
        border-bottom: rgba(0,0,0,.08) 1px solid;
        border-left: rgba(0,0,0,.08) 1px solid;
        border-right: 0;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    img {
        width: 18px;
        height: 18px;
        position: relative;
        top: 6px;
        left: 10px;
    }
    input {
        position: relative;
        top: -40px;
        left: 36px;
        outline: none;
        border-top: rgba(0,0,0,.08) 1px solid;
        border-bottom: rgba(0,0,0,.08) 1px solid;
        border-right: rgba(0,0,0,.08) 1px solid;
        border-left: 0;
        height: 40px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        width: 76%;
    }
    input::-webkit-input-placeholder {
        font-size: 20px;
        color: #9c9c9c;
    }
    span {
        margin-left: 12px;
        font-size: 18px;
        color: #636989;
    }
    .search > span { 
        position: relative;
        top: -40px;
        left: 36px;
    }
    .detail > span { 
        position: relative;
        top: -80px;
        left: 66px;
    }
    .type > p {
        color: #9c9c9c;
        font-size: 18px;
    }
    table {
        margin-top:30px;
        width: 84%;
        margin-left: 8%;
        color: #636989;
        height: 40px;
    }
    td.index0 ,td.index1 {
        width: 33%;
        border-right: 1px rgba(0,0,0,.08) solid;
    }
    .detail {
        padding-top: 10px;
    }
    .back {
        width: 30px;
        height: 40px;
    }
    .back img {
        width: 30px;
        height: 30px;
        position: relative;
        left: 0;
    }
    .icon {
        position: relative;
        top: -40px;
        left: 30px;
    }
    .detail input {
        position: relative;
        top: -80px;
        left: 66px;
        width: 67%;
    }
    `]
})
export class SearchComponent {
    public ftypes = ["Moments", "Articles", "Official Accounts"];
    public stypes = ["Mini Programs", "Music", "Stickers"];
    public total: boolean = true;
    public type: string = "";

    close() {
        const search = document.getElementsByTagName("search")[0];
        search.setAttribute("style","display:none");
        this.total = true;
    }

    searchDetail(type) {
        this.total = false;
        this.type = type;
    }

    back() {
        this.total = true;
    }
}