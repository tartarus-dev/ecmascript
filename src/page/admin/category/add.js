import { $ } from "../../../utils";
import categoryApi from "../../../api/catgoryApi";
import { v4 as uuidv4 } from "uuid";
// import firebase from 'firebase'
const addCategoryPage = {
  async render() {
    const { data: category } = await categoryApi.list();
    console.log(category);
    return /*html*/ `           
    <form action="#" id="form-add-cate" >
    <div class="shadow overflow-hidden sm:rounded-md">
      <div class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 ">
            <label for="first_name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text"  id="cate-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
          </div>

          <div class="col-span-6 ">
            <label for="first_name" class="block text-sm font-medium text-gray-700">Description</label>
            <input type="text"  id="description" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
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

        `;
  },
  async afterRender() {
    $('#form-add-cate').addEventListener('submit', function(e){
      e.preventDefault();
      const category = {
        id: uuidv4(),
        name: $('#cate-name').value,
        description: $('#description').value
      }
      categoryApi.add(category);
      
    })
        
  }
};
export default addCategoryPage;
