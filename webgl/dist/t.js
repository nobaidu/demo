//场景
var scence = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(8000,window.innerWidth/window.innerHeight,0.1,1000);
var renderr = new THREE.WebGLRenderer();

renderr.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderr.domElement);

//相机
var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color:0x00ff00 });
var cube = new THREE.Mesh(geometry,material);
scence.add(cube);

camera.position.z = 5;

//渲染
function render(){
    requestAnimationFrame(render);
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    renderr.render(scence,camera)
}
render();