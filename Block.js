import {sha256} from 'crypto.js';
export default class Block{
    data;
    hash;
    previousHash;
    timeStamp;
    height;
    nonce;

    constructor(data, hash, previousHash, timeStamp, height, nonce){
        this.data = data;
        this.hash = hash;
        this.hash = this.mining(data);
        this.previousHash =previousHash;
        this.timeStamp = timeStamp;
        this.height = height;
        this.nonce = nonce;
    }

    setNonce(nNonce){
        this.nonce = nNonce
        console.log("the new nonce: " + this.nonce)
    }
calculateHash(){
    return sha256(this.height +this.timeStamp+
         this.data + this.previousHash).toString()
}


mining(nData){
    var nonce = 0;
    var numOfGuesses = 0;
    var difficulty = 1;

    console.log(this.timeStamp)
    for (let i = 0; i < 10000000; i++) { 
        let magicHash = sha256(nData + nonce + this.timeStamp).toString()
        console.log(magicHash)
        console.log(nonce)
            if (magicHash.substring(0, difficulty) == "".padStart(difficulty, "0")){

                console.log("magic hash : " + magicHash)
                console.log("we found the hash with "+numOfGuesses+" guesses")
                console.log("Time: " + this.timeStamp)

                return magicHash+this.timeStamp+nonce
            }
        numOfGuesses ++; 
        nonce ++;
        }
    }

}