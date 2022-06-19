import Block from "./Block.js"
export default class BlockChain{
    constructor(){
    this.chain = []
    this.init();
}
    init(){
        if(this.chain.length == 0){
            let block = new Block("hello","hash","Genesis",Date.now().toString(),0,10)
            this.chain.push(block)
            console.log(this.chain)
            console.log("the new nonce: " +block.nonce)
        }
    }


    addBlock(data) {
        if(this.chain.length==0){
            return
        }

        let block = new Block(data,"hash",this.chain[this.chain.length-1].getHash(),Date.now(),this.chain.length,0)
    }

    validateBlockchain(){
        flag = true;
        for (let i = 1; i < this.chain.length; i++) {
            if(this.chain[i].previousHash!=this.chain[i-1].getHash){
                flag = false
                return flag
            }
            hashCheck = new Block().calculateHash(this.chain[i].data,this.chain[i].nonce,this.chain[i].timeStamp)
            if(this.chain[i].getHash!=hashCheck){
                flag = false
                return flag
            }

        }
        return flag
    }
}

new BlockChain()