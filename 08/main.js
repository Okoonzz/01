let mang = [] ;

	// Nhập số vào 
	function nhap_vao() {
		let a = parseFloat(document.getElementById('nhap_so').value);
		mang.push(a); 
		//xóa giá trị vừa nhập
		document.getElementById('nhap_so').value = '';
		//chuyển giá trị thành chuỗi lấy độ dài
		let b = (a + "").length;
		let color = '#';   
		if(b == 6){
			color += a;
			document.getElementById("demo2").style.background = color;
		}  
		else if(b < 6){
		let i = 0;
			while( i < 6 - b ){
				color += '0';
			i++;
			}
			color += a;
			document.getElementById("demo2").style.background = color;
		}
	}		
	// Kiểm tra chẵn hay lẻ
	function chan_le() {
		let mang_chan = [] ;
		let mang_le = [] ;
		let mang_thap = [];
		let i = 0;		 
		while (i < mang.length){
			if ((mang[i] % 2 === 0)){
				mang_chan.push(mang[i]); 
			}
			i++;
		}
		let j = 0;
		while (j  < mang.length){
			  	// Kiểm tra số thập phân
			  	if (mang[j] % 1 != 0){
			  		mang_thap.push(mang[j]);
			  	}
			  	else if (!(mang[j] % 2 === 0)){
			  		mang_le.push(mang[j]);
			  	}
			  	j++ ; 
			  }
			  let mang_chan_in = mang_chan.join('; ');
			  let mang_le_in = mang_le.join('; ');	
			  let mang_thap_in = mang_thap.join('; ');	
			  document.getElementById('ghi_ket_qua').innerHTML = "Dãy các số lẻ là: " + mang_le_in + '<br>' + "Dãy các số chẵn là: " + mang_chan_in; 
			}
	// Tính tổng
	function tong_so(){
		let sum = 0;
		let i = 0;
		while (i < mang.length){
			sum += mang[i];
			i++;
		}
		document.getElementById('ghi_ket_qua').innerHTML = "Tổng các số là: " + sum ; 
	}
	// Tìm số lớn nhất 
	function so_lon(){
		let max = mang[0];
		let i = 1;
		while (i < mang.length){
			if(max < mang[i]){
				max = mang[i]
			}
			i++;
		}
		document.getElementById('ghi_ket_qua').innerHTML = "Số lớn nhất là: " + max ; 
	}
	//Tìm số nguyên tố
	function so_to(){
		let arr1 = [];
		let arr2 = [];
		mang.forEach(function(item, index, array){
			let z = 1 ;
			if(item === 1){
				z = 2;
			}
			else if (item % 1 != 0){
				z = 2;
			}
			else if (item === 0){
				z = 2;
			}
			else if (item === 2){
				z = 1
			}
			else if (item < 0 ){
				z = 2;
			}
			else if (item > 2){
				let i = 2 ;
				while(i < item){
					if (item % i === 0){
						z = 2
					}
					i++;
				}
			}	
			if(z === 2 ){
				arr1.push(item);
			}else{
				arr2.push(item);
			}
		});
		document.getElementById('ghi_ket_qua').innerHTML = arr2;
	}

