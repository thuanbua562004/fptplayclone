import React from "react";

export default function Footer() {
  return (
    <>
    <hr/>
    <div className="bg-black text-white/85 px-4" >
      <footer className="sm:px-[100px] lg:px-[180px] pt-10">
        <div className="flex flex-col  sm:flex-wrap justify-between border-b border-gray-700 pb-8 gap-6">
          <div className="flex   flex-wrap gap-5 text-sm max-w-full">
            <div className="min-w-[120px] flex-1">
              <h3 className="font-semibold mb-2">Về FPT Play</h3>
              <ul className="space-y-1">
                <li>
                  <a className="hover:underline font-semibold" href="#">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Các gói dịch vụ
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Liên hệ
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Trung tâm hỗ trợ
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Thông tin
                  </a>
                </li>
              </ul>
            </div>
            <div className="min-w-[120px] flex-1">
              <h3 className="font-semibold mb-2">Dịch vụ</h3>
              <ul className="space-y-1">
                <li>
                  <a className="hover:underline font-semibold" href="#">
                    Gói DATA
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Quảng cáo
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Mua gói
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Bảo hành
                  </a>
                </li>
              </ul>
            </div>
            <div className="min-w-[140px] flex-1">
              <h3 className="font-semibold mb-2">Quy định</h3>
              <ul className="space-y-1">
                <li>
                  <a className="hover:underline font-semibold" href="#">
                    Điều khoản sử dụng
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Chính sách thanh toán
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Chính sách bảo mật
                    <br />
                    thông tin dữ liệu
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-300 space-y-4 max-w-7xl">
          <p>
            Công ty Cổ phần Viễn Thông FPT - Người đại diện: Ông Hoàng Việt Anh.
            Trụ sở: Tầng 2, Tòa nhà FPT Cầu Giấy, Số 17 Phố Duy Tân, Phường Dịch
            Vọng Hậu, Quận Cầu Giấy, TP.Hà Nội
          </p>
          <p>
            Địa chỉ liên lạc: Tầng 9, Block A, tòa nhà FPT Cầu Giấy, số 10 Phạm
            Văn Bạch, Quận Cầu Giấy, TP. Hà Nội
            <br />
            Số điện thoại liên hệ: 024 7300 2222. Thư điện tử:
            hotrokhachhang@fpt.com hoặc hotrofptplay@fpt.com
          </p>
          <p>
            Giấy chứng nhận đăng ký doanh nghiệp số 0101778163 do Sở Kế hoạch và
            Đầu tư Thành phố Hà Nội cấp lần đầu ngày 28/7/2005, cấp đăng ký thay
            đổi lần thứ 32 vào ngày 21/12/2023.
            <br />
            Giấy phép cung cấp dịch vụ phát thanh, truyền hình trả tiền số
            377/GP-BTTTT cấp sửa đổi bổ sung lần 1 ngày 10/10/2023.
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
