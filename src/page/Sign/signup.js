import Header from "../../components/header";
import Footer from "../../components/footer";
import  authApi  from "../../api/auth";
import {$} from './../../utils'
const SignupPage = {
    async render() {
        return /*html*/ `
        ${await Header.render()}

        <!-- signin  -->
        <div class="text-3xl pt-8 pb-4 font-bold text-center">
            <p>ĐĂNG KÝ</p>
        </div>
        <div class="w-full max-w-xs m-auto">
            <form id="form-signup" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign Up
                </button>
            </div>
            </form>
        </div>
        ${Footer.render()}
        ` 
    },
    async afterRender(){
        $('#form-signup').addEventListener('submit' , async e => {
            e.preventDefault();
            const user = {
                name: $('#username').value,
                password: $('#password').value,
                email: $('#email').value
            }
            // console.log(user);
            authApi.signup(user);
            window.location.hash = '#/signin'
        })
        
    }
}
export default SignupPage;
