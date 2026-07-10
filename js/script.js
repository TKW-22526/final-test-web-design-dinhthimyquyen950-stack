// Lấy phần đầu của đường dẫn ảnh Unsplash để tái sử dụng cho nhiều sản phẩm.
const IMAGE_BASE_URL = 'https://images.unsplash.com/';

// Khai báo danh sách sản phẩm dùng chung cho trang chủ, trang sản phẩm, chi tiết và giỏ hàng.
const products = [
  {
  id: 1,
  name: 'Serum Klairs Freshly Juiced Vitamin Drop',
  category: 'Serum',
  brand: 'Klairs',
  skin: 'Mọi loại da, đặc biệt da xỉn màu và da có vết thâm',
  price: 365000,
  oldPrice: 450000,
  rating: 4.9,
  sold: 384,
  stock: 55,
  badge: 'Best Seller',
  date: 70,
  img:  "assets/images/vitaminc.png",
  desc: 'Serum chứa 5% Vitamin C nguyên chất giúp hỗ trợ làm sáng da, cải thiện tình trạng thâm sau mụn, làm đều màu da và tăng cường khả năng chống oxy hóa. Kết cấu lỏng nhẹ, thẩm thấu nhanh, phù hợp sử dụng hằng ngày cho cả người mới bắt đầu dùng Vitamin C.'
},
 {
  id: 2,
  name: 'Kem chống nắng Skin Aqua Tone Up UV Essence SPF50+ PA++++',
  category: 'Chống nắng',
  brand: 'Skin Aqua',
  skin: 'Mọi loại da, đặc biệt da xỉn màu',
  price: 225000,
  oldPrice: 290000,
  rating: 4.9,
  sold: 476,
  stock: 68,
  badge: 'Best Seller',
  date: 72,
  img: "assets/images/kcn.png",
  desc: 'Kem chống nắng SPF50+ PA++++ giúp bảo vệ da trước tia UVA và UVB, đồng thời nâng tông da nhẹ nhàng với sắc tím Lavender, hỗ trợ hiệu chỉnh da xỉn màu, mang lại làn da sáng hồng tự nhiên. Chất kem mỏng nhẹ, thẩm thấu nhanh và có thể dùng như lớp lót trang điểm.'
},
  {
    id: 3,
    name: 'Son Kem Lì 3CE Velvet Lip Tint Plush',
    category: 'Son môi',
    brand: '3CE',
    skin: 'Mọi loại da',
    price: 189000,
    oldPrice: 250000,
    rating: 4.8,
    sold: 69,
    stock: 88,
    badge: 'Nổi bật',
    date: 9,
    img: "assets/images/son.png",
    desc: 'Chất son mềm mịn, lên màu trong trẻo và giữ ẩm cho môi.'
  },
  {
    id: 4,
    name: 'Kem dưỡng ẩm sáng da Innisfree Cherry Blossom',
    category: 'Kem dưỡng',
    brand: 'Innisfree',
    skin: 'Da khô',
    price: 399000,
    oldPrice: 520000,
    rating: 4.9,
    sold: 58,
    stock: 29,
    badge: 'Bán chạy',
    date: 8,
    img: "assets/images/kemduong.png",
    desc: 'Phục hồi hàng rào bảo vệ da, giảm bong tróc và căng kích.'
  },
  {
  id: 5,
  name: 'Sửa rửa mặt COSRX Low pH Good Morning Gel Cleanser',
  category: 'Sữa rửa mặt',
  brand: 'COSRX',
  skin: 'Da dầu, da hỗn hợp, da nhạy cảm',
  price: 245000,
  oldPrice: 310000,
  rating: 4.9,
  sold: 548,
  stock: 72,
  badge: 'Best Seller',
  date: 68,
  img: "assets/images/srmgel.png",
  desc: 'Sữa rửa mặt dạng gel có độ pH 5.0–6.0 giúp làm sạch bụi bẩn, dầu thừa và cặn trang điểm nhẹ nhàng mà vẫn duy trì hàng rào bảo vệ tự nhiên của da. Công thức chứa dầu lá tràm trà và BHA tự nhiên giúp hỗ trợ làm sạch lỗ chân lông, mang lại làn da mềm mại và tươi mát sau khi sử dụng.'
},
  {
    id: 6,
    name: 'Nước tẩy trang Innisfree',
    category: 'Nước tẩy trang',
    brand: 'Fresh Skin',
    skin: 'Da nhạy cảm',
    price: 179000,
    oldPrice: 240000,
    rating: 4.8,
    sold: 72,
    stock: 61,
    badge: 'Giảm giá',
    date: 6,
    img: "assets/images/taytrang.png",
    desc: 'Làm sạch lớp trang điểm và bụi mịn, chứa panthenol giúp làm dịu da.'
  },
  {
    id: 7,
    name: 'Toner Nước Hoa Hồng Klairs Supple Preparation',
    category: 'Toner',
    brand: 'Klairs',
    skin: 'Da hỗn hợp',
    price: 249000,
    oldPrice: 320000,
    rating: 4.6,
    sold: 41,
    stock: 39,
    badge: 'Mới',
    date: 13,
    img: "assets/images/tonner.png",
    desc: 'Cấp ẩm tức thì, làm dịu vùng da đỏ và hỗ trợ cân bằng dầu.'
  },
  {
    id: 8,
    name: 'Mặt Nạ Tràm Trà Caryophy ',
    category: 'Mặt nạ',
    brand: 'Caryophy',
    skin: 'Da khô',
    price: 79000,
    oldPrice: 99000,
    rating: 4.7,
    sold: 46,
    stock: 43,
    badge: 'Mới',
    date: 14,
    img: "assets/images/matna.png",
    desc: 'Mặt nạ ngủ mềm như kem, giúp da mọng nước vào buổi sáng.'
  },
  {
    id: 9,
    name: 'Combo dưỡng da ',
    category: 'Combo dưỡng da',
    brand: 'Bloom Lab',
    skin: 'Da xỉn màu',
    price: 699000,
    oldPrice: 1080000,
    rating: 5,
    sold: 88,
    stock: 18,
    badge: 'Bán chạy',
    date: 11,
    img:  "assets/images/combo.png",
    desc: 'Bộ serum, kem dưỡng và chống nắng cho routine sáng da trọn gói.'
  },
  {
  id: 10,
  name: 'The Auragins 7.5% AHA + 0.5% BHA Gentle Peeling Serum',
  category: 'Tẩy tế bào chết',
  brand: 'The Auragins',
  skin: 'Da dầu, da hỗn hợp, da mụn',
  price: 349000,
  oldPrice: 420000,
  rating: 4.9,
  sold: 128,
  stock: 45,
  badge: 'Bán chạy',
  date: 15,
  img: "assets/images/peeling.png",
  desc: 'Serum tẩy tế bào chết chứa 7.5% AHA và 0.5% BHA giúp loại bỏ tế bào chết, làm sạch lỗ chân lông, hỗ trợ giảm mụn đầu đen, cải thiện bề mặt da và mang lại làn da sáng mịn, đều màu.'
},
  {
  id: 11,
  name: 'Obagi Clinical Blue Brilliance Triple Acid Peeling Serum',
  category: 'Tẩy tế bào chết',
  brand: 'Obagi',
  skin: 'Da dầu, da hỗn hợp, da mụn',
  price: 549000,
  oldPrice: 720000,
  rating: 4.9,
  sold: 128,
  stock: 45,
  badge: 'Bán chạy',
  date: 15,
  img: "assets/images/peeling2.png",
  desc: 'Serum tẩy tế bào chết chứa 7.5% AHA và 0.5% BHA giúp loại bỏ tế bào chết, làm sạch lỗ chân lông, hỗ trợ giảm mụn đầu đen, cải thiện bề mặt da và mang lại làn da sáng mịn, đều màu.'
},
  {
    id: 12,
    name: 'NEOGEN Dermalogy Bio-Peel Gauze Peeling Lemon',
    category: 'Tẩy tế bào chết',
    brand: 'NEOGEN',
    skin: 'Mọi loại da',
    price: 490000,
    oldPrice: 630000,
    rating: 4.6,
    sold: 37,
    stock: 22,
    badge: 'Mới',
    date: 16,
    img: "assets/images/peeling3.png",
    desc: 'Hỗ trợ làm mịn bề mặt da, thông thoáng lỗ chân lông và giảm mụn ẩn.'
  },
  {
  id: 13,
  name: 'Dr.G Brightening Peeling Gel',
  category: 'Tẩy tế bào chết',
  brand: 'Dr.G',
  skin: 'Da nhạy cảm, mọi loại da',
  price: 285000,
  oldPrice: 350000,
  rating: 4.8,
  sold: 162,
  stock: 42,
  badge: 'Yêu thích',
  date: 22,
  img: "assets/images/peeling4.png",
  desc: 'Gel tẩy tế bào chết dịu nhẹ giúp loại bỏ lớp sừng già, làm sạch bề mặt da, hỗ trợ cải thiện độ sáng và mang lại làn da mềm mịn mà không gây khô căng.'
},
  {
  id: 14,
  name: 'Kem chống nắng Innisfree Intensive Long-Lasting  EX SPF50+ PA++++',
  category: 'Chống nắng',
  brand: 'Innisfree',
  skin: 'Da dầu, da hỗn hợp',
  price: 329000,
  oldPrice: 420000,
  rating: 4.9,
  sold: 285,
  stock: 60,
  badge: 'Bán chạy',
  date: 25,
  img: "assets/images/kcn2.png",
  desc: 'Kem chống nắng phổ rộng SPF50+ PA++++ giúp bảo vệ da khỏi tia UVA và UVB, kiểm soát bã nhờn, hạn chế bóng dầu và mang lại lớp nền khô ráo, mịn màng. Phù hợp sử dụng hằng ngày cho da dầu và da hỗn hợp.'
},
  {
  id: 15,
  name: 'Kem chống nắng Beplain Sunmuse Moisture SPF50+ PA++++',
  category: 'Chống nắng',
  brand: 'Beplain',
  skin: 'Mọi loại da, đặc biệt da khô và da nhạy cảm',
  price: 389000,
  oldPrice: 480000,
  rating: 4.9,
  sold: 174,
  stock: 52,
  badge: 'Hot',
  date: 28,
  img: "assets/images/kcn3.png",
  desc: 'Kem chống nắng dưỡng ẩm với chỉ số SPF50+ PA++++ giúp bảo vệ da trước tia UVA và UVB, đồng thời cấp ẩm, làm dịu da và mang lại lớp finish tự nhiên, không bết dính hay để lại vệt trắng.'
},
  {
  id: 16,
  name: "Kem chống nắng d'Alba Waterfull Essence Sun Cream SPF50+ PA++++",
  category: "Chống nắng",
  brand: "d'Alba",
  skin: "Mọi loại da, đặc biệt da khô và da hỗn hợp",
  price: 495000,
  oldPrice: 620000,
  rating: 4.9,
  sold: 218,
  stock: 46,
  badge: "Best Seller",
  date: 30,
  img: "assets/images/kcn4.png",
  desc: "Kem chống nắng chứa tinh chất dưỡng ẩm với chỉ số SPF50+ PA++++ giúp bảo vệ da toàn diện trước tia UVA và UVB. Công thức giàu chiết xuất nấm Truffle trắng và Niacinamide giúp dưỡng sáng, cấp ẩm, làm dịu da và mang lại lớp nền căng bóng tự nhiên."
},
  {
  id: 17,
  name: 'Kem dưỡng La Roche-Posay Hyalu B5 Cream',
  category: 'Kem dưỡng',
  brand: 'La Roche-Posay',
  skin: 'Mọi loại da, đặc biệt da khô và da nhạy cảm',
  price: 824000,
  oldPrice: 950000,
  rating: 4.9,
  sold: 147,
  stock: 36,
  badge: 'Best Seller',
  date: 32,
  img: "assets/images/kemduong2.png",
  desc: 'Kem dưỡng chứa Hyaluronic Acid và Vitamin B5 giúp cấp ẩm chuyên sâu, phục hồi hàng rào bảo vệ da, cải thiện độ đàn hồi, làm da căng mịn và giảm tình trạng khô ráp. Kết cấu mềm mịn, thẩm thấu nhanh, phù hợp sử dụng hằng ngày.'
},
  {
  id: 18,
  name: 'Kem dưỡng GOONGBE Baby Deep Moisture Cream',
  category: 'Kem dưỡng',
  brand: 'GOONGBE',
  skin: 'Da khô, da nhạy cảm, mọi loại da',
  price: 420000,
  oldPrice: 490000,
  rating: 4.9,
  sold: 158,
  stock: 35,
  badge: 'Best Seller',
  date: 35,
  img: "assets/images/kemduong3.png",
  desc: 'Kem dưỡng ẩm chuyên sâu giúp cấp ẩm lên đến 72 giờ, làm dịu làn da khô ráp, củng cố hàng rào bảo vệ da và duy trì độ mềm mại. Công thức dịu nhẹ, phù hợp cho da nhạy cảm và có thể sử dụng hằng ngày.'
},
 {
  id: 19,
  name: 'Kem dưỡng Torriden DIVE-IN Soothing Cream',
  category: 'Kem dưỡng',
  brand: 'Torriden',
  skin: 'Mọi loại da, đặc biệt da thiếu nước và da nhạy cảm',
  price: 349000,
  oldPrice: 450000,
  rating: 4.9,
  sold: 273,
  stock: 48,
  badge: 'Hot',
  date: 38,
  img: "assets/images/kemduong4.png",
  desc: 'Kem dưỡng cấp ẩm chứa phức hợp 5D Hyaluronic Acid giúp bổ sung độ ẩm chuyên sâu, làm dịu làn da, củng cố hàng rào bảo vệ da và mang lại làn da căng mịn, mềm mại suốt cả ngày.'
},
  {
  id: 20,
  name: " Nước tẩy trang L'Oréal Paris Micellar Water 3-in-1 Refreshing",
  category: "Nước tẩy trang",
  brand: "L'Oréal Paris",
  skin: "Mọi loại da, kể cả da nhạy cảm",
  price: 179000,
  oldPrice: 229000,
  rating: 4.9,
  sold: 452,
  stock: 78,
  badge: "Best Seller",
  date: 38,
  img: "assets/images/taytrang2.png",
  desc: "Nước tẩy trang công nghệ Micellar giúp làm sạch lớp trang điểm, bụi bẩn và bã nhờn hiệu quả mà không cần rửa lại với nước. Sản phẩm giúp da sạch thoáng, mềm mại và không gây khô căng sau khi sử dụng."
},
  {
  id: 21,
  name: 'Nước tẩy trang Bioderma Sensibio H2O Micellar Water',
  category: 'Nước tẩy trang',
  brand: 'Bioderma',
  skin: 'Da nhạy cảm, mọi loại da',
  price: 429000,
  oldPrice: 520000,
  rating: 5.0,
  sold: 387,
  stock: 54,
  badge: 'Best Seller',
  date: 40,
  img: "assets/images/taytrang3.png",
  desc: 'Nước tẩy trang công nghệ Micellar giúp làm sạch lớp trang điểm, kem chống nắng, bụi bẩn và bã nhờn một cách nhẹ nhàng. Công thức dịu nhẹ giúp làm sạch da mà không gây khô căng, đồng thời hỗ trợ làm dịu và cân bằng làn da nhạy cảm.'
},

 {
  id: 22,
  name: 'Nước tẩy trang Centella Quick Cleansing Water',
  category: 'Nước tẩy trang',
  brand: 'SKIN1004',
  skin: 'Mọi loại da, đặc biệt da nhạy cảm',
  price: 329000,
  oldPrice: 399000,
  rating: 4.9,
  sold: 268,
  stock: 42,
  badge: 'Hot',
  date: 42,
  img: "assets/images/taytrang4.png",
  desc: 'Nước tẩy trang dịu nhẹ chứa chiết xuất rau má Madagascar giúp làm sạch lớp trang điểm, kem chống nắng, bụi bẩn và bã nhờn mà không làm khô da. Sản phẩm hỗ trợ làm dịu, cấp ẩm và duy trì hàng rào bảo vệ da, phù hợp sử dụng hằng ngày cho cả làn da nhạy cảm.'
},
 {
  id: 23,
  name: 'SKIN1004 Madagascar Centella Toning Toner',
  category: 'Toner',
  brand: 'SKIN1004',
  skin: 'Mọi loại da, đặc biệt da nhạy cảm và da mụn',
  price: 389000,
  oldPrice: 470000,
  rating: 4.9,
  sold: 342,
  stock: 58,
  badge: 'Best Seller',
  date: 45,
  img: "assets/images/tonner2.png",
  desc: 'Toner chứa 84% chiết xuất rau má Madagascar kết hợp PHA giúp loại bỏ tế bào chết nhẹ nhàng, làm dịu da, cân bằng độ pH và cấp ẩm hiệu quả. Sản phẩm hỗ trợ cải thiện kết cấu da, mang lại làn da mềm mại, mịn màng và khỏe mạnh.'
},
{
  id: 24,
  name: 'Toner Innisfree Green Tea Seed Hyaluronic Skin',
  category: 'Toner',
  brand: 'Innisfree',
  skin: 'Mọi loại da, đặc biệt da thường và da khô',
  price: 420000,
  oldPrice: 520000,
  rating: 4.9,
  sold: 236,
  stock: 47,
  badge: 'Best Seller',
  date: 48,
  img: "assets/images/tonner3.png",
  desc: 'Toner cấp ẩm chứa chiết xuất trà xanh Beauty Green Tea™ và 5 loại Hyaluronic Acid giúp cân bằng độ ẩm, làm dịu làn da, cải thiện tình trạng khô ráp và mang lại làn da mềm mại, căng mướt sau khi làm sạch.'
},
{
  id: 25,
  name: 'Torriden DIVE-IN Low Molecular Hyaluronic Acid Toner',
  category: 'Toner',
  brand: 'Torriden',
  skin: 'Mọi loại da, đặc biệt da thiếu nước và da nhạy cảm',
  price: 359000,
  oldPrice: 450000,
  rating: 4.9,
  sold: 298,
  stock: 56,
  badge: 'Hot',
  date: 50,
  img: "assets/images/tonner4.png",
  desc: 'Toner cấp ẩm chứa phức hợp 5D Hyaluronic Acid giúp bổ sung độ ẩm tức thì, làm dịu làn da, cân bằng độ pH và tăng cường hàng rào bảo vệ da. Kết cấu lỏng nhẹ, thẩm thấu nhanh, mang lại làn da căng mịn và mềm mại.'
},
{
  id: 26,
  name: 'Son Rosea Crystal Velvet Lipstick Hongdae Red',
  category: 'Son môi',
  brand: 'Rosea Crystal',
  skin: 'Mọi loại da',
  price: 192000,
  oldPrice: 290000,
  rating: 4.8,
  sold: 124,
  stock: 30,
  badge: 'Mới',
  date: 52,
  img: "assets/images/son2.png",
  desc: 'Son lì cao cấp với chất son mềm mịn, lên màu chuẩn ngay từ lần thoa đầu tiên. Giúp đôi môi mềm mại, lâu trôi và tạo hiệu ứng lì mịn tự nhiên, phù hợp cho phong cách trang điểm hằng ngày hoặc dự tiệc.'
},
{
  id: 27,
  name: 'Son MEITU Velvet Matte Lip Mud',
  category: 'Son môi',
  brand: 'MEITU',
  skin: 'Mọi loại da',
  price: 159000,
  oldPrice: 220000,
  rating: 4.8,
  sold: 356,
  stock: 64,
  badge: 'Hot',
  date: 55,
  img: "assets/images/son3.png",
  desc: 'Son bùn lì với kết cấu mousse mềm mịn, lên màu chuẩn, dễ tán và mang lại hiệu ứng môi mờ tự nhiên. Công thức nhẹ môi, không gây khô và phù hợp sử dụng hằng ngày.'
},
{
  id: 28,
  name: 'Son Black Rouge Air Fit Velvet Tint',
  category: 'Son môi',
  brand: 'Black Rouge',
  skin: 'Mọi loại da',
  price: 189000,
  oldPrice: 298000,
  rating: 4.9,
  sold: 612,
  stock: 82,
  badge: 'Best Seller',
  date: 58,
  img: "assets/images/son4.png",
  desc: 'Son kem lì với chất son velvet mềm mịn, lên màu chuẩn ngay từ lần thoa đầu tiên. Kết cấu mỏng nhẹ, bám màu tốt, giúp đôi môi luôn mềm mại, không gây khô và phù hợp sử dụng hằng ngày.'
},
{
  id: 29,
  name: ' Sửa rửa mặt Innisfree Green Tea Amino Hydrating Cleansing Foam',
  category: 'Sữa rửa mặt',
  brand: 'Innisfree',
  skin: 'Mọi loại da, đặc biệt da thường và da khô',
  price: 265000,
  oldPrice: 320000,
  rating: 4.9,
  sold: 398,
  stock: 65,
  badge: 'Best Seller',
  date: 60,
  img: "assets/images/srm2.png",
  desc: 'Sữa rửa mặt chứa chiết xuất trà xanh Beauty Green Tea™ và các Amino Acid giúp làm sạch bụi bẩn, bã nhờn và cặn trang điểm nhẹ nhàng, đồng thời duy trì độ ẩm tự nhiên cho da, mang lại làn da sạch thoáng, mềm mại và tươi mát sau khi sử dụng.'
},
{
  id: 30,
  name: 'Sửa rửa mặt Laneige Water Bank Gentle Gel Cleanser',
  category: 'Sữa rửa mặt',
  brand: 'Laneige',
  skin: 'Mọi loại da, đặc biệt da thường, da khô và da nhạy cảm',
  price: 420000,
  oldPrice: 520000,
  rating: 4.9,
  sold: 286,
  stock: 44,
  badge: 'Best Seller',
  date: 62,
  img: "assets/images/srm3.png",
  desc: 'Sữa rửa mặt dạng gel giúp làm sạch bụi bẩn, dầu thừa và cặn trang điểm nhẹ nhàng mà không làm mất đi độ ẩm tự nhiên của da. Công thức chứa Hyaluronic Acid và Blue Hyaluronic Acid giúp cấp ẩm, làm dịu và mang lại làn da mềm mại sau mỗi lần sử dụng.'
},
{
  id: 31,
  name: 'Sửa rửa mặt TIAM Snail & Azulene Low pH Cleanser',
  category: 'Sữa rửa mặt',
  brand: 'TIAM',
  skin: 'Mọi loại da, đặc biệt da nhạy cảm và da sau mụn',
  price: 289000,
  oldPrice: 350000,
  rating: 4.9,
  sold: 215,
  stock: 41,
  badge: 'Hot',
  date: 65,
  img: "assets/images/srm4.png",
  desc: 'Sữa rửa mặt có độ pH cân bằng giúp làm sạch bụi bẩn, dầu thừa và cặn trang điểm nhẹ nhàng mà không làm khô da. Công thức chứa dịch nhầy ốc sên và Azulene hỗ trợ làm dịu, phục hồi hàng rào bảo vệ da, mang lại cảm giác mềm mại và dễ chịu sau khi sử dụng.'
},
{
  id: 32,
  name: 'Torriden DIVE-IN Low Molecular Hyaluronic Acid Serum',
  category: 'Serum',
  brand: 'Torriden',
  skin: 'Mọi loại da, đặc biệt da khô và da thiếu nước',
  price: 389000,
  oldPrice: 480000,
  rating: 5.0,
  sold: 468,
  stock: 64,
  badge: 'Best Seller',
  date: 75,
  img: "assets/images/serum1.png",
  desc: 'Serum cấp ẩm chuyên sâu chứa phức hợp 5D Hyaluronic Acid giúp bổ sung độ ẩm tức thì, làm dịu làn da, cải thiện tình trạng khô ráp và hỗ trợ củng cố hàng rào bảo vệ da. Kết cấu mỏng nhẹ, thẩm thấu nhanh, không gây bết dính.'
},
{
  id: 33,
  name: 'La Roche-Posay Hyalu B5 Serum',
  category: 'Serum',
  brand: 'La Roche-Posay',
  skin: 'Mọi loại da, đặc biệt da khô, da thiếu nước và da nhạy cảm',
  price: 995000,
  oldPrice: 1190000,
  rating: 5.0,
  sold: 326,
  stock: 42,
  badge: 'Best Seller',
  date: 78,
  img: "assets/images/serum2.png",
  desc: 'Serum phục hồi chứa Hyaluronic Acid và Vitamin B5 giúp cấp ẩm chuyên sâu, làm dịu làn da, hỗ trợ phục hồi hàng rào bảo vệ da và cải thiện độ đàn hồi. Kết cấu lỏng nhẹ, thẩm thấu nhanh, mang lại làn da căng mịn và khỏe mạnh.'
},
{
  id: 34,
  name: 'TIAM Vita A Bakuchiol Firming Serum',
  category: 'Serum',
  brand: 'TIAM',
  skin: 'Mọi loại da, đặc biệt da có dấu hiệu lão hóa',
  price: 429000,
  oldPrice: 520000,
  rating: 4.9,
  sold: 218,
  stock: 39,
  badge: 'Hot',
  date: 80,
  img: "assets/images/serum3.png",
  desc: 'Serum chứa Bakuchiol kết hợp Retinal giúp cải thiện nếp nhăn, tăng độ đàn hồi và hỗ trợ làm săn chắc da. Công thức bổ sung Panthenol và Hyaluronic Acid giúp dưỡng ẩm, làm dịu da và hạn chế tình trạng khô căng trong quá trình sử dụng.'
},
{
  id: 35,
  name: 'Beauty of Joseon Glow Deep Serum Rice + Alpha-Arbutin',
  category: 'Serum',
  brand: 'Beauty of Joseon',
  skin: 'Mọi loại da, đặc biệt da xỉn màu và da có vết thâm',
  price: 329000,
  oldPrice: 420000,
  rating: 5.0,
  sold: 512,
  stock: 68,
  badge: 'Best Seller',
  date: 82,
  img: "assets/images/serum4.png",
  desc: 'Serum dưỡng sáng chứa 68% nước cám gạo và 2% Alpha-Arbutin giúp cải thiện làn da xỉn màu, hỗ trợ làm mờ thâm sau mụn, cấp ẩm và mang lại làn da rạng rỡ, đều màu. Kết cấu mỏng nhẹ, thẩm thấu nhanh và phù hợp sử dụng hằng ngày.'
},
{
  id: 36,
  name: 'Mặt nạ BANOBAGI Vita Genic Jelly Mask Hydrating',
  category: 'Mặt nạ',
  brand: 'BANOBAGI',
  skin: 'Mọi loại da, đặc biệt da khô và thiếu nước',
  price: 27000,
  oldPrice: 35000,
  rating: 4.9,
  sold: 1286,
  stock: 180,
  badge: 'Best Seller',
  date: 85,
  img: "assets/images/matna2.png",
  desc: 'Mặt nạ giấy chứa tinh chất dạng jelly kết hợp phức hợp 13 loại vitamin giúp cấp ẩm chuyên sâu, làm mềm da, cải thiện tình trạng khô ráp và mang lại làn da căng mịn, tươi sáng sau mỗi lần sử dụng.'
},
{
  id: 37,
  name: 'Mặt nạ Faith In Face Prestige Platinum Mask',
  category: 'Mặt nạ',
  brand: 'Faith In Face',
  skin: 'Mọi loại da, đặc biệt da khô và xỉn màu',
  price: 49000,
  oldPrice: 65000,
  rating: 4.8,
  sold: 654,
  stock: 156,
  badge: 'Hot',
  date: 88,
  img: "assets/images/matna3.png",
  desc: 'Mặt nạ giấy bạc chứa Platinum, bột ngọc trai và nấm Truffle đen giúp cấp ẩm, nuôi dưỡng làn da mềm mịn, hỗ trợ cải thiện độ đàn hồi và mang lại làn da tươi sáng, rạng rỡ sau mỗi lần sử dụng.'
},
{
  id: 38,
  name: 'Mặt nạ SUR.MEDIC+ Super Hyaluronic 100™ Aqua Mask',
  category: 'Mặt nạ',
  brand: 'SUR.MEDIC+',
  skin: 'Mọi loại da, đặc biệt da khô và thiếu nước',
  price: 32000,
  oldPrice: 42000,
  rating: 4.9,
  sold: 958,
  stock: 180,
  badge: 'Best Seller',
  date: 90,
  img: "assets/images/matna4.png",
  desc: 'Mặt nạ giấy chứa Hyaluronic Acid giúp cấp ẩm chuyên sâu, làm dịu làn da thiếu nước và hỗ trợ duy trì hàng rào bảo vệ da. Tinh chất thẩm thấu nhanh, mang lại làn da mềm mịn, căng bóng và tươi mát sau mỗi lần sử dụng.'
},
{
  id: 39,
  name: 'Anua Heartleaf Daily Skincare Set',
  category: 'Combo dưỡng da',
  brand: 'Anua',
  skin: 'Da dầu, da hỗn hợp, da nhạy cảm',
  price: 1199000,
  oldPrice: 1450000,
  rating: 5.0,
  sold: 187,
  stock: 28,
  badge: 'Best Seller',
  date: 93,
  img: "assets/images/combo2.png",
  desc: 'Bộ chăm sóc da gồm toner, serum và kem dưỡng thuộc dòng Heartleaf giúp làm dịu da, cấp ẩm, hỗ trợ giảm dầu thừa và củng cố hàng rào bảo vệ da. Phù hợp cho người mới bắt đầu skincare và làn da nhạy cảm.'
},
{
  id: 40,
  name: 'Combo dưỡng da Beauty of Joseon Essential Kit',
  category: 'Combo dưỡng da',
  brand: 'Beauty of Joseon',
  skin: 'Mọi loại da, đặc biệt da khô và da xỉn màu',
  price: 899000,
  oldPrice: 1090000,
  rating: 5.0,
  sold: 243,
  stock: 35,
  badge: 'Best Seller',
  date: 95,
  img:  "assets/images/combo3.png",
  desc: 'Bộ chăm sóc da gồm 5 sản phẩm mini nổi tiếng của Beauty of Joseon giúp làm sạch, cấp ẩm, dưỡng sáng và bảo vệ da. Thiết kế nhỏ gọn, thích hợp cho người mới bắt đầu skincare hoặc mang theo khi đi du lịch.'
},
{
  id: 41,
  name: 'Combo Makeup Essential Set',
  category: 'Combo trang điểm',
  brand: 'Bloom Beauty',
  skin: 'Mọi loại da',
  price: 899000,
  oldPrice: 1099000,
  rating: 5.0,
  sold: 165,
  stock: 24,
  badge: 'Hot',
  date: 98,
  img:  "assets/images/combomake.png",
  desc: 'Bộ trang điểm Hàn Quốc gồm cushion, son tint và nước tẩy trang giúp tạo lớp nền tự nhiên, đôi môi tươi tắn và làm sạch lớp trang điểm hiệu quả. Phù hợp sử dụng hằng ngày hoặc làm quà tặng.'
},
{
  id: 42,
  name: 'Combo Makeup Rom&nd Daily  Set',
  category: 'Combo trang điểm',
  brand: 'rom&nd',
  skin: 'Mọi loại da',
  price: 999000,
  oldPrice: 1220000,
  rating: 5.0,
  sold: 198,
  stock: 30,
  badge: 'Best Seller',
  date: 103,
  img:  "assets/images/combomake2.png",
  desc: 'Bộ trang điểm Hàn Quốc gồm cushion, son tint và mascara giúp tạo lớp nền căng bóng, đôi môi tươi tắn và hàng mi cong tự nhiên. Phù hợp trang điểm hằng ngày hoặc đi học, đi làm.'
},

];

// Khai báo danh mục kèm icon để tự sinh khu vực danh mục ở trang chủ.
const categories = [
  ['Serum', 'fa-solid fa-droplet'],
  ['Chống nắng', 'fa-solid fa-sun'],
  ['Son môi', 'fa-solid fa-wand-magic-sparkles'],
  ['Kem dưỡng', 'fa-solid fa-jar'],
  ['Sữa rửa mặt', 'fa-solid fa-pump-soap'],
  ['Toner', 'fa-solid fa-droplet'],
  ['Nước tẩy trang', 'fa-solid fa-bottle-water'],
  ['Mặt nạ', 'fa-solid fa-wand-magic-sparkles']
 
];

// Xác định tiền tố đường dẫn để JS chạy đúng ở trang chủ và trong thư mục html.
const rootPrefix = location.pathname.includes('/html/') ? '../' : '';

// Trả về đường dẫn ảnh đúng theo vị trí trang: cộng rootPrefix cho ảnh nội bộ (assets/...),
// giữ nguyên link ảnh đầy đủ (http/https) như ảnh Unsplash.
function resolveImage(img) {
  return /^https?:\/\//i.test(img) ? img : `${rootPrefix}${img}`;
}

// Định dạng số tiền theo chuẩn Việt Nam.
function money(number) {
  return `${number.toLocaleString('vi-VN')}đ`;
}

// Đọc dữ liệu mảng từ localStorage, nếu chưa có thì trả về mảng rỗng.
function getStorage(key) {
  return JSON.parse(localStorage.getItem(key) || '[]');
}

// Lưu dữ liệu mảng vào localStorage để giỏ hàng và yêu thích không mất khi tải lại trang.
function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Lấy nhanh một phần tử bằng id.
function byId(id) {
  return document.getElementById(id);
}

// Hiển thị thông báo nhỏ ở góc phải màn hình.
function toast(message) {
  const wrapper = byId('toastWrap');
  if (!wrapper) return;

  const item = document.createElement('div');
  item.className = 'toast';
  item.textContent = message;
  wrapper.appendChild(item);

  setTimeout(() => item.remove(), 2600);
}

// Cập nhật số lượng sản phẩm trên icon giỏ hàng và yêu thích.
function updateCounts() {
  const cartTotal = getStorage('bloomCart').reduce((sum, item) => sum + item.qty, 0);
  const wishTotal = getStorage('bloomWish').length;

  document.querySelectorAll('[data-cart-count]').forEach((item) => {
    item.textContent = cartTotal;
  });

  document.querySelectorAll('[data-wishlist-count]').forEach((item) => {
    item.textContent = wishTotal;
  });
}

// Tạo HTML hiển thị số sao đánh giá.
function stars(rating) {
  const roundedRating = Math.round(rating);
  let output = '<span class="stars">';

  for (let index = 0; index < 5; index += 1) {
    output += index < roundedRating
      ? '<i class="fa-solid fa-star"></i>'
      : '<i class="fa-regular fa-star"></i>';
  }

  return `${output}</span>`;
}

// Tạo một thẻ sản phẩm dùng lại ở nhiều trang.
function productCard(product) {
  const discountPercent = Math.round((1 - product.price / product.oldPrice) * 100);
  const detailUrl = `${rootPrefix}html/chi-tiet.html?id=${product.id}`;

  return `
    <article class="product-card" data-aos="fade-up">
      <span class="badge">${product.badge}</span>
      <span class="discount">-${discountPercent}%</span>
      <a class="thumb" href="${detailUrl}">
        <img loading="lazy" src="${resolveImage(product.img)}" alt="${product.name}">
      </a>
      <div class="product-info">
        <h3>${product.name}</h3>
        ${stars(product.rating)}
        <div class="price">
          <span class="new-price">${money(product.price)}</span>
          <span class="old-price">${money(product.oldPrice)}</span>
        </div>
        <p class="stock"><i class="fa-solid fa-circle-check"></i> Còn hàng (${product.stock})</p>
        <div class="card-actions">
          <button type="button" onclick="addCart(${product.id})" aria-label="Thêm vào giỏ hàng">
            <i class="fa-solid fa-cart-plus"></i>
          </button>
          <button type="button" onclick="quickView(${product.id})" aria-label="Xem nhanh">
            <i class="fa-regular fa-eye"></i>
          </button>
          <button type="button" onclick="toggleWish(${product.id})" aria-label="Thêm vào yêu thích">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}

// Thêm sản phẩm vào giỏ hàng, nếu đã có thì tăng số lượng.
window.addCart = function addCart(id) {
  const cart = getStorage('bloomCart');
  const item = cart.find((cartItem) => cartItem.id === id);

  if (item) {
    item.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }

  setStorage('bloomCart', cart);
  updateCounts();
  toast('Đã thêm vào giỏ hàng');
};

// Bật hoặc tắt trạng thái yêu thích của một sản phẩm.
window.toggleWish = function toggleWish(id) {
  const wishlist = getStorage('bloomWish');
  const nextWishlist = wishlist.includes(id)
    ? wishlist.filter((productId) => productId !== id)
    : [...wishlist, id];

  setStorage('bloomWish', nextWishlist);
  updateCounts();
  toast('Đã cập nhật danh sách yêu thích');
};

// Mở hộp thoại xem nhanh sản phẩm.
window.quickView = function quickView(id) {
  const product = products.find((item) => item.id === id);
  const modal = byId('quickViewModal');
  if (!product || !modal) return;

  modal.innerHTML = `
    <div class="modal-card">
      <button class="modal-close" type="button" onclick="byId('quickViewModal').classList.remove('open')" aria-label="Đóng">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <img src="${resolveImage(product.img)}" alt="${product.name}">
      <div>
        <span class="eyebrow">${product.brand}</span>
        <h2>${product.name}</h2>
        ${stars(product.rating)}
        <div class="price">
          <span class="new-price">${money(product.price)}</span>
          <span class="old-price">${money(product.oldPrice)}</span>
        </div>
        <p>${product.desc}</p>
        <p><b>Loại da:</b> ${product.skin}</p>
        <button class="btn primary" type="button" onclick="addCart(${product.id})">Thêm giỏ hàng</button>
        <a class="btn secondary" href="${rootPrefix}html/chi-tiet.html?id=${product.id}">Xem chi tiết</a>
      </div>
    </div>
  `;
  modal.classList.add('open');
};

// Khởi tạo các thành phần dùng chung cho mọi trang.
function initCommon() {
  const loader = byId('loader');
  const menuToggle = byId('menuToggle');
  const navMenu = byId('navMenu');
  const darkModeToggle = byId('darkModeToggle');
  const scrollTop = byId('scrollTop');

  setTimeout(() => loader?.classList.add('hide'), 500);

  if (window.AOS) {
    AOS.init({ duration: 700, once: true });
  }

  menuToggle?.addEventListener('click', () => navMenu?.classList.toggle('open'));

  darkModeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('bloomDark', document.body.classList.contains('dark'));
  });

  if (localStorage.getItem('bloomDark') === 'true') {
    document.body.classList.add('dark');
  }

  document.querySelectorAll('[data-search-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const keyword = form.querySelector('[data-search-input]').value.trim();
      if (keyword) {
        location.href = `${rootPrefix}html/san-pham.html?q=${encodeURIComponent(keyword)}`;
      }
    });
  });

  addEventListener('scroll', () => {
    scrollTop?.classList.toggle('show', scrollY > 500);
  });

  scrollTop?.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  document.addEventListener('click', (event) => {
    if (event.target.id === 'quickViewModal') {
      event.target.classList.remove('open');
    }
  });

  updateCounts();
}

// Khởi tạo dữ liệu động riêng cho trang chủ.
function initHome() {
  const slides = [...document.querySelectorAll('.hero-slide')];
  const dots = byId('heroDots');
  let currentSlide = 0;

  if (slides.length && dots) {
    slides.forEach((slide, index) => {
      dots.insertAdjacentHTML('beforeend', `<button class="${index === 0 ? 'active' : ''}" type="button"></button>`);
    });

    const moveSlide = (nextSlide) => {
      slides[currentSlide].classList.remove('active');
      dots.children[currentSlide].classList.remove('active');
      currentSlide = nextSlide;
      slides[currentSlide].classList.add('active');
      dots.children[currentSlide].classList.add('active');
    };

    [...dots.children].forEach((button, index) => {
      button.addEventListener('click', () => moveSlide(index));
    });

    setInterval(() => moveSlide((currentSlide + 1) % slides.length), 5000);
  }

  const categoryGrid = byId('categoryGrid');
  if (categoryGrid) {
    categoryGrid.innerHTML = categories.map((category, index) => `
      <a class="category-card" href="html/san-pham.html?category=${encodeURIComponent(category[0])}" data-aos="zoom-in">
        <i class="${category[1]}"></i>
        <h3>${category[0]}</h3>
        <img src="${resolveImage(products[index].img)}" alt="${category[0]}">
      </a>
    `).join('');
  }

  const featuredProducts = byId('featuredProducts');
  if (featuredProducts) featuredProducts.innerHTML = products.slice(0, 8).map(productCard).join('');

  const newProducts = byId('newProducts');
  if (newProducts) {
    newProducts.innerHTML = [...products]
      .sort((a, b) => b.date - a.date)
      .slice(0, 4)
      .map(productCard)
      .join('');
  }

  const flashProducts = byId('flashProducts');
  if (flashProducts) {
    flashProducts.innerHTML = products.slice(0, 2).map((product) => `
      <div>
        ${productCard(product)}
        <div class="progress"><span style="width: ${product.sold}%"></span></div>
        <small>Đã bán ${product.sold}%</small>
      </div>
    `).join('');
  }

  const whyItems = ['Chính hãng 100%', 'Đổi trả 7 ngày', 'Giao hàng toàn quốc', 'Thanh toán an toàn', 'Hỗ trợ 24/7'];
  const whyIcons = ['fa-certificate', 'fa-rotate-left', 'fa-truck-fast', 'fa-shield-heart', 'fa-headset'];
  const whyGrid = byId('whyGrid');
  if (whyGrid) {
    whyGrid.innerHTML = whyItems.map((item, index) => `
      <article class="why-item" data-aos="fade-up">
        <i class="fa-solid ${whyIcons[index]}"></i>
        <h3>${item}</h3>
      </article>
    `).join('');
  }

  const testimonialSlider = byId('testimonialSlider');
  if (testimonialSlider) {
    const comments = [
      'Sản phẩm đóng gói đẹp, giao nhanh và tư vấn rất có tâm.',
      'Serum hợp da mình, dùng 2 tuần thấy da sáng hơn.',
      'Website dễ mua, giỏ hàng và voucher rất tiện.'
    ];

    testimonialSlider.innerHTML = comments.map((comment, index) => `
      <article class="testimonial">
        <img src="https://i.pravatar.cc/120?img=${index + 32}" alt="Khách hàng ${index + 1}">
        <h3>Khách hàng ${index + 1}</h3>
        ${stars(5)}
        <p>${comment}</p>
      </article>
    `).join('');
  }

  const countdown = byId('countdown');
  if (countdown) {
    setInterval(() => {
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const distance = endOfDay - Date.now();
      const hours = Math.floor(distance / 36e5);
      const minutes = Math.floor((distance % 36e5) / 6e4);
      const seconds = Math.floor((distance % 6e4) / 1e3);

      countdown.innerHTML = [
        ['Giờ', hours],
        ['Phút', minutes],
        ['Giây', seconds]
      ].map((item) => `
        <div>
          <strong>${String(item[1]).padStart(2, '0')}</strong>
          <span>${item[0]}</span>
        </div>
      `).join('');
    }, 1000);
  }

  byId('newsletterForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    toast(event.target.checkValidity() ? 'Đăng ký thành công' : 'Email chưa hợp lệ');
  });
}

// Khởi tạo bộ lọc, sắp xếp và phân trang cho trang sản phẩm.
function initShop() {
  const list = byId('productList');
  if (!list) return;

  const params = new URL(location.href).searchParams;
  const state = { page: 1 };
  const filterCategory = byId('filterCategory');
  const filterBrand = byId('filterBrand');
  const filterSkin = byId('filterSkin');
  const filterKeyword = byId('filterKeyword');
  const filterPrice = byId('filterPrice');
  const priceLabel = byId('priceLabel');
  const sortProducts = byId('sortProducts');
  const resultCount = byId('resultCount');
  const pagination = byId('pagination');
  const clearFilters = byId('clearFilters');

  [
    ['category', filterCategory],
    ['brand', filterBrand],
    ['skin', filterSkin]
  ].forEach(([key, select]) => {
    const values = [...new Set(products.map((product) => product[key]))];
    values.forEach((value) => select.insertAdjacentHTML('beforeend', `<option>${value}</option>`));
  });

  filterCategory.value = params.get('category') || 'all';
  filterKeyword.value = params.get('q') || '';
  filterPrice.value = filterPrice.max;

  function render() {
    priceLabel.textContent = money(Number(filterPrice.value));

    let filteredProducts = products.filter((product) => (
      (filterCategory.value === 'all' || product.category === filterCategory.value)
      && (filterBrand.value === 'all' || product.brand === filterBrand.value)
      && (filterSkin.value === 'all' || product.skin === filterSkin.value)
      && product.price <= Number(filterPrice.value)
      && product.name.toLowerCase().includes(filterKeyword.value.toLowerCase())
    ));

    if (sortProducts.value === 'price-asc') filteredProducts.sort((a, b) => a.price - b.price);
    if (sortProducts.value === 'price-desc') filteredProducts.sort((a, b) => b.price - a.price);
    if (sortProducts.value === 'newest') filteredProducts.sort((a, b) => b.date - a.date);
    if (sortProducts.value === 'popular') filteredProducts.sort((a, b) => b.sold - a.sold);

    const perPage = 8;
    const totalPages = Math.max(1, Math.ceil(filteredProducts.length / perPage));
    state.page = Math.min(state.page, totalPages);

    resultCount.textContent = `${filteredProducts.length} sản phẩm`;
    list.innerHTML = filteredProducts
      .slice((state.page - 1) * perPage, state.page * perPage)
      .map(productCard)
      .join('') || '<div class="empty">Không tìm thấy sản phẩm phù hợp.</div>';

    pagination.innerHTML = Array.from({ length: totalPages }, (_, index) => `
      <button class="${state.page === index + 1 ? 'active' : ''}" type="button" data-page="${index + 1}">
        ${index + 1}
      </button>
    `).join('');
  }

  document.querySelectorAll('.filters input, .filters select, #sortProducts').forEach((item) => {
    item.addEventListener('input', () => {
      state.page = 1;
      render();
    });
  });

  pagination.addEventListener('click', (event) => {
    if (event.target.dataset.page) {
      state.page = Number(event.target.dataset.page);
      render();
    }
  });

  clearFilters.addEventListener('click', () => {
    filterKeyword.value = '';
    filterCategory.value = 'all';
    filterBrand.value = 'all';
    filterSkin.value = 'all';
    filterPrice.value = 900000;
    render();
  });

  render();
}

// ==================== KHỞI TẠO TRANG CHI TIẾT SẢN PHẨM ====================
function initDetail() {
  const detailPage = byId("detailPage");
  if (!detailPage) return;

  // Lấy id sản phẩm trên URL
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  // Tìm sản phẩm
  const product = products.find(item => item.id === id);

  // Nếu không tìm thấy
  if (!product) {
    detailPage.innerHTML = `
      <div class="empty-state">
        <h2>Không tìm thấy sản phẩm!</h2>
        <a class="btn primary" href="${rootPrefix}html/san-pham.html">
          Quay lại trang sản phẩm
        </a>
      </div>
    `;
    return;
  }

  // Đường dẫn ảnh (giữ nguyên link đầy đủ, chỉ cộng rootPrefix cho ảnh nội bộ)
  const image = resolveImage(product.img);

  // Sản phẩm liên quan
  const related1 = products[(product.id) % products.length];
  const related2 = products[(product.id + 1) % products.length];

  detailPage.innerHTML = `
    <div class="detail-gallery">

      <img id="mainPhoto"
           src="${image}"
           alt="${product.name}">

      <div class="thumb-row">

        <img src="${image}"
             alt="${product.name}"
             onclick="document.getElementById('mainPhoto').src=this.src">

        
      </div>

    </div>

    <div class="detail-info">

      <span class="eyebrow">${product.brand}</span>

      <h1>${product.name}</h1>

      ${stars(product.rating)}

      <div class="price">
        <span class="new-price">${money(product.price)}</span>
        <span class="old-price">${money(product.oldPrice)}</span>
      </div>

      <p>${product.desc}</p>

      <p class="stock">
        <i class="fa-solid fa-box-open"></i>
        Còn hàng: <b>${product.stock}</b> sản phẩm
      </p>

      <button class="btn primary"
              onclick="addCart(${product.id})">
        <i class="fa-solid fa-cart-shopping"></i>
        Thêm vào giỏ hàng
      </button>

      <button class="btn secondary"
              onclick="toggleWish(${product.id})">
        <i class="fa-regular fa-heart"></i>
        Yêu thích
      </button>

      <div class="tabs">

        <details open>
          <summary>Thông số</summary>
          <p><b>Thương hiệu:</b> ${product.brand}</p>
          <p><b>Danh mục:</b> ${product.category}</p>
          <p><b>Loại da:</b> ${product.skin}</p>
          <p><b>Đã bán:</b> ${product.sold}</p>
        </details>

        <details>
          <summary>Mô tả sản phẩm</summary>
          <p>${product.desc}</p>
        </details>

        <details>
          <summary>Hướng dẫn sử dụng</summary>
          <p>Sử dụng theo hướng dẫn của nhà sản xuất. Bảo quản nơi khô ráo, tránh ánh nắng trực tiếp.</p>
        </details>

        <details>
          <summary>Đánh giá</summary>
          <p>Sản phẩm đạt <b>${product.rating}/5 ★</b> từ khách hàng Bloom Beauty.</p>
        </details>

      </div>

    </div>
  `;

  const relatedProducts = byId("relatedProducts");

if (relatedProducts) {

    // Chỉ lấy sản phẩm cùng danh mục (ví dụ: son thì chỉ gợi ý son khác).
    const sameCategory = products
        .filter(item => item.id !== product.id && item.category === product.category)
        .slice(0, 4);

    relatedProducts.innerHTML = sameCategory.length
        ? sameCategory.map(item => productCard(item)).join("")
        : '<p class="empty">Chưa có sản phẩm liên quan khác trong danh mục này.</p>';

}
}

// Khởi tạo trang giỏ hàng và tính tổng tiền.
function initCart() {
  const wrapper = byId('cartItems');
  if (!wrapper) return;

  let discountRate = 0;

  function render() {
    const rows = getStorage('bloomCart').map((item) => {
      const product = products.find((productItem) => productItem.id === item.id);
      return { ...product, qty: item.qty };
    });

    wrapper.innerHTML = rows.length
      ? rows.map((product) => `
        <div class="cart-item">
          <img src="${resolveImage(product.img)}" alt="${product.name}">
          <div>
            <h3>${product.name}</h3>
            <p>${money(product.price)}</p>
            <div class="qty">
              <button type="button" data-dec="${product.id}">-</button>
              <b>${product.qty}</b>
              <button type="button" data-inc="${product.id}">+</button>
            </div>
          </div>
          <div>
            <strong>${money(product.price * product.qty)}</strong><br>
            <button class="remove-btn" type="button" data-rm="${product.id}">Xóa</button>
          </div>
        </div>
      `).join('')
      : '<div class="empty">Giỏ hàng đang trống.</div>';

    const subtotal = rows.reduce((sum, product) => sum + product.price * product.qty, 0);
    const discount = subtotal * discountRate;

    byId('subtotal').textContent = money(subtotal);
    byId('discount').textContent = money(discount);
    byId('grandTotal').textContent = money(subtotal - discount);
    updateCounts();
  }

  wrapper.addEventListener('click', (event) => {
    let cart = getStorage('bloomCart');

    if (event.target.dataset.inc) {
      cart.find((item) => item.id === Number(event.target.dataset.inc)).qty += 1;
    }

    if (event.target.dataset.dec) {
      const item = cart.find((cartItem) => cartItem.id === Number(event.target.dataset.dec));
      item.qty = Math.max(1, item.qty - 1);
    }

    if (event.target.dataset.rm) {
      cart = cart.filter((item) => item.id !== Number(event.target.dataset.rm));
    }

    setStorage('bloomCart', cart);
    render();
  });

  byId('applyVoucher').addEventListener('click', () => {
    discountRate = byId('voucherInput').value.trim().toUpperCase() === 'BLOOM10' ? 0.1 : 0;
    toast(discountRate ? 'Đã áp dụng voucher' : 'Voucher không hợp lệ');
    render();
  });

  render();
}

// Khởi tạo trang thanh toán.
function initCheckout() {
  const summary = byId('checkoutSummary');
  const checkoutForm = byId('checkoutForm');
  if (!summary || !checkoutForm) return;

  const rows = getStorage('bloomCart').map((item) => {
    const product = products.find((productItem) => productItem.id === item.id);
    return { ...product, qty: item.qty };
  });
  const total = rows.reduce((sum, product) => sum + product.price * product.qty, 0);

  summary.innerHTML = `
    <img class="summary-image" src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80" alt="Gói hàng mỹ phẩm Bloom Beauty">
    <h3>Đơn hàng</h3>
    ${rows.map((product) => `<p>${product.name} x ${product.qty} <b>${money(product.price * product.qty)}</b></p>`).join('')}
    <h3>Tổng: ${money(total)}</h3>
  `;

  checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!checkoutForm.checkValidity()) {
      toast('Vui lòng kiểm tra thông tin');
      return;
    }

    localStorage.removeItem('bloomCart');
    updateCounts();
    toast('Đặt hàng thành công! Bloom Beauty sẽ liên hệ bạn sớm.');
  });
}

// Khởi tạo trang sản phẩm yêu thích.
function initWishlist() {
  const wishlistList = byId('wishlistList');
  if (!wishlistList) return;

  wishlistList.innerHTML = products
    .filter((product) => getStorage('bloomWish').includes(product.id))
    .map(productCard)
    .join('') || '<div class="empty">Bạn chưa có sản phẩm yêu thích.</div>';
}

// Khởi tạo form liên hệ và form đăng nhập mẫu.
function initForms() {
  ['contactForm', 'loginForm'].forEach((id) => {
    const form = byId(id);

    form?.addEventListener('submit', (event) => {
      event.preventDefault();
      toast(event.target.checkValidity() ? 'Gửi thông tin thành công' : 'Vui lòng kiểm tra lại thông tin');
    });
  });
}

// Chạy toàn bộ hàm khởi tạo sau khi HTML đã tải xong.
document.addEventListener('DOMContentLoaded', () => {
  initCommon();
  initHome();
  initShop();
  initDetail();
  initCart();
  initCheckout();
  initWishlist();
  initForms();
});
