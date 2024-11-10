// Fungsi untuk toggle konten subjudul
function toggleContent(id) {
    const content = document.getElementById(id);
    const isConfirmed = confirm("Apakah Anda ingin menyembunyikan konten ini?");
    if (isConfirmed) {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    }
}

// Fungsi untuk toggle mode tampilan
document.getElementById("toggleMode").addEventListener("click", function() {
    document.body.classList.toggle("tidy-mode");
    document.body.classList.toggle("messy-mode");
});
