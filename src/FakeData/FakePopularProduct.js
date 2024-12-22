const sahteUrunVerisi = [
    { id: 1, title: "Kadın Elbisesi", description: "Şık ve rahat bir yaz elbisesi.", price: "149,99 TL", img: "https://via.placeholder.com/150?text=Kadın+Elbisesi", link: "/urun/1", rating: 4.5 },
    { id: 2, title: "Erkek Tişört", description: "Konforlu ve günlük kullanım için ideal tişört.", price: "79,99 TL", img: "https://via.placeholder.com/150?text=Erkek+Tişört", link: "/urun/2", rating: 4.0 },
    { id: 3, title: "Anne Çocuk Seti", description: "Anne ve çocuk için uyumlu set.", price: "249,99 TL", img: "https://via.placeholder.com/150?text=Anne+Çocuk+Seti", link: "/urun/3", rating: 4.8 },
    { id: 4, title: "Ev Dekorasyon Ürünü", description: "Evinize şıklık katacak dekoratif obje.", price: "99,99 TL", img: "https://via.placeholder.com/150?text=Ev+Dekorasyonu", link: "/urun/4", rating: 4.3 },
    { id: 5, title: "Kozmetik Seti", description: "Cilt bakımını tamamlayacak set.", price: "349,99 TL", img: "https://via.placeholder.com/150?text=Kozmetik+Seti", link: "/urun/5", rating: 4.7 },
    { id: 6, title: "Ayakkabı", description: "Konforlu ve şık bir günlük ayakkabı.", price: "199,99 TL", img: "https://via.placeholder.com/150?text=Ayakkabı", link: "/urun/6", rating: 4.1 },
    { id: 7, title: "Kadın Çantası", description: "Şık ve kullanışlı bir kadın çantası.", price: "299,99 TL", img: "https://via.placeholder.com/150?text=Kadın+Çantası", link: "/urun/7", rating: 4.6 },
    { id: 8, title: "Elektronik Saat", description: "Gelişmiş özelliklere sahip bir elektronik saat.", price: "499,99 TL", img: "https://via.placeholder.com/150?text=Elektronik+Saat", link: "/urun/8", rating: 3.9 },
    { id: 9, title: "Süpermarket Ürünleri", description: "Ev ihtiyaçlarınızı karşılayacak ürünler.", price: "59,99 TL", img: "https://via.placeholder.com/150?text=Süpermarket", link: "/urun/9", rating: 4.2 },
    { id: 10, title: "Telefon Kılıfı", description: "Telefonunuzu koruyacak şık bir kılıf.", price: "49,99 TL", img: "https://via.placeholder.com/150?text=Telefon+Kılıfı", link: "/urun/10", rating: 4.4 },
    { id: 11, title: "Çok Satan Kitap", description: "En çok satan romanlar ve kitaplar.", price: "69,99 TL", img: "https://via.placeholder.com/150?text=Çok+Satan+Kitap", link: "/urun/11", rating: 4.9 },
    { id: 12, title: "Flaş Ürün", description: "Sadece sınırlı süreliğine satılan özel ürün.", price: "399,99 TL", img: "https://via.placeholder.com/150?text=Flaş+Ürün", link: "/urun/12", rating: 3.8 },
    { id: 13, title: "Kadın Parfümü", description: "Kadınlar için özel parfüm seti.", price: "249,99 TL", img: "https://via.placeholder.com/150?text=Kadın+Parfümü", link: "/urun/13", rating: 4.5 },
    { id: 14, title: "Erkek Montu", description: "Kış aylarında sizi sıcacık tutacak mont.", price: "399,99 TL", img: "https://via.placeholder.com/150?text=Erkek+Montu", link: "/urun/14", rating: 4.3 },
    { id: 15, title: "Çocuk Oyuncağı", description: "Çocuklar için eğitici ve eğlenceli oyuncak.", price: "79,99 TL", img: "https://via.placeholder.com/150?text=Çocuk+Oyuncağı", link: "/urun/15", rating: 4.0 },
    { id: 16, title: "Spor Malzemesi", description: "Günlük spor ihtiyaçlarınız için ideal.", price: "299,99 TL", img: "https://via.placeholder.com/150?text=Spor+Malzemesi", link: "/urun/16", rating: 4.4 },
    { id: 17, title: "Kahve Makinesi", description: "Lezzetli kahveler hazırlamak için ideal.", price: "599,99 TL", img: "https://via.placeholder.com/150?text=Kahve+Makinesi", link: "/urun/17", rating: 4.8 },
    { id: 18, title: "Laptop Çantası", description: "Laptopunuz için şık ve dayanıklı çanta.", price: "149,99 TL", img: "https://via.placeholder.com/150?text=Laptop+Çantası", link: "/urun/18", rating: 4.3 },
    { id: 19, title: "Bluetooth Kulaklık", description: "Yüksek kaliteli ses deneyimi sunar.", price: "299,99 TL", img: "https://via.placeholder.com/150?text=Bluetooth+Kulaklık", link: "/urun/19", rating: 4.6 },
    { id: 20, title: "Çalışma Masası", description: "Şık ve kullanışlı bir çalışma masası.", price: "799,99 TL", img: "https://via.placeholder.com/150?text=Çalışma+Masası", link: "/urun/20", rating: 4.7 },
    { id: 21, title: "Tablet", description: "Günlük işleriniz için ideal bir tablet.", price: "999,99 TL", img: "https://via.placeholder.com/150?text=Tablet", link: "/urun/21", rating: 4.2 },
    { id: 22, title: "Fitness Aleti", description: "Evde spor yapmak için mükemmel seçim.", price: "499,99 TL", img: "https://via.placeholder.com/150?text=Fitness+Aleti", link: "/urun/22", rating: 4.5 },
    { id: 23, title: "Bebek Arabası", description: "Konforlu ve güvenli bir bebek arabası.", price: "1.299,99 TL", img: "https://via.placeholder.com/150?text=Bebek+Arabası", link: "/urun/23", rating: 4.8 },
    { id: 24, title: "Hobi Seti", description: "Hobileriniz için ideal set.", price: "89,99 TL", img: "https://via.placeholder.com/150?text=Hobi+Seti", link: "/urun/24", rating: 4.3 },
    { id: 25, title: "Ofis Koltuğu", description: "Konforlu bir çalışma koltuğu.", price: "1.199,99 TL", img: "https://via.placeholder.com/150?text=Ofis+Koltuğu", link: "/urun/25", rating: 4.6 },
];

export default sahteUrunVerisi;
