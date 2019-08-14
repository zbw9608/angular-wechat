import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    items = [{
        key: 'A',
        list: [{
            name: 'A1',
            id: 0,
            remark: ''
        }, {
            name: 'A2',
            id: 1,
            remark: ''
        }]
    }, {
        key: 'Z',
        list: [{
            name: 'Z1',
            id: 18,
            remark: ''
        }, {
            name: 'Z2',
            id: 19,
            remark: ''
        }]
    }, {
        key: '#',
        list: [{
            name: '--!',
            id: 20,
            remark: ''
        }, {
            name: '2020',
            id: 21,
            remark: ''
        }]
    }, {
        key: 'B',
        list: [{
            name: 'B1',
            id: 2,
            remark: ''
        }, {
            name: 'B2',
            id: 3,
            remark: ''
        }]
    }, {
        key: 'C',
        list: [{
            name: 'C1',
            id: 4,
            remark: ''
        }, {
            name: 'C2',
            id: 5,
            remark: ''
        }]
    }, {
        key: 'D',
        list: [{
            name: 'D1',
            id: 6,
            remark: ''
        }, {
            name: 'D2',
            id: 7,
            remark: ''
        }]
    }, {
        key: 'E',
        list: [{
            name: 'E1',
            id: 8,
            remark: ''
        }, {
            name: 'E2',
            id: 9,
            remark: ''
        }]
    }, {
        key: 'F',
        list: [{
            name: 'F1',
            id: 10,
            remark: ''
        }, {
            name: 'F2',
            id: 11,
            remark: ''
        }]
    }, {
        key: 'G',
        list: [{
            name: 'G1',
            id: 12,
            remark: ''
        }, {
            name: 'G2',
            id: 13,
            remark: ''
        }]
    }, {
        key: 'H',
        list: [{
            name: 'H1',
            id: 14,
            remark: ''
        }, {
            name: 'H2',
            id: 15,
            remark: ''
        }]
    }, {
        key: 'I',
        list: [{
            name: 'I1',
            id: 16,
            remark: ''
        }, {
            name: 'I2',
            id: 17,
            remark: ''
        }]
    }];
    
    public caCheValue = {};
    public caCheEmoji = {};
    constructor() {}

    public setValue(id: number, name: string, mess: any, time: any) {
        const index = id + name;
        if (!this.caCheValue[index]) {
            this.caCheValue[index] = {
                id: id,
                name: name,
                mess: [],
                time: []
            }
        }
        this.caCheValue[index].mess.push(mess);
        this.caCheValue[index].time.push(time);
    }

    public account = {
        portrait: "portrait",
        qq: 953526156,
        phone: 15521419608,
        psw: 123456,
        name: "寳文",
        id: "zbwww0324"
    }
}