import {sha256} from 'crypto.js';
export default class Block{
    data;
    hash;
    previousHash;
    timeStamp;
    height;
    nonce;

    constructor(data, previousHash, timeStamp, height, nonce){
        this.data = data;
        this.hash = this.mining();
        this.previousHash =previousHash;
        this.timeStamp = timeStamp;
        this.height = height;
        this.nonce = nonce;

    }
calculateHash(){
    return sha256(this.height +this.timeStamp+
         this.data + this.previousHash).toString()
}


mining(){
    var nonce = 0;
    var numOfGuesses = 0;
    var difficulty = 2;
    console.log(this.timeStamp)
    for (let i = 0; i < 10000000; i++) {   
    let magicHash = sha256("Ahmed alsehaim" + nonce + this.timeStamp).toString()
    console.log(magicHash)
    
        if (magicHash.substring(0, difficulty) == "".padStart(difficulty, "0")){
            console.log("magic hash : " + magicHash)
            console.log("we found the hash with "+numOfGuesses+" guesses")
             
            return magicHash
        }
    numOfGuesses ++; 
    nonce ++;
    }
}

}

