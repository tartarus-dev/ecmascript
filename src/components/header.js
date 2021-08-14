
const Header = {
     render() {
        
        return /*html*/`
            <div class="flex justify-around w-full items-center py-3 bg-white px-64 bg-gray-500">
            <img class="w-1/6" src="../images/logo/logontd.jpg">
            <ul class="flex">
                <li class="px-3 text-white">
                    <a href="#/">Home</a>
                </li>
                <li class="px-3 text-white">
                    <a href="#/About">About</a>
                </li>
                <li class="px-3 text-white">
                    <a href="#/Product">Menu</a>
                </li>
                <li class="px-3 text-white">
                    <a href="#/admin">Admin</a>
                </li>
            </ul>
            <div>
                <input class="border-2 border-blue-900 rounded-lg px-3 py-1" type="text" placeholder="Tìm kiếm...">
                <button class="bg-gray-900 rounded-lg px-3 py-2 text-white" type="submit">Tìm Kiếm</button>
            </div>

            <div>
                <a class="" href="#/signin"><img class="w-1/4" src="././images/icon/user.png " alt=""></a>
            </div>
            
            </div>
        `
    }, afterRender(){}
}
export default Header;