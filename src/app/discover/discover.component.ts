import { Component } from '@angular/core';

@Component({
    selector: 'discover',
    template: `
    <div class="container-fluid">
        <div class="row title">
            <div class="col text-black text-center" style="height: 60px">
                <p>Discover</p>
            </div>
        </div>
        <div class="moments">
            <img class="icon" src="../../assets/moments.png" />
            <span>Moments</span>
            <img class="enter" src="../../assets/enter.png" />
        </div>
    </div>
    `,
    styles: [`
    .container-fluid {
        background-color: rgba(237,237,237,.85);
        height: 607px;
    }
    .title {
        height: 65px;
        padding: 0;
        font-weight: 500;
        font-family: Arial, Helvetica, sans-serif;
    }
    p {
        line-height:60px;
        font-size: 18px;
        margin: 0;
    }
    .moments {
        height: 54px;
        background: white;
        border-bottom:  rgba(0,0,0,.08) 1px solid;
        border-top:  rgba(0,0,0,.08) 1px solid;
        line-height: 54px;
        margin: 0 -15px;
    }
    .icon {
        width: 30px;
        height: 30px;
        margin: 0 16px;
    }
    .enter {
        position: fixed;
        right: 14px;
        width: 20px;
        height: 20px;
    }
    .moments .enter {
        margin-top: 18px;
    }
    `]
})
export class DiscoverComponent {
}