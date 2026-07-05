// main.js - xử lý hiển thị cho từng trang

document.addEventListener("DOMContentLoaded", function () {
  const trang = document.body.dataset.trang;

  if (document.getElementById("tabsTrangChu")) hienThiTabTrangChu();
  if (document.getElementById("noiBatGrid")) hienThiSanPhamNoiBat();
  if (trang === "san-pham") khoiTaoTrangSanPham();
  if (trang === "chi-tiet") khoiTaoTrangChiTiet();
  if (trang === "lien-he") khoiTaoFormLienHe();
});

// tạo mã HTML cho 1 thẻ sản phẩm, duongDan là "" hoặc "html/" tùy trang
function taoTheSanPham(sp, duongDan) {
  let trangThai = "";
  if (sp.tonKho <= 0) {
    trangThai = '<div class="product-stock het-hang">Hết hàng</div>';
  } else if (sp.tonKho <= 5) {
    trangThai = '<div class="product-stock sap-het">Sắp hết - còn ' + sp.tonKho + '</div>';
  } else {
    trangThai = '<div class="product-stock">Còn hàng: ' + sp.tonKho + ' đôi</div>';
  }

  const giaCuHTML = sp.giaCu ? '<span class="gia-cu">' + dinhDangTien(sp.giaCu) + '</span>' : "";
  const danhMuc = categories.find((c) => c.id === sp.loai);
  const tenDanhMuc = danhMuc ? danhMuc.ten : "";
  const link = duongDan + "chi-tiet.html?id=" + sp.id;
  const disabled = sp.tonKho <= 0 ? "disabled" : "";

  return (
    '<div class="product-card">' +
      '<a href="' + link + '"><img src="' + sp.anh + '" alt="' + sp.ten + '"></a>' +
      '<div class="product-info">' +
        '<div class="product-category">' + tenDanhMuc + '</div>' +
        '<a href="' + link + '"><div class="product-name">' + sp.ten + '</div></a>' +
        '<div class="product-brand">' + sp.hang + '</div>' +
        '<div class="product-price"><span class="gia-moi">' + dinhDangTien(sp.gia) + '</span>' + giaCuHTML + '</div>' +
        trangThai +
        '<div class="product-buttons">' +
          '<button class="btn btn-outline btn-small" onclick="suKienThemGio(' + sp.id + ')" ' + disabled + '>Thêm giỏ</button>' +
          '<button class="btn btn-small" onclick="suKienMuaNgay(' + sp.id + ', \'' + duongDan + '\')" ' + disabled + '>Mua ngay</button>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

// thêm nhanh 1 sản phẩm (size mặc định là size đầu tiên)
function suKienThemGio(id) {
  const sp = timSanPham(id);
  if (!sp || sp.tonKho <= 0) return;
  themVaoGio(sp.id, sp.size[0], 1);
  alert("Đã thêm " + sp.ten + " vào giỏ hàng");
}

// mua ngay: thêm vào giỏ rồi chuyển tới trang sản phẩm để thanh toán
function suKienMuaNgay(id, duongDan) {
  const sp = timSanPham(id);
  if (!sp || sp.tonKho <= 0) return;
  themVaoGio(sp.id, sp.size[0], 1);
  window.location.href = duongDan + "san-pham.html#gio-hang";
}

// ---------- Trang chủ ----------
function hienThiTabTrangChu() {
  const el = document.getElementById("tabsTrangChu");
  let html = "";
  categories.forEach((c) => {
    if (c.id === "all") return;
    html += '<a href="html/san-pham.html?loai=' + c.id + '" class="tab">' + c.ten + "</a>";
  });
  el.innerHTML = html;
}

function hienThiSanPhamNoiBat() {
  const el = document.getElementById("noiBatGrid");
  const noiBat = products.slice(0, 4);
  let html = "";
  noiBat.forEach((sp) => {
    html += taoTheSanPham(sp, "html/");
  });
  el.innerHTML = html;
}

// ---------- Trang sản phẩm ----------
function khoiTaoTrangSanPham() {
  const tabsEl = document.getElementById("tabs");
  const gridEl = document.getElementById("productGrid");
  const params = new URLSearchParams(window.location.search);
  let loaiDangChon = params.get("loai") || "all";

  function veTabs() {
    let html = "";
    categories.forEach((c) => {
      const active = c.id === loaiDangChon ? "active" : "";
      html += '<div class="tab ' + active + '" data-loai="' + c.id + '">' + c.ten + "</div>";
    });
    tabsEl.innerHTML = html;

    tabsEl.querySelectorAll(".tab").forEach((tab) => {
      tab.addEventListener("click", function () {
        loaiDangChon = tab.dataset.loai;
        veTabs();
        veGrid();
      });
    });
  }

  function veGrid() {
    const ds = locTheoDanhMuc(loaiDangChon);
    if (ds.length === 0) {
      gridEl.innerHTML = "<p>Chưa có sản phẩm trong danh mục này.</p>";
      return;
    }
    let html = "";
    ds.forEach((sp) => {
      html += taoTheSanPham(sp, "");
    });
    gridEl.innerHTML = html;
  }

  veTabs();
  veGrid();
  khoiTaoGioHang();
}

// ---------- Giỏ hàng (hiện trên trang sản phẩm) ----------
function khoiTaoGioHang() {
  const cartBox = document.getElementById("cartBox");
  const cartBtn = document.getElementById("cartToggleBtn");
  if (!cartBox || !cartBtn) return;

  cartBtn.addEventListener("click", function () {
    cartBox.classList.toggle("show");
    veGioHang();
  });

  if (window.location.hash === "#gio-hang") {
    cartBox.classList.add("show");
  }

  veGioHang();
}

function veGioHang() {
  const itemsEl = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  if (!itemsEl) return;

  const gioHang = layGioHang();
  if (gioHang.length === 0) {
    itemsEl.innerHTML = "<p>Giỏ hàng đang trống.</p>";
    totalEl.textContent = dinhDangTien(0);
    return;
  }

  let html = "";
  let tongTien = 0;
  gioHang.forEach((item) => {
    const sp = timSanPham(item.id);
    if (!sp) return;
    tongTien += sp.gia * item.soLuong;
    html +=
      '<div class="cart-line">' +
        '<img src="' + sp.anh + '" alt="' + sp.ten + '">' +
        '<div class="cart-line-info">' +
          '<div class="ten">' + sp.ten + '</div>' +
          '<div class="meta">Size ' + item.size + ' x ' + item.soLuong + ' - ' + dinhDangTien(sp.gia) + '</div>' +
        '</div>' +
        '<button class="btn btn-outline btn-small" onclick="suKienXoaGio(' + sp.id + ', ' + item.size + ')">Xóa</button>' +
      '</div>';
  });
  itemsEl.innerHTML = html;
  totalEl.textContent = dinhDangTien(tongTien);
}

function suKienXoaGio(id, size) {
  xoaKhoiGio(id, size);
  veGioHang();
}

function suKienThanhToan() {
  if (layGioHang().length === 0) {
    alert("Giỏ hàng đang trống");
    return;
  }
  alert("Cảm ơn bạn! Đây là trang demo nên đơn hàng chưa được gửi đi thật.");
}

// ---------- Trang chi tiết sản phẩm ----------
function khoiTaoTrangChiTiet() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const sp = timSanPham(id) || products[0];
  document.title = sp.ten + " - URBAN STEP";

  let sizeDangChon = sp.size[0];

  function ve() {
    const wrap = document.getElementById("chiTietWrap");
    const giaCuHTML = sp.giaCu ? '<span class="gia-cu">' + dinhDangTien(sp.giaCu) + '</span>' : "";
    let trangThaiKho = "";
    if (sp.tonKho <= 0) {
      trangThaiKho = '<p class="product-stock het-hang">Hết hàng</p>';
    } else if (sp.tonKho <= 5) {
      trangThaiKho = '<p class="product-stock sap-het">Sắp hết - còn ' + sp.tonKho + ' đôi</p>';
    } else {
      trangThaiKho = '<p class="product-stock">Còn hàng: ' + sp.tonKho + ' đôi</p>';
    }

    let sizeHTML = "";
    sp.size.forEach((s) => {
      const active = s === sizeDangChon ? "active" : "";
      sizeHTML += '<div class="size-item ' + active + '" onclick="chonSize(' + s + ')">' + s + "</div>";
    });

    const disabled = sp.tonKho <= 0 ? "disabled" : "";

    wrap.innerHTML =
      '<div class="detail-img"><img src="' + sp.anh + '" alt="' + sp.ten + '"></div>' +
      '<div class="detail-info">' +
        '<div class="brand">' + sp.hang + '</div>' +
        '<h1>' + sp.ten + '</h1>' +
        '<div class="price">' + dinhDangTien(sp.gia) + giaCuHTML + '</div>' +
        trangThaiKho +
        '<p class="mo-ta">' + sp.moTa + '</p>' +
        '<label>Chọn size:</label>' +
        '<div class="size-list">' + sizeHTML + '</div>' +
        '<div class="detail-buttons">' +
          '<button class="btn btn-outline" onclick="themGioChiTiet(' + sp.id + ')" ' + disabled + '>Thêm vào giỏ</button>' +
          '<button class="btn" onclick="muaNgayChiTiet(' + sp.id + ')" ' + disabled + '>Mua ngay</button>' +
        '</div>' +
      '</div>';
  }

  window.chonSize = function (s) {
    sizeDangChon = s;
    ve();
  };

  window.themGioChiTiet = function (id) {
    themVaoGio(id, sizeDangChon, 1);
    alert("Đã thêm vào giỏ hàng: size " + sizeDangChon);
  };

  window.muaNgayChiTiet = function (id) {
    themVaoGio(id, sizeDangChon, 1);
    window.location.href = "san-pham.html#gio-hang";
  };

  ve();

  // sản phẩm liên quan cùng danh mục
  const relatedEl = document.getElementById("relatedGrid");
  if (relatedEl) {
    const lienQuan = products.filter((p) => p.loai === sp.loai && p.id !== sp.id).slice(0, 4);
    let html = "";
    lienQuan.forEach((p) => {
      html += taoTheSanPham(p, "");
    });
    relatedEl.innerHTML = html;
  }
}

// ---------- Trang liên hệ ----------
function khoiTaoFormLienHe() {
  const form = document.getElementById("contactForm");
  const thongBao = document.getElementById("thongBaoGui");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    thongBao.style.display = "block";
    form.reset();
  });
}
