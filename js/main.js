
// mostrar abas cliente e empresa

function mostrar() {
  var o = document.getElementById("topicosCli");
  o.style.visibility = 'visible';
}

function ocultar() {
  var o = document.getElementById("topicosCli");
  o.style.visibility = 'hidden';
}

function mostrar2() {
  var o = document.getElementById("topicosEmp");
  o.style.visibility = 'visible';
}

function ocultar2() {
  var o = document.getElementById("topicosEmp");
  o.style.visibility = 'hidden';
}

function showAcess() {
  var menuacess = document.getElementById("menu-acess")
  var sidebar = document.getElementById("sidebar-acess");
  var textver = document.getElementById("text-ver");
  menuacess.style.height = '300px'
  menuacess.style.width = '100px'
  menuacess.style.transition = '0.4s all ease'
  sidebar.style.visibility = 'visible';
  sidebar.style.width = '100px';
  textver.style.visibility = 'hidden'
}

function ocultAcess() {
  var menuacess = document.getElementById("menu-acess")
  var sidebar = document.getElementById("sidebar-acess");
  var textver = document.getElementById("text-ver");
  sidebar.style.visibility = 'hidden';
  menuacess.style.height = '215px'
  menuacess.style.width = '70px'
  textver.style.visibility = 'visible'
};




window.onload = function () {
  var aCliEmp = document.getElementById("abaCliEmp")
  var footermain = document.getElementById("footer-main")
  var aConsulta = document.getElementById("consulta")
  var fontSize = 100
  var aumdim = 10
  var bttAum = document.getElementById("bttAum")
  var bttDim = document.getElementById("bttDim")

  bttAum.addEventListener('click', function (event) {
    fontSize = fontSize + aumdim;
    margin = 10 + aumdim
    aConsulta.style.height = fontSize + '%'
    aCliEmp.style.height = fontSize + '%'
    aConsulta.style.fontSize = fontSize + '%';
    aCliEmp.style.fontSize = fontSize + '%';
    footermain.style.marginTop = margin + '%'
  });

  bttDim.addEventListener('click', function (event) {
    fontSize = fontSize - aumdim
    aConsulta.style.fontSize = fontSize + '%';
    aCliEmp.style.fontSize = fontSize + '%';
  });
}



function modoDark() {
  var bodymode = document.querySelector('body')
  var consult = document.getElementById("consulta")
  var aCliEmp = document.getElementById("abaCliEmp")
  var footermain = document.getElementById("footer-main")
  var bttLight = document.getElementById("bttLight")
  var bttDark = document.getElementById("bttDark")
  var h1font = document.getElementsByClassName('h1prin')
  var bttConvConsul = document.getElementById("bttConvConsul")
  bodymode.style.backgroundColor = '#222222'
  aCliEmp.style.backgroundColor = '#121212'
  footermain.style.backgroundColor = '#121212'

  var p1 = document.getElementById("p1")
  var p2 = document.getElementById("p2")
  var p3 = document.getElementById("p3")
  var p4 = document.getElementById("p4")
  var p5 = document.getElementById("p5")
  var p6 = document.getElementById("p6")
  var p7 = document.getElementById("p7")
  var p8 = document.getElementById("p8")
  var p9 = document.getElementById("p9")
  var p10 = document.getElementById("p10")
  var p11 = document.getElementById("p11")
  var t1 = document.getElementById("t1")
  var t2 = document.getElementById("t2")
  var t3 = document.getElementById("t3")
  var fo1 = document.getElementById("fo1")
  var fo2 = document.getElementById("fo2")
  var fo3 = document.getElementById("fo3")
  var fo4 = document.getElementById("fo4")
  var foimg1 = document.getElementById("foimg1")
  var foimg2 = document.getElementById("foimg2")
  var h1AbaMain = document.getElementById("h1AbaMain")
  var footerlink = document.querySelector('#footer-main')

  p1.style.color = 'white'
  t1.style.color = 'white'
  bttConvConsul.style.backgroundColor = '#68a797'
  h1AbaMain.style.color = 'white'
  p2.style.color = 'white'
  p3.style.color = 'white'
  p4.style.color = 'white'
  p5.style.color = 'white'
  p6.style.color = 'white'
  p7.style.color = 'white'
  p8.style.color = 'white'
  p9.style.color = 'white'
  p10.style.color = 'white'
  p11.style.color = 'white'
  t2.style.color = 'white'
  t3.style.color = 'white'
  fo1.style.color = 'white'
  fo2.style.color = 'white'
  fo3.style.color = 'white'
  fo4.style.color = 'white'
  foimg1.style.filter = 'brightness(1000%)'
  foimg2.style.filter = 'brightness(1000%)'
}

function modoLight() {
  location.reload()
}


