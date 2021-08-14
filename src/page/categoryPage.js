import productAPI from "../api/productAPI";
import Header from "../components/header"
import Footer from "../components/footer"
import CategoryApi from "../api/catgoryApi"
import { useParams } from "../utils";

const CategoryPage = {   
    async render(){
        const { data: categories } = await CategoryApi.list();
        const { id } = useParams();
        console.log(id);
        const { data: products } = await productAPI.list();
        const result = products.filter(product => product.cateId == id).map(product => {
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
        }).join("");
        return /*html*/ `
        <div>
            ${await Header.render()}
            <!-- products  -->
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
    `
    }
}
export default CategoryPage;