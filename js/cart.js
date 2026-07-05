// cart.js - các hàm xử lý giỏ hàng (lưu trong localStorage của trình duyệt)

// định dạng số tiền kiểu Việt Nam
function dinhDangTien(so) {
  return so.toLocaleString("vi-VN") + "đ";
}

// lấy giỏ hàng hiện tại
function layGioHang() {
  const data = localStorage.getItem("gioHang");
  return data ? JSON.parse(data) : [];
}

// lưu giỏ hàng
function luuGioHang(gioHang) {
  localStorage.setItem("gioHang", JSON.stringify(gioHang));
  capNhatSoLuongGio();
}

// thêm sản phẩm vào giỏ
function themVaoGio(idSanPham, size, soLuong) {
  soLuong = soLuong || 1;
  const gioHang = layGioHang();
  const daCo = gioHang.find((sp) => sp.id == idSanPham && sp.size == size);
  if (daCo) {
    daCo.soLuong += soLuong;
  } else {
    gioHang.push({ id: idSanPham, size: size, soLuong: soLuong });
  }
  luuGioHang(gioHang);
}

// xóa 1 sản phẩm khỏi giỏ
function xoaKhoiGio(idSanPham, size) {
  let gioHang = layGioHang();
  gioHang = gioHang.filter((sp) => !(sp.id == idSanPham && sp.size == size));
  luuGioHang(gioHang);
}

// đếm tổng số sản phẩm trong giỏ (hiển thị badge)
function demSoLuongGio() {
  const gioHang = layGioHang();
  let tong = 0;
  for (let i = 0; i < gioHang.length; i++) {
    tong += gioHang[i].soLuong;
  }
  return tong;
}

// cập nhật số hiển thị trên icon giỏ hàng
function capNhatSoLuongGio() {
  const badges = document.querySelectorAll(".gio-hang-badge");
  const soLuong = demSoLuongGio();
  badges.forEach((b) => {
    b.textContent = soLuong;
    b.style.display = soLuong > 0 ? "inline-block" : "none";
  });
}

document.addEventListener("DOMContentLoaded", capNhatSoLuongGio);
