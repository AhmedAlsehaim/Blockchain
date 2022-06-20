import { sha256 } from "crypto.js";
import Block from "./Block.js"
export default class BlockChain{
    constructor(){
    this.chain = []
    this.init();
}
    init(){
        if(this.chain.length == 0){
            let block = new Block("Genesis","",Date.now().toString(),0)
            this.chain.push(block)
            console.log(this.chain)
        }
    }


    addBlock(data) {
        if(this.chain.length==0){
            return
        }

        let nBlock = new Block(data,this.chain[this.chain.length-1].hash,Date.now(),this.chain.length)
        this.chain.push(nBlock)
        console.log(nBlock)
    }


    validateBlockchain(){
        
        for (let i = 1; i < this.chain.length; i++) {
            let curBlock = this.chain[i]
            let prevBlock = this.chain[i-1]
            if(curBlock.previousHash!==prevBlock.hash){
                return false
            }
            if(curBlock.hash!==curBlock.calculateHash()){
                return false
            }

        }
        console.log("Valid Chain")
        return true
    }
}


