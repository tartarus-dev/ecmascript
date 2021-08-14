import productAPI from '../api/productAPI';
import { useParams, $ } from '../utils';
import categoryApi from '../api/catgoryApi';
import firebase from '../firebase';

const ProductEditPage = {
    async render(){
        const { id } = useParams();
        const { data : product } = await productAPI.read(id);
        const { data: categories } = await categoryApi.list();
        console.log(product);
        return /*html*/ `

        <form action="#" id="form-edit" >
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 ">
                <label for="product-name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="product-name" value="${product.name}" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
              </div>
              <div class="col-span-6 ">
              <select id="cate-id" value="${product.cateId}"  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              ${categories.map(category => {
                return /*html*/ `
                  <option value="${category._id}">${category.name}</option>
                `
              })}
                </select>
              </div>
              <div class="col-span-6">
              <label for="last_name" class="block text-sm font-medium text-gray-700">Image</label>
              <input type="file" id="product-image" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
            </div>
            <div class="col-span-6 ">
                <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                <input type="text" value="${product.price}"  id="price" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
              </div>
            <div class="col-span-6 ">
                <label for="detail" class="block text-sm font-medium text-gray-700">Detail</label>
                <input type="text" value="${product.detail}"  id="detail" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" value="Add product" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Update
            </button>
          </div>
        </div>
      </form>
        
        `
    },
    async afterRender(){
        const { id } = useParams();
        const { data : product } = await productAPI.read(id);

        $('#form-edit').addEventListener('submit', (e) => {
          e.preventDefault();
          const productImage = $('#product-image').files[0];

          if(productImage==true){
            let storageRef = firebase.storage().ref(`images/${productImage.name}`);
            storageRef.put(productImage).then(function(){
                console.log('Upload ảnh thành công');
                storageRef.getDownloadURL().then((url) => {
                
                    const newProduct = {
                      ...product,
                      name: $('#product-name').value,
                      cateId: $('#cate-id').value,
                      image: url,
                      detail: $('#detail').value,
                      price: Number($('#price').value)
                  };
                  productAPI.update(id, newProduct)
                  window.location.hash = '#/productadmin'
                })
            })
          }else{
              const newProduct = {
                ...product,
                name: $('#product-name').value,
                cateId: $('#cate-id').value,
                detail: $('#detail').value,
                price: Number($('#price').value)
            };
            productAPI.update(id, newProduct)
            window.location.hash = '#/productadmin'
          }


      })
    }
}
export default ProductEditPage;