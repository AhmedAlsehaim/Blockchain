import Block from "./Block.js"
export default class BlockChain{
    constructor(){
    this.chain = []
    this.init();
}
    init(){
        if(this.chain.length == 0){
            let block = new Block("hello","Genesis",Date.now(),0,0)
            this.chain.push(block)
            console.log(this.chain)
        }
    }
     
}

new BlockChain()