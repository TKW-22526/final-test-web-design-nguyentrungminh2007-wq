// data.js - danh sách sản phẩm và danh mục của cửa hàng

const categories = [
  { id: "all", ten: "Tất cả" },
  { id: "hoc-tap", ten: "Balo học tập" },
  { id: "laptop", ten: "Balo laptop" },
  { id: "cong-so", ten: "Balo công sở" },
  { id: "du-lich", ten: "Balo du lịch" },
  { id: "the-thao", ten: "Balo thể thao" },
  { id: "thoi-trang", ten: "Balo thời trang" }
];

const products = [
  {
    id: 1,
    ten: "Urban Explorer 20L",
    hang: "Kordo",
    loai: "du-lich",
    gia: 899000,
    giaCu: 1099000,
    tonKho: 18,
    size: ["20L", "25L"],
    anh: "https://placehold.co/400x400?text=Urban+Explorer+20L",
    moTa: "Balo du lịch chống nước, nhiều ngăn chứa, phù hợp đi học và đi chơi."
  },
  {
    id: 2,
    ten: "Campus Pro 18L",
    hang: "Northline",
    loai: "hoc-tap",
    gia: 690000,
    giaCu: null,
    tonKho: 12,
    size: ["18L", "22L"],
    anh: "https://placehold.co/400x400?text=Campus+Pro+18L",
    moTa: "Balo học sinh, sinh viên với ngăn laptop 15.6 inch."
  },
  {
    id: 3,
    ten: "Adventure Trek 35L",
    hang: "Vantar",
    loai: "du-lich",
    gia: 1490000,
    giaCu: 1690000,
    tonKho: 9,
    size: ["35L", "40L"],
    anh: "https://placehold.co/400x400?text=Adventure+Trek+35L",
    moTa: "Balo leo núi dung tích lớn, chất liệu chống thấm nước."
  },
  {
    id: 4,
    ten: "Office Smart 22L",
    hang: "Milano Craft",
    loai: "cong-so",
    gia: 1190000,
    giaCu: null,
    tonKho: 15,
    size: ["22L"],
    anh: "https://placehold.co/400x400?text=Office+Smart+22L",
    moTa: "Balo công sở thiết kế tối giản, có cổng sạc USB."
  },
  {
    id: 5,
    ten: "Sport Active 28L",
    hang: "Kordo",
    loai: "the-thao",
    gia: 990000,
    giaCu: 1190000,
    tonKho: 5,
    size: ["28L"],
    anh: "https://placehold.co/400x400?text=Sport+Active+28L",
    moTa: "Balo thể thao nhẹ, ngăn riêng đựng giày và quần áo."
  },
  {
    id: 6,
    ten: "Travel Max 45L",
    hang: "Northline",
    loai: "du-lich",
    gia: 1890000,
    giaCu: 2090000,
    tonKho: 0,
    size: ["45L"],
    anh: "https://placehold.co/400x400?text=Travel+Max+45L",
    moTa: "Balo du lịch cỡ lớn, thích hợp cho các chuyến đi dài ngày."
  },
  {
    id: 7,
    ten: "City Mini 16L",
    hang: "Milano Craft",
    loai: "thoi-trang",
    gia: 590000,
    giaCu: null,
    tonKho: 22,
    size: ["16L"],
    anh: "https://placehold.co/400x400?text=City+Mini+16L",
    moTa: "Balo thời trang nhỏ gọn, phù hợp đi dạo và hằng ngày."
  },
  {
    id: 8,
    ten: "TechGuard 30L",
    hang: "Vantar",
    loai: "laptop",
    gia: 1390000,
    giaCu: 1590000,
    tonKho: 11,
    size: ["30L"],
    anh: "https://placehold.co/400x400?text=TechGuard+30L",
    moTa: "Balo chống sốc cho laptop 17 inch, nhiều ngăn phụ kiện."
  }
];

// tìm sản phẩm theo id
function timSanPham(id) {
  return products.find((p) => p.id == id);
}

// lọc sản phẩm theo danh mục
function locTheoDanhMuc(loai) {
  if (!loai || loai === "all") return products;
  return products.filter((p) => p.loai === loai);
}
