//hàm để kết nối button với input
function in_ra() {
	//đặt tên biến là giá trị của input 
	let month = parseInt(document.getElementById('input_thang').value) ; 
	let year = parseInt(document.getElementById('input_nam').value) ; 
	let day ; 
	switch(month) {
		case 1  :
		case 3  :
		case 5  :
		case 7  :
		case 8  :
		case 10 :
		case 12 :
			day = " có 31 ngày trong tháng " ; 
					if ((((year % 4)==0)) && ((year % 100)!=0) || ((year %400) == 0)) {
						
						document.getElementById('ghi_ket_qua').innerHTML = year + "  là năm nhuận " + day + month ;
					} 

			 		else {
			 			document.getElementById('ghi_ket_qua').innerHTML = year + "  là năm không nhuận " + day + month ;
			 		}
			break ; 
		case 4 :
		case 6 :
		case 9 :
		case 11:
			day = " có 30 ngày trong tháng ";
					if ((((year % 4)==0)) && ((year % 100)!=0) || ((year %400) == 0)) {
					
						document.getElementById('ghi_ket_qua').innerHTML = year + "  là năm nhuận " + day + month ;
					} 

		 			else {
		 				document.getElementById('ghi_ket_qua').innerHTML = year + "  là năm không nhuận" + day + month;
		 			}
			break ; 
		case 2 :
			day = " có 29 ngày trong tháng ";
				if ((((year % 4)==0)) && ((year % 100)!=0) || ((year %400) == 0)) {
					 
					
					document.getElementById('ghi_ket_qua').innerHTML = year + "  là năm nhuận" + day + month ;
				} 

		 		else {
		 			day = " có 28 ngày trong tháng " ;
		 			
		 			document.getElementById('ghi_ket_qua').innerHTML = year + "  là năm không nhuận" + day + month ;
		 		}
		 	break ; 	
		 default :
		 	alert("Dữ liệu sai. Đề nghị nhập lại");
	}		
}



