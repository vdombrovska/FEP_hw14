const SIZE_SMALL = {
    price: 50,
    callories: 20,
};

const SIZE_MIDEUM = {
    price: 75,
    callories: 30,
};

const SIZE_BIG = {
    price: 100,
    callories:40,
};

const EXTRA_CHEESE = {
    price: 10,
    callories:20,
};

const EXTRA_LETTUCE = {
    price: 20,
    callories:5,
};

const EXTRA_FRIES = {
    price: 15,
    callories:10,
};

const EXTRA_SPICE = {
    price: 15,
    callories:0,
};

const EXTRA_MAYO = {
    price: 20,
    callories:5,
};
let extras ={};

let sumPrice = 0;
let sumCallories =0;

class Hamburger {
    constructor (price,callories){
     this.price = price ;
     this.callories = callories;
    }

    addTopping(custumersExtras){
        for (let key in custumersExtras) {
            extras[key] = custumersExtras[key];
          }
    }  
        
    getPrice () {
       return sumPrice + this.price
    }

    sumExtrasPrice(extras){
         sumPrice = Object.values(price).reduce((acc, value) => acc + value, 0)
    }
    
    getCallories(){
        return sumCallories + this.callories
    }

    sumExtrasCallories(extras){
        sumCallories = Object.values(callories).reduce((acc, value) => acc + value, 0)
    } 
    
}

const hamburger = new Hamburger(SIZE_BIG.price, SIZE_BIG.callories);
console.log ('Price with extras: ' + hamburger.getPrice());
console.log('Callories with extras: ' + hamburger.getCallories());
