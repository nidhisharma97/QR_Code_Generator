var qrcode = new QRCode(document.getElementById("yourid"), {
	text: 'MyText',
	width: 200,
	height: 200,
	colorDark : "#000",
	colorLight : "#fff",
	correctLevel : QRCode.CorrectLevel.H
});
function refreshqr(){
  qrcode.makeCode(document.getElementById('myinput').value); // make another code.
}