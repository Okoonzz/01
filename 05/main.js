//hàm để kết nối button với input
function in_ra() {
	//đặt tên biến là giá trị của input 
	let so = document.getElementById('input_so').value ; 
	if ((so % 2) == 0){
		//tại id của div trong HTML ghi lên đó kết quả 
		document.getElementById("ghi_ket_qua").innerHTML = "Đây là số chẵn";
	}
	else if ((so % 2)==1){
		document.getElementById("ghi_ket_qua").innerHTML = "Đây là số lẻ";
	}
	else {
		document.getElementById("ghi_ket_qua").innerHTML = "Đây là số thập phân";
	}
}



