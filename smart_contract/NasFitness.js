'use strict';


class Record {

    from;
    txHash;
    time;
    recordTime;
    tizhong;
    shengao;
    tizhilv;
    xiongwei;
    yaowei;
    tunwei;
    datuiwei;
    xiaotuiwei;
    biwei;

    constructor(text) {
        if (!text) {
            return;
        }
        const o = JSON.parse(text);
        this.from = o.from;
        this.txHash = o.txHash;
        this.time = o.time;
        this.recordTime = o.recordTime;
        this.tizhong = o.tizhong;
        this.tizhilv = o.tizhilv;
        this.shengao = o.shengao;
        this.xiongwei = o.xiongwei;
        this.yaowei = o.yaowei;
        this.tunwei = o.tunwei;
        this.datuiwei = o.datuiwei;
        this.xiaotuiwei = o.xiaotuiwei;
        this.biwei = o.biwei;
    }

    toString() {
        return JSON.stringify(this);
    }
}


const NasFate = function () {
    LocalContractStorage.defineMapProperty(this, 'userMap');
};

NasFate.prototype = {

    init: function () {
    },


    _push(collectionName, key, value) {
        let item = this[collectionName].get(key);
        if (!item) {
            item = [];
        }
        item.push(value);
        this[collectionName].put(key, item);
    },

    _get(collectionName, key) {
        let item = this[collectionName].get(key);
        if (!item) {
            item = [];
        }
        return item;
    },

    createRecord(recordTime, tizhong, shengao, tizhilv, xiongwei, yaowei, tunwei, datuiwei, xiaotuiwei, biwei) {
        const item = new Record();
        item.from = Blockchain.transaction.from;
        item.txHash = Blockchain.transaction.hash;
        item.time = Blockchain.transaction.timestamp * 1000;
        item.recordTime = recordTime;
        item.tizhong = tizhong;
        item.shengao = shengao;
        item.tizhilv = tizhilv;
        item.xiongwei = xiongwei;
        item.yaowei = yaowei;
        item.tunwei = tunwei;
        item.datuiwei = datuiwei;
        item.xiaotuiwei = xiaotuiwei;
        item.biwei = biwei;
        this._push("userMap", item.from, item);
        return item;
    },

    queryMyRecord(from) {
        return this._get("userMap", from);
    },
};
module.exports = NasFate;
