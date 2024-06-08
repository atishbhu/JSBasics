// const iphone = {
//   name: 'iphone 13',
//   price: '100000',  // String representation of a number
//   desc: 'This is iphone 13',
//   rating: 4.8,

//   display: () => {
//     console.log(this);
//   }
// };

// iphone.display();

const iphone = {
  name: 'iphone 13',
  price: '100000',  // String representation of a number
  desc: 'This is iphone 13',
  rating: 4.8,
  display: ()=> {
      let another= {
      name: 'iphone 13',
      price: '100000', 
      desc: 'This is iphone 13',
      rating: 4.8,
      display: () => {
          console.log(this);
      }
      }
      
      another.display()
  },
  
};

iphone.display();
