// Fungsi untuk membuat elemen kartu (Card)
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <img src="assets/logo-ut.png" class="book-img" onerror="this.src='https://via.placeholder.com/400x180?text=Cover+Buku'">
        
        <div class="info-box">
            <div class="label">Kode Lokasi</div>
            <div class="value">${item.kodeLokasi || '0TMP01-NEW'}</div>
        </div>

        <div class="info-box">
            <div class="label">Kode Barang</div>
            <div class="value">${item.kodeBarang || 'ASIP4301-NEW'}</div>
        </div>

        <div class="info-box">
            <div class="label">Nama Barang</div>
            <div class="value">${item.namaBarang}</div>
        </div>

        <div class="row-flex">
            <div class="info-box flex-1">
                <div class="label">Jenis Barang</div>
                <div class="value">${item.jenisBarang || 'BMP'}</div>
            </div>
            <div class="info-box flex-1">
                <div class="label">Edisi</div>
                <div class="value">${item.edisi || '2'}</div>
            </div>
            <div class="info-box flex-1">
                <div class="label">Stok</div>
                <div class="value">${item.stok}</div>
            </div>
        </div>
    `;
    return card;
}

// Render data awal dari data.js
function renderAll() {
    const container = document.getElementById('display-area');
    container.innerHTML = '';
    dataBahanAjar.forEach(item => {
        container.appendChild(createCard(item));
    });
}

// Fungsi Tambah Data Baru (DOM)
function tambahData() {
    const nama = document.getElementById('inNama').value;
    const stok = document.getElementById('inStok').value;

    if (!nama || !stok) {
        alert("Isi nama dan stok!");
        return;
    }

    const container = document.getElementById('display-area');
    const newData = {
        namaBarang: nama,
        stok: stok,
        kodeLokasi: "0TMP01" + (dataBahanAjar.length + 1),
        kodeBarang: "ASIP4301" + (4000 + dataBahanAjar.length),
        jenisBarang: "BMP",
        edisi: 2
    };

    // Tambahkan ke tampilan paling atas
    container.prepend(createCard(newData));

    // Reset input
    document.getElementById('inNama').value = '';
    document.getElementById('inStok').value = '';
}

// Jalankan saat load
window.onload = renderAll;