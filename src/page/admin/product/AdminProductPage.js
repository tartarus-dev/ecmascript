import SideBarAdmin from '../../../components/SideBarAdmin'
import productAPI from '../../../api/productAPI'
import ListProduct from '../../../components/ListProduct';
import { CheckLogin } from '../../../utils';

const ProductAdmin = {
    async render(){
      

        const {data : products} = await productAPI.list();

        return /*html*/`
        
         <div class="flex">
            ${SideBarAdmin.render()}
            
            <main class="w-4/5">
            <div class="pt-8 pb-8"><a class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-8 rounded-full" href="#/addproduct" >Creat Product</a></div>
            <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div id="list-products" class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    ${await ListProduct.render()}
                </div>
              </div>
            </div>
          </div>
            </main>
         </div>
        `
    },
    async afterRender(){
      return `${await ListProduct.afterRender()}`
    }
    
}
export default ProductAdmin;