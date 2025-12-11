// Ambil semua elemen kartu kuliner
const cards = document.querySelectorAll('.kuliner-card');

// Mapping judul ke halaman detail
const pageMapping = {
    'Rendang': 'rendang.html',
    'Sate Madura': 'sate-madura.html',
    'Papeda': 'papeda.html',
    'Gado-Gado': 'gado-gado.html'
};

// Fungsi navigasi ke halaman detail saat kartu diklik
cards.forEach(card => {
    card.addEventListener('click', function() {
        const title = this.dataset.title;
        const page = pageMapping[title];
        if (page) {
            window.location.href = page;
        }
    });
});
