import productAPI from '../api/productAPI';
import categoryApi from '../api/catgoryApi'
import { $ } from '../utils';
import { v4 as uuidv4 } from "uuid";
import firebase from '../firebase'

const ProductAddPage = {
    async render() {
      
      const { data: categories } = await categoryApi.list();
        return /*html*/`
        <form action="#" id="form-add" >
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 ">
                <label for="first_name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text"  id="product-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
              </div>
              <div class="col-span-6 ">
              <select id="cate-id"  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              ${categories.map(category => {
                return /*html*/ `
                  <option value="${category._id}">${category.name}</option>
                `
              })}
                </select>
              </div>
              <div class="col-span-6">
              <label for="last_name" class="block text-sm font-medium text-gray-700">Image</label>
              <input type="file"  id="product-image" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
            </div>
            <div class="col-span-6 ">
                <label for="first_name" class="block text-sm font-medium text-gray-700">Price</label>
                <input type="text"  id="price" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
              </div>
            <div class="col-span-6 ">
                <label for="first_name" class="block text-sm font-medium text-gray-700">Detail</label>
                <input type="text"  id="detail" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" value="Add product" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
        `
    },
    afterRender(){
      
        $('#form-add').addEventListener('submit', e => {
            e.preventDefault();
            
            const productImage = $('#product-image').files[0];
            let storageRef = firebase.storage().ref(`images/${productImage.name}`);
            storageRef.put(productImage).then(function(){
                console.log('Upload ảnh thành công');
                storageRef.getDownloadURL().then((url) => {
                    const product = {
                      // id: uuidv4(),
                      name: $('#product-name').value,
                      cateId: $('#cate-id').value,
                      image: url,
                      detail: $('#detail').value,
                      price: Number($('#price').value),
                      status: true
                  };
                  productAPI.add(product)
                })
            })


            
        })
    }
}
export default ProductAddPage;