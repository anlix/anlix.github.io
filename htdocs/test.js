
function settime() {
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    h = timeTransform(h);
    m = timeTransform(m);
    s = timeTransform(s);
    var test = document.getElementById("p-test");
    test.innerHTML = h + ":" + m + ":" + s;
    t = setTimeout('settime()', 500);
}

function timeTransform(k) {
    if (k < 10) { k = "0" + k }
    return k;
}



//改变一个块的背景色
function change() { 
    var a;
    
    a = document.getElementById("p-test");
    //var color;
    //color = ;

    if (rgbToHex(a.style.backgroundColor) == "#ff6741") {
        a.style.backgroundColor = "#ddd";
    }
    else { a.style.backgroundColor= "#ff6741"; }

   
}
//rgb转换成16进制
function zero_fill_hex(num, digits) {
    var s = num.toString(16);
    while (s.length < digits)
        s = "0" + s;
    return s;
}


function rgb2hex(rgb) {

    if (rgb.charAt(0) == '#')
        return rgb;

    var ds = rgb.split(/\D+/);
    var decimal = Number(ds[1]) * 65536 + Number(ds[2]) * 256 + Number(ds[3]);
    return "#" + zero_fill_hex(decimal, 6);
}

//rgb转换成16进制

function rgbToHex(rgb) {
    var ds = rgb.split(/\D+/);
    return "#"+((Number(ds[1]) << 16) | (Number(ds[2]) << 8) | Number(ds[3])).toString(16);
}
