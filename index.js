var app = new Vue({
el: "#app",
data: {
  brand:"Vue Mastery",
  product: "Socks",
  description:"100% cotton",
  // image_sock:"./assets/green.png",
  selectedVariant:0,
  my_link:"https://www.google.com",
  // inventory:12,
  details:["80% cotton", "20% polyester", "Gender-neutral"],
  variants:[{
      variantId: 2234,
      variantColor: "green",
      variantImage: "./assets/green.png",
      variantQuantity:0,
  },{
    variantId: 2235,
    variantColor: "blue",
    variantImage: "./assets/blue.png",
    variantQuantity: 10,
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
   updateProduct(index) {
     this.selectedVariant = index;
   }
 },
 computed:{
   title(){
     return `${this.brand} ${this.product}`;
    },
    image_sock(){
      return this.variants[this.selectedVariant].variantImage;     
    },
    inventory(){
      return this.variants[this.selectedVariant].variantQuantity;
    }

 }
})