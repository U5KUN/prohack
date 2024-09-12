h5gg.clearResults();
var base = Number(h5gg.getRangesList("UnityFramework")[0].start);
var AppId = ["310062006100640063006200370035002D0063003600650063002D0034003100360066002D0039003500610034002D00660037006600650039003700650031003800340035003900", "660032003300640038003500630037002D0062003700370031002D0034003400390035002D0038003400650038002D00340035003200610065006500610037003600310032006400", "370038003100610064003600620063002D0036006200360066002D0034003300350034002D0062003900390030002D00610032006200330064003600620065003100660039003600", "340031003900610064003400380061002D0031003900340038002D0034003700360030002D0062006500320066002D00650035003900620033003700620063003400310033003200"]
/*0:U5KUN, 1:旧脱獄, 2:隠れん坊オンライン, 3:かめっち*/

var uaddr1 = h5gg.getValue(base + 0x4A3D0C8, 'U64');
var uaddr2 = h5gg.getValue(Number(uaddr2) + 0x434, 'U64');
var username = readUTF16String(uaddr2, 20);

var aaddr1 = h5gg.getValue(Number(base) + 0x4A08CD8, "U64");
var aaddr2 = h5gg.getValue(Number(aaddr1) + 0xB8, "U64");
var aaddr3 = h5gg.getValue(Number(aaddr2) + 0xB8, "U64");
var aaddr4 = h5gg.getValue(Number(aaddr3) + 0x490, "U64");
var aaddr5 = Number(aaddr4) + 0x14;
var achoice = prompt("Enter AppId Index");
patchBytes(aaddr5, AppId[Number(achoice)])


function readUTF16String(address, maxlen) {
    var str = "";
    for (var s = 0; !maxlen || s < maxlen; s++) {
        var charCode = Number(h5gg.getValue(address + s * 2, "U16"));
        if (!charCode) break;
        str += String.fromCharCode(charCode);
    }
    return str;
}

function patchBytes(addr, hex) {
    for (i = 0; i < hex.length / 2; i++) {
        var item = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
        h5gg.setValue(addr + i, item, "U8");
    }
}

document.getElementById('username').textContent = "ユーザー名:" + resultString;
fetch('/send-data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ number: resultString }) // 数値10をサーバーに送信
})
    .then(response => response.text())
    .catch(error => {
        console.error('エラー:', error);
    });