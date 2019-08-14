import { Component, OnInit, ElementRef, ViewChild, AfterViewChecked } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";

@Component({
    templateUrl: "chat.component.html",
    styleUrls: ["chat.component.css"]
})
export class ChatComponent implements OnInit, AfterViewChecked {
    isVoice = true;
    isEmoji = false;
    isMore = false;
    date: any;
    hour: any;
    minute: any;
    newTime: any;
    items: any;
    id: number = 0;
    enterMess: string = "";
    MIN_INPUT_HEIGHT: number = 40;

    @ViewChild("scrollMiddle", {static: true}) private scrollMiddle: ElementRef;
    @ViewChild("more", {static: true}) private moreElem: ElementRef;
    
    constructor(private activatedRoute: ActivatedRoute,
                private dataService: DataService) {
                    const nowRouter = this.activatedRoute['_routerState'].snapshot.url;
                    this.id = parseInt(nowRouter.split('/')[2]);
                }

    /**
     * 页面初始化运行scrollToBottom函数，计算页面滚动高度
     * 从data.service中获取所有联系人的data
     * @memberof ChatComponent
     */
    ngOnInit() {
        this.scrollToBottom();
        this.items = this.dataService.items; 
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    /**
     * 计算页面滚动高度，保证发消息时滚动条可以滚到底部
     * @memberof ChatComponent
     */
    scrollToBottom(): void {
        try {
            const elem = this.scrollMiddle.nativeElement;
            elem.scrollTop = elem.scrollHeight;
        } catch(err) {
            console.log(err)
        }
    }

    /**
     * 根据路由的id值获取对应的name
     * @readonly
     * @memberof ChatComponent
     */
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

    /**
     * 点击返回键返回到上一次的页面，使用了原生js回退
     * @memberof ChatComponent
     */
    back() {
        // this.router.navigateByUrl("/contacts");
        history.back();
    }
    
    /**
     * 改变isVoice的值，以便改变输入框
     * @param {*} isVoice 从html传过来的值
     * @return this.isVoice 是传过去html的值
     * @memberof ChatComponent
     */
    change(isVoice) {
        this.isVoice = !isVoice;
        this.isEmoji = false;
        this.isMore = false;
    }
    /**
     * 方法是为了在点击表情或者更多时，若此时为发语音状态改为打字状态
     * 以及点击表情包就出现表情包界面，点击更多就出现更多界面
     * @param {*} isEmoji
     * @memberof ChatComponent
     */
    showEmoji(isEmoji) {
        this.isEmoji = !isEmoji;
        if (this.isVoice === false) {
            this.isVoice = !this.isVoice;
        }
        if (this.isMore === true) {
            this.isMore = !this.isMore;
        }
    }
    showMore(isMore) {
        this.isMore = !isMore;
        if (this.isVoice === false) {
            this.isVoice = !this.isVoice;
        }
        if (this.isEmoji === true) {
            this.isEmoji = !this.isEmoji;
        }
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
        const input = document.getElementsByTagName("input")[0];
        input.value = "";
        this.dataService.setValue(this.id, this.name, enterMess, this.newTime);
    }
    getEnterMess(e) {
        this.enterMess = e;
    }

    get time() {
        let time = '';
        if (this.dataService.caCheValue[this.id + this.name]) {
            time = this.dataService.caCheValue[this.id + this.name].time[0];
        }
        return time;
    }
    get mess() {
        let mess = [];
        const span = document.getElementsByClassName("mess");
        const triangle = document.getElementsByClassName("triangle");
        if (this.dataService.caCheValue[this.id + this.name]) {
            mess = this.dataService.caCheValue[this.id + this.name].mess;
            try {
                for (let i=0; i<mess.length; i++) {
                    if (mess[i].indexOf(".png") !== -1 && mess[i].indexOf("emoji/") !== -1 && span.length !== 0) {
                        span[i].innerHTML = "<img src='../../assets/" + mess[i] + "' style='width: 22px;height: 22px;'/>";
                    }
                    else if (mess[i].indexOf(".png") !== -1 && mess[i].indexOf("like/") !== -1 && span.length !== 0) {
                        triangle[i].setAttribute("style", "display:none");
                        span[i].setAttribute("style","background:none;border:none;padding:0;");
                        span[i].innerHTML = "<img src='../../assets/" + mess[i] + "'/>";
                    }
                }
            } catch(err) {}
        }
        return mess;
    }
}