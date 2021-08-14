import Header from "../../components/header";
import Footer from "../../components/footer";
import  authApi  from "../../api/auth";
import {$, reRender} from './../../utils';

const SigninPage = {
    async render() {
        return /*html*/ `
        ${await Header.render()}

        <!-- signin  -->
        <div class="text-3xl pt-8 pb-4 font-bold text-center">
            <p>ĐĂNG NHẬP</p>
        </div>
        <div class="w-full max-w-xs m-auto">
            <form id="form-signin" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign In
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-800 hover:text-blue-800" href="#/signup">
                    Create an Account
                </a>
            </div>
            </form>     
        </div>
        ${Footer.render()}
        `
    },
    async afterRender(){
        $('#form-signin').addEventListener('submit' , async e => {
            e.preventDefault();
            const user = {
                email: $('#email').value,
                password: $('#password').value
            }
            
            fetch("http://localhost:4000/api/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                localStorage.setItem("user", JSON.stringify(data));
                alert('Đăng nhập thành công')
                window.location.hash = '/'
            })

        })
    }
}

export default SigninPage;