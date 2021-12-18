function phat_sinh() {
	let mang = [];
	let a = parseFloat(document.getElementById('nhap_soo').value);
	if ((a % 1 != 0) || (a < 0)){
		alert("Vui lòng nhập giá trị nguyên và lớn hơn 0");
	}
	else{
		let so_ngau_nhien ;
		let i = 0 ;
		while (i < a){
			so_ngau_nhien = Math.floor(Math.random() * 21);
			mang.push(so_ngau_nhien);
			i++;
		}
		let mang_in = mang.join("; ");
		let max = mang[0];
		let min = mang[0];
		let z = 1;
		while (z < mang.length){
			if(mang[0] < mang[z]){
				max = mang[z];
			}
			z++;
		}
		let c = 1;
		while (c < mang.length){
			if(mang[0] > mang[c]){
				min = mang[c];
			}
			c++;
		}
		let tong = 0 ;
		let b = 0 ;
		while (b < mang.length){
			tong += mang[b];
			b++;
		}
		document.getElementById('ghi_ket_qua').innerHTML = "Mảng: " + mang_in + '<br>' + "GTLN trong mảng: " + max + '<br>' + 'GTNN trong mảng: ' + min + '<br>' + "Tổng các phần tử: " + tong;
	}
	
}
//Xóa số vừa nhập
function tai_lai() {
	document.getElementById("main").reset();
}
//Nhấn Enter
document.addEventListener('keypress', event =>{
	if(event.keyCode === 13 || event.which === 13)
	{
		document.getElementById('button').click();
		event.preventDefault();
		return false;
	}
});

