import Header from '../components/header'
import Footer from '../components/footer'
import { useParams } from '../utils';
import productAPI from '../api/productAPI';
const ProductDetailPage = {
   async render() {
        const { id } = useParams();
        const { data: product } = await productAPI.read(id);
        console.log(id);
        return /*html*/`
        ${await Header.render()}
        <div>
      <h2 class="text-3xl font-bold text-center pt-8">Chi tiết sản phẩm</h2>
    </div>
        <div class=" w-full lg:max-w-full lg:flex pt-8 pb-20 pl-20">
        <div class="h-1/3 lg:h-auto lg:w-1/3 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <img src="${product.image}" alt="">
        </div>
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-1/4">
          <div class="">
            <div class="text-gray-900 font-bold text-xl mb-2">${product.name}</div>
            <p class="text-gray-700 text-base">${product.detail}</p>
          </div>
          <div>
          <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-8 rounded-full">
          BUY
        </button>
          </div>
          <div class="flex items-center">
            <div class="">
              <p class="text-gray-900 font-bold text-2xl ">$${product.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    

            ${Footer.render()}
        `
    },
    afterRender(){}
} 

export default ProductDetailPage;