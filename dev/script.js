function navigateToPage(event) {
    event.preventDefault(); // Mencegah perilaku default dari tautan

    var href = event.target.getAttribute('href'); // Mendapatkan nilai atribut href dari tautan

    // Pindah ke halaman baru dengan menggunakan window.location.href
    window.location.href = href;
}
