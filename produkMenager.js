// **Data Produk**
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Headphone", harga: 1500000 },
    { id: 5, nama: "Smartwatch", harga: 2500000 }
];

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
    produkList = [...produkList, { id, nama, harga }];
    console.log(`Produk ${nama} berhasil ditambahkan!`);
}

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(...ids) {
    produkList = produkList.filter(produk => !ids.includes(produk.id));
    console.log(`Produk dengan ID ${ids} berhasil dihapus!`);
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
    console.log("Daftar Produk:");
    produkList.forEach(({ id, nama, harga }) => {
        console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
    });
}

// **Event Listener untuk penambahan produk**
const eventHandler = {
    tambah: (id, nama, harga) => tambahProduk(id, nama, harga),
    hapus: (...ids) => hapusProduk(...ids),
    tampilkan: () => tampilkanProduk()
};

// Contoh Penggunaan
eventHandler.tampilkan();
eventHandler.tambah(6, "Monitor", 3000000);
eventHandler.tampilkan();
eventHandler.hapus(2, 4);
eventHandler.tampilkan();
