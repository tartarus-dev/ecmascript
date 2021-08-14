import Header from '../components/header'
import Footer from '../components/footer'
const HomePage  = {
    async render(){
        return /*html*/`
            ${await Header.render()}
            <div class="pb-4">
                <img src="././images/logo/bannercf.jpg">
            </div>
        <div class="text-black pt-4 px-64">
            <div class="grid grid-cols-3">
                <div class="grid grid-cols-3">
                    <div>
                        <img class="w-1/2" src="././images/icon/dat.hang.truc.tuyen.png">
                    </div>
                    <div class="">
                        <h2 class="font-bold">Đặt hàng trực tuyến</h2>
                    </div>
                
                </div>
                <div class="grid grid-cols-3">
                    <div>
                        <img class="w-1/2" src="././images/icon/freeship.png">
                    </div>
                    <div class="">
                        <h2 class="font-bold">Miễn phí vận chuyển</h2>
                    </div>
                
                </div>
                <div class="grid grid-cols-3">
                    <div>
                        <img class="w-1/2" src="././images/icon/thanh.toan.an.toan.png">
                    </div>
                    <div class="">
                        <h2 class="font-bold">Thanh toán trực tuyến</h2>
                    </div>
                
                </div>
            </div>
        <div>
        <div class="ml-96 pt-8"><img class="w-1/3" src="././images/logo/logontd.jpg"></div>
        <h2 class="text-4xl font-bold text-center p-2   ">COFFEE HOUSE</h2>
        <p class=" py-3 text-xl">
        Sử dụng nguồn nguyên liệu sạch, thuần Việt kết hợp với công thức pha phin độc đáo, Coffee nhanh chóng chinh phục được những khách hàng khó tính nhất bằng hương vị đậm đà, “chuẩn gu” theo đúng chất cà phê Việt.</p>
        </div>
        
        <h1 class="text-2xl py-5 text-center font-bold py-8">CÔNG THỨC</h1>

        <div class="grid grid-cols-3 gap-8 pb-5" >
            <div class="flex-col flex justify-center items-center">
                <img class="" src="../images/logo/cf1.jpg">
                <h2 class="font-bold">HÀNH TRÌNH TỪ HẠT ĐẾN TÁCH CÀ PHÊ</h2>
                <p>Trước khi trở thành một tách cà phê hoàn hảo, hạt cà phê chin đỏ được chọn lọc kỹ lưỡng và rang xay công phu...</p>
            </div>

            <div class="flex-col flex justify-center items-center ">

                <img class="" src="../images/logo/cf2.jpg">

                <div class="text-center">
                <h2 class="font-bold">CÁCH RANG CÀ PHÊ THƠM NGON
                </h2>
                <p>
                Các hạt cà phê xanh và nguyên chất cần phải rang lên trước khi pha. Trong quá trình rang, các hạt cà phê nở ra...
                </p>
                </div>
                
            </div>

            <div class="flex-col flex justify-center items-center">
                <img class="" src="../images/logo/cf3.jpg">
                <h2 class="font-bold">NGHỆ THUẬT PHỐI TRỘN CÀ PHÊ
                </h2>
                <p>
                Hỗn hợp cà phê được tạo khi bạn kết hợp nhiều loại hạt hoặc hương vị khác nhau. Bạn có thể rang hạt cà phê...
                </p>
            </div>


        </div>
                <div class="bg-yellow-100 mt-8">
                <h2 class="text-3xl font-bold text-center p-8 ">TỔNG HỢP</h2>
                    <div class=flex>
                        <div class="flex-1 leading-tight p-4">
                            <p class="text-2xl border-b-2 border-gray-900 w-1/3 ">CAPPUCCINO</p>
                            <p class="">
                            Cafe capuchino là cà phê được pha chế theo cách uống cà phê của người Ý, nay đã trở thành thức uống nổi tiếng trên thế giới, được mọi người yêu thích trong đó có Việt Nam.</p>
                        </div>
                        <div class="flex-1 leading-tight p-4 ">
                            <p class="text-2xl border-b-2 border-gray-900 w-1/3">CAFE MOCHA</p>
                            <p class="">
                            Mocha là 1 loại cafe được tạo cho từ Espresso & nữa nóng, thêm hương vị chocolate (có thể là bột chocolate hoặc sauce chocolate).

Vị đắng và lắng đọng của chocolate được hòa quyện hoàn hảo và tuyệt vời nhất với vị đắng đậm đà của café & dậy lên vị béo ngậy của sữa tươi được đánh nóng, lớp bọt sữa mịn màng đã tạo nên hương vị café đầy lôi cuốn, đưa Mocha trở thành thứ thức uống ưa thích của nữ giới & người trẻ tuổi.</p>
                        </div>
                    </div>
                    <div class=flex>
                        <div class="flex-1 leading-tight p-4">
                            <p class="text-2xl border-b-2 border-gray-900 w-1/3">ESPRESSO</p>
                            <p class="">
                            Espresso là café được pha bằng máy, sử dụng nước nóng nén bởi áp suất cao qua lớp bột cà phê được xay mịn. Nước dùng để pha chế Espresso là nước tinh khiết, còn cafe dùng để pha chế theo phương pháp này cũng phải là café rang mộc, không tẩm ướp bất kỳ tạp chất nào.</p>
                        </div>
                        <div class="flex-1 leading-tight p-4 ">
                            <p class="text-2xl border-b-2 border-gray-900 w-1/3">CAFE LATTE</p>
                            <p class="">
                            Latte là kiểu café sữa của Ý, được làm từ nguyên liệu chính là Espresso và sữa, trong đó Espresso chiếm 1/3, sữa nóng chiếm 1/3 và 1/3 còn lại là bọt sữa. Điều đặc biệt để tạo nên một ly Latte hấp dẫn đó chính là lớp bọt sữa được tạo hình nghệ thuật.
Nhiều người không quá sành về café sẽ rất dễ nhầm lẫn Latte với Cappuccino vì cả hai đều có 3 thành phần cơ bản là café Espresso, sữa nóng, bọt sữa và lớp bọt sữa được tạo hình. Tuy nhiên, với Cappuccino thì lượng sữa nóng có thể tương đương so với bọt sữa, còn với Latte, lượng bọt sữa chỉ bằng một nửa sữa nóng. Do đó, so với Cappuccino, Latte ít “bồng bềnh” hơn. Nếu thưởng thức theo đúng gu thì Cappuccino được uống trong những tách dày được hâm nóng trước, Latte lại được uống trong những chiếc ly khá to.</p>
                        </div>
                    </div>
                        <div class=flex>
                            <div class="flex-1 leading-tight p-4">
                                <p class="text-2xl border-b-2 border-gray-900 w-1/3">AMERICANO</p>
                                <p class="">
                                Cafe Americano, hay còn được gọi là Caffe Americano hoặc café Americano là một loại cà phê được tạo ra bằng cách thêm nước nóng vào espresso. Tuy café Americano được lấy cảm hứng từ Espresso nhưng lại được biến tấu cho phù hợp với thới quen uống café không quá đậm của lính Mỹ.</p>
                            </div>
                            <div class="flex-1 leading-tight p-4 ">
                                <p class="text-2xl border-b-2 border-gray-900 w-1/3">CAFE TRỨNG</p>
                                <p class="">
                                Lại là một loại cà phê ngon nhất Việt Nam được làm theo phương thức truyền thống với lòng đỏ trứng, đường, sữa đặc và cà phê Robusta. Cà phê trứng được pha chuẩn vị cần đạt yêu cầu thơm ngon, không bị tanh, bọt trứng được đánh bông, mềm mướt.</p>
                            </div>
                        </div>
                </div>
            </div>
                
                ${Footer.render()}
            
           
        `
    }
}
export default HomePage;