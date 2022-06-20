import {sha256} from 'crypto.js';
export default class Block{
    data;
    hash;
    previousHash;
    timeStamp;
    height;
    nonce;

    constructor(data, previousHash, timeStamp, height){
        let nonceAndHash = this.mining()
        this.data = data;
        this.hash = nonceAndHash[0];
        this.previousHash =previousHash;
        this.timeStamp = timeStamp;
        this.height = height;
        this.nonce = nonceAndHash[1];
    }

calculateHash(){
    return sha256(this.data + this.height + this.previousHash + this.timeStamp + this.nonce).toString()
}


mining(){
    var nonce = 0;
    var numOfGuesses = 0;
    var difficulty = 1;

    console.log(this.timeStamp)
    for (let i = 0; i < 10000000; i++) { 
        let magicHash = sha256(this.data + this.height + this.previousHash + this.timeStamp + nonce).toString();
        console.log(magicHash)
        console.log(nonce)
            if (magicHash.substring(0, difficulty) == "".padStart(difficulty, "0")){

                console.log("magic hash : " + magicHash)
                console.log("we found the hash with "+numOfGuesses+" guesses")
                console.log("Time: " + timeStamp)
                
                return [magicHash,nonce]
            }
        numOfGuesses ++; 
        nonce ++;
        }
    }

}