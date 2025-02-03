var AppId = ["310062006100640063006200370035002D0063003600650063002D0034003100360066002D0039003500610034002D00660037006600650039003700650031003800340035003900", "660032003300640038003500630037002D0062003700370031002D0034003400390035002D0038003400650038002D00340035003200610065006500610037003600310032006400", "370038003100610064003600620063002D0036006200360066002D0034003300350034002D0062003900390030002D00610032006200330064003600620065003100660039003600", "340031003900610064003400380061002D0031003900340038002D0034003700360030002D0062006500320066002D00650035003900620033003700620063003400310033003200"];
/*0:U5KUN, 1:旧脱獄, 2:隠れん坊オンライン, 3:かめっち*/
var base = h5gg.getRangesList("UnityFramework")[0].start;

function setAppId(bytes) {
      h5gg.clearResults();
      var addr1 = h5gg.getValue(base + 0x4AAEAE0, 'U64');
      var addr2 = h5gg.getValue(Number(addr1) + 0xB8, 'U64');
      var addr3 = h5gg.getValue(Number(addr2) + 0x170, 'U64');
      var addr4 = h5gg.getValue(Number(addr3) + 0x690, 'U64');
      var addr5 = Number(addr4) + 0x14;
      patchBytes(addr5,bytes);
}

function patchBytes(addr, hex) {
    for (i = 0; i < hex.length / 2; i++) {
        var item = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
        h5gg.setValue(addr + i, item, "U8");
    }
}

setAppId(AppId[Number(prompt("AppId変更\n0:U5KUN\n1:旧脱獄\n2:隠れん坊オンライン\n3:かめっち"))]);
