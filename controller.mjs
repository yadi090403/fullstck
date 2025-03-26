import users from "./data.mjs";

const index = () => {
    users.map((user, index) => {
        console.log(`${index + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
    });
};

const store = (user) => {
    users.push(user);
    console.log("Data berhasil ditambahkan.");
};

const destroy = () => {
    users.pop();
    console.log("Data terakhir berhasil dihapus.");
};

export { index, store, destroy };
