$(document).ready(function(){
    initMap();
});
/**
 * 初始化Map
 * 
 */
function initMap(){
    let map = L.map('mymap');
    // 設定經緯度座標
     map.setView(new L.LatLng(25.047739,121.517040), 14);
  
    // 設定圖資來源
    let osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    let osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 16});
    let dangerCircle = L.circle([25.063274,121.500762],1000,{color:'red',fillColor:"#f03", fillOpacity: 0.5}).addTo(map).bindPopup('這是危險區');

    let taipeiBridge = L.marker([25.063274,121.500762]).addTo(map).bindPopup('台北橋捷運站').openPopup();
    let dangearea = L.marker([25.080031,121.575079]).addTo(map).bindPopup('恐怖地帶').openPopup();
    let secondDangerCircle = L.circle([25.080031,121.575079], 1000,{color:'red',fillColor:"#f03", fillOpacity: 0.5}).addTo(map).bindPopup('第2個危險區');
    let taipeiTransStation = L.marker([25.047739,121.517040]).addTo(map).bindPopup('台北火車站').openPopup();
    let polygon = L.polygon([[25.063274,121.500762] ,[25.047739,121.517040], [25.080031,121.575079] ],{color:'blue',fillColor:"#00F", fillOpacity: 0.5}).addTo(map);
    let thirdCirCle = L.circle([25.047739,121.517040],1000, {color:'green',fillColor:"#0f0", fillOpacity: 0.5}).addTo(map);
    map.addLayer(osm);
}