import AboutPage from './page/about';
import HomePage from './page/Home'
import ProductPage from './page/product'
import ProductDetailPage from './page/product-detail';
import DashBoards from './page/admin/dashboard'
import {  useParams, $} from './utils';
import AdminProductPage from './page/admin/product/AdminProductPage'
import categoryAdminPage from './page/admin/category';
import addCategoryPage from './page/admin/category/add';
import Header from './components/header';
import CategoryPage from './page/categoryPage';
import ProductAddPage from './page/productAddPage';
import ProductEditPage from './page/ProductEditPage';
import EditCategoryPage from './page/admin/category/EditCategoryPage';
import SignupPage from './page/Sign/signup';
import SigninPage from './page/Sign/signin';

const routes = {
    '/' : HomePage,
    '/about' : AboutPage,
    '/product' : ProductPage,
    '/products/:id' : ProductDetailPage,
    '/category/:id' : CategoryPage,
    '/admin' : DashBoards,
    '/productadmin': AdminProductPage,
    '/categoryadmin':categoryAdminPage,
    '/addcategory':addCategoryPage,
    '/addproduct':ProductAddPage,
    '/editproduct/:id': ProductEditPage,
    '/editcategory/:id': EditCategoryPage,
    '/signup': SignupPage,
    '/signin': SigninPage
}
const router = async () => {
    const request = useParams();
    const parseUrl = (request.resource ? `/${request.resource}` : '/')  + (request.id ? '/:id' : '')
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Page;
    $('#header').innerHTML = await Header.render();
    const main = $('#root')
    // .innerHTML = await pageXOffset.render();
    main.innerHTML = await screen.render();
    await screen.afterRender();
    // const main = document.querySelector('#root');
    // main.innerHTML =  Home.render();
}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);  