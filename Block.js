export default class Block{
    constructor(data, hash, previousHash, timeStamp, height, nonce){
        this.data = data;
        this.hash = hash;
        this.previousHash =previousHash;
        this.timeStamp = timeStamp;
        this.height = height;
        this.nonce = nonce;

    }
}

