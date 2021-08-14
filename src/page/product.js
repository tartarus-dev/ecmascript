import { $ } from "../utils";
import Header from "../components/header";
import Footer from "../components/footer";
import CategoryApi from "../api/catgoryApi";
// import {products} from '../db/data';
import productAPI from "../api/productAPI";
const ProductPage = {
  async render() {
    try {
      const { data: products } = await productAPI.list();
      const { data: categories } = await CategoryApi.list();
      console.log(products);
      // const response = await fetch('http://localhost:3001/products');
      // const data = await response.json();
      const result = products.map(product => {
          return /*html*/ `
          
          <div class=" h-auto group overflow-hidden">
          <a href="#/products/${product.id}">
          <div class=" w-full h-96 bg-gray-500 bg-no-repeat bg-cover bg-center  "
                style="background-image: url('${product.image}');">
            </div>
          </a>
            <div class="text-center mt-5">
            <a  class="text-md font-normal uppercase text-gray-500 ">${product.name}</a>    
                <div class="flex mt-3">
                        <div class="flex-1">
                        <button class="border-b-2 border-black font-bold  text-sm add-to-cart focus:outline-none transform -translate-x-32 group-hover:translate-x-20 transition-all duration-500" data-id="${product.id}">ADD TO CARD</button>
                        </div>
                        <div class="flex-1">
                        <p class="font-extrabold text-md transform -translate-x-16 group-hover:translate-x-40 transition-all duration-500">$${product.price}</p>
                        </div>
                </div>
            </div>
        </div>
              `
      }).join("")
          
      return /*html*/ `
            <div>
                ${await Header.render()}
                <!-- products  -->
                <div>
                  <h2 class="text-3xl font-bold text-center pt-12 pb-4">All Products</h2>
                </div>
          <div class="grid grid-cols-4 gap-4 mt-6 px-64"id="list_product_page">
          
            <div>
                <div class="border border-gray-800 w-3/4">
                    <p class="border bg-gray-800 text-white text-center"> Categories</p>
                    <div class="grid text-center border-b-gray-800">
                    ${categories.map(category => {
                      return `<a href="/#/category/${category.id}">${category.name}</a>`
                  }).join("")}
                    </div>
                </div>
            </div>


          
            <div class="col-span-3 ...">
            <div class="grid grid-cols-3 gap-8">${result}</div>
            </div>
                    
                    </div>
                ${Footer.render()}
            </div>
        `;
    } catch (error) {
      console.log(error);
    }

    // const products = getListProducts();
    // console.log(products);

    // fetch('http://localhost:3001/products')
    // .then(response => response.json())
    // .then(data => console.log(data))

    // const result = products.map(product =>{
    //     return /*html*/`
    //         <div>
    //             <img src="${product.image}">
    //             <a href="#/product/${product.id}">${product.name}</a>
    //         </div>
    //     `
    // }).join("");

    // console.log(result);
    // return /*html*/`
    //     <div>
    //         ${Header.render()}
    //         <div class="bg-gray-200">Product Page</div>
    //         <section class="grid grid-cols-8">
    //             ${result}
    //         </section>
    //         ${Footer.render()}
    //     </div>
    // `
  },
};

export default ProductPage;
