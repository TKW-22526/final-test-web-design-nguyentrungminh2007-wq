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
    anh: "1.jpg",
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
    anh: "2.jpg",
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
    anh: "3.jpg",
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
    anh: "4.jpg",
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
    anh: "5.jpg",
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
    anh: "6.jpg",
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
    anh: "7.jpg",
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
    anh: "8.jpg",
    moTa: "Balo chống sốc cho laptop 17 inch, nhiều ngăn phụ kiện."
  },
  {
    id: 9,
    ten: "Mountain Peak 50L",
    hang: "Kordo",
    loai: "du-lich",
    gia: 1990000,
    giaCu: 2290000,
    tonKho: 8,
    size: ["50L"],
    anh: "9.jpg",
    moTa: "Balo trekking cao cấp dành cho những chuyến đi dài."
  },
  {
    id: 10,
    ten: "Daily Carry 24L",
    hang: "Northline",
    loai: "hoc-tap",
    gia: 780000,
    giaCu: 890000,
    tonKho: 14,
    size: ["24L"],
    anh: "10.jpg",
    moTa: "Balo đa năng phù hợp học tập và làm việc."
  },
  {
    id: 11,
    ten: "Business Elite 26L",
    hang: "Milano Craft",
    loai: "cong-so",
    gia: 1490000,
    giaCu: 1690000,
    tonKho: 10,
    size: ["26L"],
    anh: "11.jpg",
    moTa: "Balo doanh nhân cao cấp bằng vải chống thấm."
  },
  {
    id: 12,
    ten: "Runner Fit 20L",
    hang: "Kordo",
    loai: "the-thao",
    gia: 820000,
    giaCu: null,
    tonKho: 17,
    size: ["20L"],
    anh: "12.jpg",
    moTa: "Balo thể thao siêu nhẹ dành cho người năng động."
  },
  {
    id: 13,
    ten: "GUBANO GB L46",
    hang: "Milano Craft",
    loai: "thoi-trang",
    gia: 750000,
    giaCu: 890000,
    tonKho: 16,
    size: ["18L"],
    anh: "13.jpg",
    moTa: "Thiết kế thời trang hiện đại phù hợp giới trẻ."
  },
  {
    id: 14,
    ten: "Laptop Shield 32L",
    hang: "Vantar",
    loai: "laptop",
    gia: 1590000,
    giaCu: 1790000,
    tonKho: 7,
    size: ["32L"],
    anh: "14.jpg",
    moTa: "Balo laptop chống sốc dành cho máy 17.3 inch."
  },
  {
    id: 15,
    ten: "Outdoor Plus 38L",
    hang: "Northline",
    loai: "du-lich",
    gia: 1690000,
    giaCu: 1890000,
    tonKho: 6,
    size: ["38L"],
    anh: "15.jpg",
    moTa: "Balo du lịch nhiều ngăn, có đai trợ lực."
  },
  {
    id: 16,
    ten: "School Mate 19L",
    hang: "Kordo",
    loai: "hoc-tap",
    gia: 620000,
    giaCu: null,
    tonKho: 19,
    size: ["19L"],
    anh: "16.jpg",
    moTa: "Balo học sinh bền đẹp, chống bám bẩn."
  },
  {
    id: 17,
    ten: "Office Premium 25L",
    hang: "Milano Craft",
    loai: "cong-so",
    gia: 1290000,
    giaCu: 1490000,
    tonKho: 13,
    size: ["25L"],
    anh: "17.jpg",
    moTa: "Balo văn phòng sang trọng, ngăn laptop riêng."
  },
  {
    id: 18,
    ten: "Fitness Gear 27L",
    hang: "Vantar",
    loai: "the-thao",
    gia: 950000,
    giaCu: 1090000,
    tonKho: 9,
    size: ["27L"],
    anh: "18.jpg",
    moTa: "Balo thể thao có ngăn giày riêng và chống thấm."
  },
  {
    id: 19,
    ten: "Fashion Chic 17L",
    hang: "Northline",
    loai: "thoi-trang",
    gia: 680000,
    giaCu: null,
    tonKho: 21,
    size: ["17L"],
    anh: "19.jpg",
    moTa: "Balo phong cách trẻ trung, phù hợp đi chơi."
  },
  {
    id: 20,
    ten: "Ultra Tech 34L",
    hang: "Vantar",
    loai: "laptop",
    gia: 1790000,
    giaCu: 1990000,
    tonKho: 4,
    size: ["34L"],
    anh: "20.jpg",
    moTa: "Balo laptop cao cấp chống sốc, chống nước và chống trộm."
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