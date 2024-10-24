class book{
    #author;
    #price;
    #rentprice;
    #copiavailable;
    constructor(author,price,rentprice,copiavailable){
        this.#author=author
        this.#price=price
        this.#rentprice=rentprice
        this.#copiavailable=copiavailable
    }
    getauthor(){
        return this.#author
    }
    setauthor(author){
        this.#author=author
    }
    getprice(){
        return this.#price
    }
    setprice(price){
        if(price>0){
            this.#price=price
        }
        else{
            console.log("price positive number.");
            
        }
    }
    buybook(){
        if(this.#copiavailable>0){
            this.#copiavailable--;
            console.log(`copi remaining-${this.#copiavailable}`);
            
        }
        else{
            console.log(`sorry, no available.`);
            
        }
    }
    rentbook(){
        if(this.#copiavailable>0){
            this.#copiavailable--;
            console.log(`copi remaining-${this.#copiavailable}`);
            
        }
        else{
            console.log(`sorry, no available.`);
            
        }
    }
    retunbook(){
        this.#copiavailable++;
        console.log(`copi remaining-${this.#copiavailable}`);
        
    }
    checkavailabil(){
        console.log(`copi remaining-${this.#copiavailable}`);
        return this.#copiavailable;
    }
}
let bookshop=new book("sqare","j.r.moehringer",15,4,5);

bookshop.checkavailabil();
bookshop.buybook();
bookshop.rentbook();
bookshop.retunbook();

bookshop.checkavailabil();
