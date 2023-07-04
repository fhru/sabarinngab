window.addEventListener('wheel', function (event) {
    if (event.ctrlKey === true) {
        event.preventDefault();
    }
}, { passive: false });

window.addEventListener('gesturestart', function (event) {
    event.preventDefault();
}, { passive: false });


// =================================================================
function checkAnswers() {
    var selectedOptions = document.querySelectorAll('input[type="radio"]:checked');
    var correctAnswers = ['d', 'c', 'a', 'c', 'd', 'b', 'a', 'a', 'b', 'c'];
    var score = 0;

    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (message) {
        message.innerHTML = "";
        message.classList.remove('alert'); // Menghapus kelas "alert" jika sudah ada sebelumnya
    });

    // Validasi apakah semua pilihan telah diisi
    var allOptionsFilled = true;
    var radioGroups = document.querySelectorAll('.options');
    radioGroups.forEach(function (group) {
        var selectedOption = group.querySelector('input[type="radio"]:checked');
        if (!selectedOption) {
            allOptionsFilled = false;
            var errorMessage = group.querySelector('.error-message');
            errorMessage.innerHTML = "Pilih salah satu jawaban.";
            errorMessage.classList.add('alert'); // Menambahkan kelas "alert"
        }
    });

    if (!allOptionsFilled) {
        return; // Jika ada pilihan yang belum diisi, hentikan proses pengecekan jawaban
    }

    // Pengecekan jawaban
    for (var i = 0; i < selectedOptions.length; i++) {
        if (selectedOptions[i].value === correctAnswers[i]) {
            score++;
        } else {
            var questionNumber = i + 1;
            var errorMessage = document.getElementById('error-message-q' + questionNumber);
            errorMessage.innerHTML = "Jawaban salah. Silakan coba lagi.";
            errorMessage.classList.add('alert'); // Menambahkan kelas "alert"
        }
    }

    var result = document.getElementById('result');
    result.innerHTML = "Skor Anda: " + score * 10;

    // Menonaktifkan input radio setelah tombol "Submit" ditekan
    var radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(function (input) {
        input.disabled = true;
    });

    // Menonaktifkan tombol "Submit" setelah tombol ditekan
    var submitButton = document.querySelector('.submit-btn');
    submitButton.disabled = true;
}
