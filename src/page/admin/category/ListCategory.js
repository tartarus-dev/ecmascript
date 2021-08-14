import categoryApi from "../../../api/catgoryApi";
import { useParams, $, reRender } from '../../../utils';

const ListCategory = {
    async render(){
        const { data : category } = await categoryApi.list();
        return /*html*/ ` 
        <table id="list-cate" class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
            </th>
            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              NAME
            </th>
            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
            DESCRIPTION
            </th>
            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
            ACTION
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            ${category.map((category,index)=>{
                return /*html*/ `
                        <tr>
                        <td class="text-center">
                            ${index}
                        </td>
                    <td class="px-6 py-4 whitespace-nowrap text-center">           
                            ${category.name}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    ${category.description}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <a href="/#/editcategory/${category._id}"><button class="bg-main rounded-lg px-3 py-2 text-white" type="submit">Edit</button></a>
                      <button class=" bg-red-700 rounded-lg px-3 py-2 text-white btn" data-id="${category._id}">Delete</button>
                    </td>
                </tr>
                `
            }).join('')}
          
        </tbody>
      </table> 
        `
    },
    async afterRender(){
        const btns = $('#list-cate .btn');
        //  console.log(btns);
         btns.forEach(btn => {
             const id = btn.dataset.id;
             btn.addEventListener('click',async function(){
                 const question = confirm('Bạn có muốn xóa không?')
                  if(question){
                      await categoryApi.remove(id);
                      await reRender(ListCategory, '#list-cate')
                  }
             })
         });
      }
}
export default ListCategory;