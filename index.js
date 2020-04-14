var app = new Vue({
el: "#app",
data: {
  product: "Socks",
  description:"100% cotton",
  image_sock:"./assets/green.png",
  my_link:"https://www.google.com",
  inventory:12,
  details:["80% cotton", "20% polyester", "Gender-neutral"],
  variants:[{
      variantId: 2234,
      variantColor: "green",
      variantImage: "./assets/green.png"
  },{
    variantId: 2235,
    variantColor: "blue",
      variantImage: "./assets/blue.png"
  }],
  sizes:[12.5,9, 9.5],
  cart:0
 },
 methods:{
   addToCart(){
     if(this.inventory>0){
      this.cart++;
      this.inventory--;
     }     
   },       
   removeFromCart(){
    if(this.cart>0){
      this.cart--;
      this.inventory++;
    } 
   },
   updateProduct(productImage) {
     this.image_sock = productImage;
   }
 }
})