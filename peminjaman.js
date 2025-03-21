class Kendaraan {
    constructor(nama, jenis) {
        this.nama = nama;   // Nama kendaraan
        this.jenis = jenis; // Jenis kendaraan (mobil/motor)
        this.disewa = false; // Status apakah kendaraan sedang disewa atau tidak
    }

    sewa() {
        if (!this.disewa) {  // Jika kendaraan belum disewa
            this.disewa = true; // Tandai kendaraan sebagai disewa
            return true;  // Mengembalikan status berhasil menyewa
        }
        return false; // Jika kendaraan sudah disewa, kembalikan false
    }

    kembalikan() {
        this.disewa = false; // Mengubah status kendaraan menjadi tidak disewa
    }
}


class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;  // Nama pelanggan
        this.nomorTelepon = nomorTelepon; // Nomor telepon pelanggan
        this.kendaraanDisewa = null; // Kendaraan yang sedang disewa, awalnya null
    }

    sewaKendaraan(kendaraan) {
        if (kendaraan.sewa()) {  // Jika kendaraan tersedia untuk disewa
            this.kendaraanDisewa = kendaraan; // Simpan kendaraan yang disewa pelanggan
            console.log(`${this.nama} berhasil menyewa ${kendaraan.nama}.`);
        } else {
            console.log(`${kendaraan.nama} sudah disewa.`); // Jika kendaraan tidak tersedia
        }
    }

    kembalikanKendaraan() {
        if (this.kendaraanDisewa) { // Jika pelanggan sedang menyewa kendaraan
            console.log(`${this.nama} mengembalikan ${this.kendaraanDisewa.nama}.`);
            this.kendaraanDisewa.kembalikan(); // Panggil metode kembalikan pada kendaraan
            this.kendaraanDisewa = null; // Set kendaraan yang disewa menjadi null
        } else {
            console.log(`${this.nama} tidak memiliki kendaraan yang disewa.`);
        }
    }
}


class SistemManajemenTransportasi {
    constructor() {
        this.pelangganList = []; // Array untuk menyimpan daftar pelanggan
    }

    tambahPelanggan(pelanggan) {
        this.pelangganList.push(pelanggan); // Menambahkan pelanggan ke dalam daftar
    }

    tampilkanPelangganYangMenyewa() {
        console.log("Daftar Pelanggan yang Menyewa Kendaraan:");
        this.pelangganList.forEach(pelanggan => {
            if (pelanggan.kendaraanDisewa) { // Jika pelanggan sedang menyewa kendaraan
                console.log(`${pelanggan.nama} menyewa ${pelanggan.kendaraanDisewa.nama}.`);
            }
        });
    }
}


// Contoh penggunaan
// Membuat instance dari sistem manajemen transportasi
const sistem = new SistemManajemenTransportasi();

// Membuat kendaraan yang tersedia untuk disewa
const kendaraan1 = new Kendaraan("Toyota Avanza", "Mobil");
const kendaraan2 = new Kendaraan("Yamaha NMAX", "Motor");

// Membuat pelanggan
const pelanggan1 = new Pelanggan("Mahmudi", "08123456789");
const pelanggan2 = new Pelanggan("fauzi", "08987654321");

// Menambahkan pelanggan ke sistem
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

// Pelanggan menyewa kendaraan
pelanggan1.sewaKendaraan(kendaraan1);
pelanggan2.sewaKendaraan(kendaraan2);

// Menampilkan daftar pelanggan yang sedang menyewa kendaraan
sistem.tampilkanPelangganYangMenyewa();

