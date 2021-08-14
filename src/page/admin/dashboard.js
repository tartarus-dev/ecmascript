import SideBarAdmin from '../../components/SideBarAdmin'
import { CheckLogin } from '../../utils';

const DashBoards = {
  render() {
   
    return /*html*/ `
        <div class="flex">
       ${SideBarAdmin.render()}
    <main class="w-4/5" >
    Welcome to Admin ^^!
    </main>

        </div>

    
        `;
  },
};
export default DashBoards;
