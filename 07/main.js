var nhap = 0 ;
function in_ra_so_le() {
	let y = 0 ;
	var a = document.getElementById('input_so_le_chan').value;
	if (a == "") {
		alert ("Vui lòng nhập số");
	}
	else {

			if (document.getElementById('tinh_chan_le_thap').checked){
				y = 1 ; 	
			}
			else if (document.getElementById('so_nguyen_to').checked){
				y = 2 ;				
			}
			else if (document.getElementById('in_ra_so').checked){
				y = 3 ;				
			}
			else if (document.getElementById('in_nhap_so').checked){
				y = 4;
			}
	if (y === 1) {
				if ((a % 1 ) != 0){
					(document.getElementById('ghi_ket_qua').innerHTML = a + " là số thập phân") && (nhap++) ;
				}
				else if ((a % 2)==0){
					(document.getElementById('ghi_ket_qua').innerHTML = a + " là số chẵn") && (nhap++) ;
				}
				else{
					(document.getElementById('ghi_ket_qua').innerHTML = a + " là số lẻ") && (nhap++) ;
				}
		}
	else if (y === 2){
			if (a === 1){			 
		    			(document.getElementById('ghi_ket_qua').innerHTML = a + " không nguyên tố") && (nhap++) ;
		  			}
		  			else if(a === 2){
		   				 (document.getElementById('ghi_ket_qua').innerHTML = a + " là số nguyên tố") && (nhap++) ;
		 			}
		 			else if ((a % 1 ) != 0){
		 				(document.getElementById('ghi_ket_qua').innerHTML = a + " không nguyên tố") && (nhap++) ;
		 			}
		 			else if (a < 0){
		 				(document.getElementById('ghi_ket_qua').innerHTML = a + " không nguyên tố") && (nhap++) ;
		 			}
		  			else if (a > 2){
			  			let x = 2 ; 
			  			let z = 0 ; 
							while ( x < a ){
								if (a % x == 0){
									z = 1 ;			
								}
							 x++;
							}				  
						if (z === 1){
							(document.getElementById('ghi_ket_qua').innerHTML = a + " Không là số nguyên tố") && (nhap++) ;
						}
						else if (z != 1){
							(document.getElementById('ghi_ket_qua').innerHTML = a + " là số nguyên tố") && (nhap++) ;
						}	
					}
		}
	else if (y === 3) {
			if ((a % 1) !=0){
				(alert("Vui lòng nhập số nguyên")) && (nhap++);
			}
			else{
				var i = 1;
				let k = [];
				if (a>=0){
					while(i <= a){
					   		k.push(i) ;
						i++;
					}
				}
				else{
					while(i >= a){
							k.push(i);
						i--;
					}
					k.reverse();
				}	
			(document.getElementById('ghi_ket_qua').innerHTML = k) && (nhap++) ;
			}
		}
	else if (y === 4){
			document.getElementById('ghi_ket_qua').innerHTML = "Tổng kiểm tra chính xác là " + nhap ;
		}
	else {
			alert("Vui lòng chọn tính năng");
		}
	}
}



























	 