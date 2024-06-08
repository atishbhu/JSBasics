class Product {
    name;
    price;
    desc;
    rating;
    
    constructor(n,p,d,r) {
        this.name = n;
        this.price = p;
        this.desc = d;
        this.rating = r;
        //return 10 -> no effect
        //return {x:10} this object is going to be return
        //return this -> this is default return 
        /*
        1 -> if you retrun any primitive value then there will be no effect and `this` is going to be return
        2 -> if you are returning an object from contructor then that object is going to be return
        3 -> if you are not returning any things then `this` is going to be returned
        */
    }
    display() {
        /* there are no need to decalre function within class with function
        keyword
        */
    }
}

const p = new Product("iphone",10000,"This is iphone 13",4.8);
console.log(p);
