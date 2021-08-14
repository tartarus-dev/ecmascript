import Header from '../components/header'
import Footer from '../components/footer'
const AboutPage = {
    async render() {
        return /*html*/`
        ${await Header.render()}
                <h2 class="text-5xl font-bold text-center p-12">GIỚI THIỆU</h2>
                <div class="px-64">
                    <div>
                        <img src="../images/logo/bannerntd.jpg">
                    </div>
                    <div class="bg-gray-600">
                        <p class="text-4xl font-bold text-center text-white pt-12">KHỞI NGUỒN</p>
                        <p class="text-center text-white pl-24 pr-24 pt-4 pb-8 leading-loose">Từ tình yêu với Việt Nam và niềm đam mê cà phê, năm 1999, thương hiệu NTD Coffee® ra đời với khát vọng nâng tầm di sản cà phê lâu đời của Việt Nam và lan rộng tinh thần tự hào, kết nối hài hoà giữa truyền thống với hiện đại.

                        Bắt đầu với sản phẩm cà phê đóng gói tại Hà Nội vào năm 2000, chúng tôi đã nhanh chóng phát triển và mở rộng thành thương hiệu quán cà phê nổi tiếng và không ngừng mở rộng hoạt động trong và ngoài nước từ năm 2002.
                        
                        Qua một chặng đường dài, chúng tôi đã không ngừng mang đến những sản phẩm cà phê thơm ngon, sánh đượm trong không gian thoải mái và lịch sự. Những ly cà phê của chúng tôi không chỉ đơn thuần là thức uống quen thuộc mà còn mang trên mình một sứ mệnh văn hóa phản ánh một phần nếp sống hiện đại của người Việt Nam.
                        
                        Đến nay, Coffee® House vẫn duy trì khâu phân loại cà phê bằng tay để chọn ra từng hạt cà phê chất lượng nhất, rang mới mỗi ngày và phục vụ quý khách với nụ cười rạng rỡ trên môi. Bí quyết thành công của chúng tôi là đây: không gian quán tuyệt vời, sản phẩm tuyệt hảo và dịch vụ chu đáo với mức giá phù hợp.</p>
                    </div>
                    
                </div>





                ${Footer.render()}
        
        `
    }
}
export default AboutPage;