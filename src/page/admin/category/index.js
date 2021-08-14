import SideBarAdmin from '../../../components/SideBarAdmin'
import categoryApi from '../../../api/catgoryApi'
import { useParams, $ } from '../../../utils';
import ListCategory from './ListCategory';
const categoryAdminPage = {
    async render(){
        const {data : category} = await categoryApi.list();
        
        return /*html*/`
         <div class="flex">
            ${SideBarAdmin.render()}
            <main class="w-4/5">
            <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <div class="pt-8 pb-8"><a class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-8 rounded-full" href="/#/addcategory">Add category</a></div>
                  </div>

                  <div>
                    ${ await ListCategory.render()}
                  </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
            </main>
         </div>
        `
    },
    async afterRender(){
      return `${ await ListCategory.afterRender()}`
    }
    
}
export default categoryAdminPage;