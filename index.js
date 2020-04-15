Vue.component("product", {
  props:{
    premium:{
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img v-bind:src="image_sock" alt="Socke">
      </div>
      <div class="product-info">
        <h1>{{showBrand}}</h1>
        {{description}}
        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0" >Almost sold out</p>
        <p v-else :class="{outOfStock:inventory==0}">Out of Stock</p>
        Description:
        <productDetails :details="details" ></productDetails>
        Sizes:
        <ul>
          <li v-for="size in sizes">{{size}}</li>
        </ul>
        <button v-on:click="addToCart"
                :disabled="inventory==0"
                :class="{disabledButton: inventory==0}" >Add to Cart</button>
        <br/>
        <ul>
          <li v-for="(variant,index) in variants"
              :key="variant.variantId"
              class="color-box" 
              :style="{backgroundColor: variant.variantColor}"
              @mouseover="updateProduct(index)" >
            </li>
        </ul>
        <p>Shipping: {{shipping}}</p>
        <button v-on:click="removeFromCart">Remove from Cart</button>
      </div>
      <a v-bind:href="my_link">Google</a>        
  </div>`,
  data() {  
    return {
      brand:"Vue Mastery",
      product: "Socks",
      description:"100% cotton",
      onSale:true,
      selectedVariant:0,
      my_link:"https://www.google.com",
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
      sizes:[12.5,9, 9.5]
    }
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
  shipping(){
    if(this.premium){
      return "Free";
    }
    return "2.99 €";
  },
   title(){
     return `${ this.brand } ${this.product}`;
    },
    image_sock(){
      return this.variants[this.selectedVariant].variantImage;     
    },
    inventory(){
      return this.variants[this.selectedVariant].variantQuantity;
    },
    showBrand() {
      return this.onSale ? this.brand + " " + this.product:"";
    }
 }
})

Vue.component("productDetails", {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `<ul><li v-for="detail in details" >{{detail}}</li></ul>`
})




var app = new Vue({
  el: "#app",
  data:{
    premium: true,
    cart: 0
  }
})