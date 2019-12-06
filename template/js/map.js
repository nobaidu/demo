// 百度地图API功能
var sContent =
    "<div>" +
    "<h4 style='margin:0 0 5px 0;font-size:13px'>加盟总部</h4>" + "" +
    "<p style='margin:0;line-height:1.5;font-size:13px;'>地址:山东省济南市高新区奥盛大厦3号楼<br/>电话:400-0301-899</p>" +
    "</div>";
var map = new BMap.Map("map");
var point = new BMap.Point(117.143425, 36.682787);
var marker = new BMap.Marker(point);
var infoWindow = new BMap.InfoWindow(sContent); // 创建信息窗口对象
map.centerAndZoom(point, 15);
map.addOverlay(marker);
map.openInfoWindow(infoWindow, map.getCenter());
marker.addEventListener("click", function () {
    this.openInfoWindow(infoWindow);

    //图片加载完毕重绘infowindow
    document.getElementById('imgDemo').onload =
        function () {
            infoWindow.redraw(); //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
        }
});
//添加默认缩放平移控件
map.addControl(new BMap.NavigationControl());

//右上角，仅包含平移和缩放按钮
map.addControl(new BMap.NavigationControl({
    anchor: BMAP_ANCHOR_TOP_RIGHT,
    type: BMAP_NAVIGATION_CONTROL_SMALL
}));
map.disableDragging();