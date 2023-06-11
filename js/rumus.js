function convert1() {
    var muatan = document.getElementById("input_muatan").value;
    var jarak = document.getElementById("input_jarak1").value;

    var jarak_kem = jarak / 100;

    var k = 9000000000;
    var q = muatan;
    var r = jarak_kem * jarak_kem;

    var kuat_medan_listrik = k * q / r;

    if(kuat_medan_listrik < 0){
        var arah = "kiri";
    }else if(kuat_medan_listrik > 0){
        var arah = "kanan";
    }else {
        var arah = "error";
    }

    document.getElementById("hasil-convert1").innerHTML = kuat_medan_listrik+"N/C";
    document.getElementById("arah-arus").innerHTML = arah;
}

function convert2() {
    var kuat = document.getElementById("input_kuat_listrik").value;
    var jarak = document.getElementById("input_jarak2").value;

    var jarak_kem = jarak / 100;

    var k = 9000000000;
    var E = kuat;
    var r = jarak_kem * jarak_kem;

    var muatan = E * r / k;
    var q = muatan;


    document.getElementById("hasil-convert2").innerHTML = q +"C";
}

function convert3() {
    var muatan = document.getElementById("ingfo_muatan").value;
    var kuat = document.getElementById("kuat_medan_listrik").value;

    // var jarak_kem = jarak / 100;

    var k = 9000000000;
    var q = muatan;

    var r = Math.sqrt(k * q / kuat)
    // var kuat_medan_listrik = k * q / r;


    document.getElementById("hasil-convert3").innerHTML = r + "M";
}
