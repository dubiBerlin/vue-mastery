var app = new Vue({
el: "#app",
data: {
  product: "Socks",
  description:"100% cotton",
  image_sock:"./assets/green.png",
  my_link:"https://www.google.com",
  inventory:1,
  details:["80% cotton", "20% polyester", "Gender-neutral"],
  variants:[{
      variantId: 2234,
      variantColor: "green",
      variantImage: "./assets/green.png"
  },{
    variantId: 2234,
    variantColor: "blue",
      variantImage: "./assets/blue.png"
  }],
  sizes:[12.5,9, 9.5],
  cart:0
 },
 methods:{
   addToCart(){
     this.cart++;
   },       
   removeFromCart(){
    if(this.cart>0){
      this.cart--;
    } 
   },
   updateProduct(productImage) {
     this.image_sock = productImage;
   }
 }
})