function convert() {
    var muatan = document.getElementById("input_muatan").value;
    var jarak = document.getElementById("input_jarak").value;

    var jarak_kem = jarak / 100;

    var k = 9000000000;
    var q = muatan * 0.000001;
    var r = jarak_kem * jarak_kem;

    var kuat_medan_listrik = k * q / r;

    if(kuat_medan_listrik < 0){
        var arah = "kiri";
    }else if(kuat_medan_listrik > 0){
        var arah = "kanan";
    }else {
        var arah = "error";
    }

    document.getElementById("hasil").innerHTML = kuat_medan_listrik+"N/C";
    document.getElementById("arah-arus").innerHTML = arah;
}