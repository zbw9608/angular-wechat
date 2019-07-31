import { Component, Input, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";

@Component({
    templateUrl: "chat.component.html",
    styleUrls: ["chat.component.css"]
})
export class ChatComponent implements OnInit {
    isVoice = true;
    newMess: any = [];
    date: any;
    hour: any;
    minute: any;
    newTime: any;
    items: any;
    id: number = 0;
    

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private dataService: DataService) {
                    const nowRouter = this.activatedRoute['_routerState'].snapshot.url;
                    this.id = parseInt(nowRouter.split('/')[2]);
                }

    ngOnInit() {
        this.items = this.dataService.items; 
    }

    get name() {
        for (let key in this.items) {
            let list = this.items[key].list;
            for (let i = 0; i<list.length; i++) {
                let itemsId = list[i].id;
                if (this.id === itemsId) {
                    return list[i].name;
                }
            }
        }
    }

    back() {
        this.router.navigateByUrl("/contacts");
    }
    
    /**
     * 改变isVoice的值，以便改变输入框
     * @param {*} isVoice 从html传过来的值
     * @return this.isVoice 是传过去html的值
     * @memberof ChatComponent
     */
    change(isVoice) {
        this.isVoice = !isVoice;
    }

    getTime() {
        this.date = new Date();
        this.hour = this.date.getHours();
        this.minute = this.date.getMinutes();
        if (this.minute < 10) {
            this.minute = "0" +  this.minute;
        }
        let time = this.hour + ":" + this.minute;
        return time;
    }

    /**
     * 在页面上显示新发送的内容和时间，顺便清除input框中的内容
     * @param {string} enterMess input框输入的内容
     * @memberof ChatComponent
     */
    keyUpEnter(enterMess: string) {
        this.newTime = this.getTime();
        this.newMess.push(enterMess);
        const input = document.getElementsByTagName("input")[0];
        input.value = "";
    }
}