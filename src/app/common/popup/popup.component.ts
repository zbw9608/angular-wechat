import { Component } from '@angular/core';
 
@Component ({
    selector: 'popup',
    template: 
    `<div class="popup-mask">
        <div class="popup-maskBox">
            <table>
                <tr *ngFor="let func of funcs"> 
                    <td style="width: 16%;"><img src="../../assets/{{ func }}.png" /></td>
                    <td style="border-bottom: 1px rgba(237,237,237,.05) solid">{{ func }}</td>
                </tr>         
            </table>
            <div class="triangle"><span></span></div>
        </div>
    </div>`,
    styles: [`
        .popup-mask {
            background: #4c4c4c;
            color: white;
            font-size: 17px;
            border-radius: 5px;
        }
        table {
            margin-left: 20px;
        }
        tr {
            height: 60px;
        }
        img {
            width: 32px;
            height: 32px;
        }
        .triangle {
            width: 0;
            height: 0;
            border-right: 6px solid transparent;
            border-left: 6px solid transparent;
            border-bottom: 6px solid #4c4c4c;
            position: absolute;
            top: -6px; 
            right: 17px;       
        }
    `]
})
 
export class PopupComponent {
    public funcs = ["New Chat", "Add Contacts", "Scan", "Money"];
}