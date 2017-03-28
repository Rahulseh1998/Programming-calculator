var selectedoption = document.getElementsByClassName("select");
var inscreen = document.getElementsByClassName("screen");
var result = document.getElementsByClassName("result");
var keysi = document.getElementsByTagName("span");
selectedoption[0].onchange = mainfunction;

function mainfunction(){
				
				switch(selectedoption[0].selectedIndex)
					{
						case 0:
							inscreen[0].setAttribute("placeholder","Enter the decimal number");
							break;
						case 1:
							inscreen[0].setAttribute("placeholder","Enter the binary number");
							break;
						case 2:
							inscreen[0].setAttribute("placeholder","Enter the octal number");
							break;
						case 3: 
							inscreen[0].setAttribute("placeholder","Enter the hexadecimal number");
							break;	
						
					}	
					output();				
		}
		
		inscreen[0].onkeyup = output;

function output(){
				var inputbyuser = inscreen[0].value;
				if(inputbyuser == "")
				{
					result[0].innerHTML = "";
					result[1].innerHTML = "";
					result[3].innerHTML = "";
					result[2].innerHTML = "";
					return 2;
				}
				switch(selectedoption[0].selectedIndex)
						{
						case 0:
							
							result[0].innerHTML = inputbyuser;
							inputbyuser = parseInt(inputbyuser);
							result[1].innerHTML = inputbyuser.toString(2);
							result[3].innerHTML = inputbyuser.toString(16).toUpperCase();
							result[2].innerHTML = inputbyuser.toString(8);
							break;
						case 1:
							
							result[1].innerHTML = inputbyuser;
							var deci = binarytodeci(parseInt(inputbyuser));
							result[0].innerHTML = deci;
							result[3].innerHTML = deci.toString(16).toUpperCase();
							result[2].innerHTML = deci.toString(8);
							break;
						case 2:
							result[2].innerHTML = inputbyuser;
							deci = octaltodeci(parseInt(inputbyuser));
							result[0].innerHTML = deci;
							result[3].innerHTML = deci.toString(16).toUpperCase();
							result[1].innerHTML = deci.toString(2);
							break;
						case 3: 
							console.log("3 is selected.");
							result[3].innerHTML = inputbyuser;
							 deci = hexadecitodeci(inputbyuser);
							result[0].innerHTML = deci;
							result[1].innerHTML = deci.toString(2);
							result[2].innerHTML = deci.toString(8);
							break;	
						
					}			
				
				
				
}
		
			function binarytodeci(inputbyuser){
				var bin = inputbyuser;
				var deci = 0;
				var  i=0;
				while(bin!==0){
						
						deci = deci + (bin%10)*Math.pow(2,i);
						bin = parseInt(bin / 10);	
						i++;
						
				}
				return deci;		
		}
		
		function octaltodeci(inputbyuser){
				var octal = inputbyuser
				var deci = 0;
				var  i=0;
				while(octal!==0){
						
						deci = deci + (octal%10)*Math.pow(8,i);
						octal = parseInt(octal / 10);	
						i++;
				}
				return deci;
					
		}
		
		function hexadecitodeci(inputbyuser){
					
						var val,i;
					var decimal = 0;
					inputbyuser = inputbyuser.toString();
					var lengthofinput = inputbyuser.length;
					var loop = lengthofinput;
					lengthofinput--;
				 for(i=0; i!=loop; i++)
   						 {
       
									switch(inputbyuser[i])
									{
										case '0':
											val = 0;
											break;
										case '1':
											val = 1;
											break;
										case '2':
											val = 2;
											break;
										case '3':
											val = 3;
											break;
										case '4':
											val = 4;
											break;
										case '5':
											val = 5;
											break;
										case '6':
											val = 6;
											break;
										case '7':
											val = 7;
											break;
										case '8':
											val = 8;
											break;
										case '9':
											val = 9;
											break;
										case 'a':
										case 'A':
											val = 10;
											break;
										case 'b':
										case 'B':
											val = 11;
											break;
										case 'c':
										case 'C':
											val = 12;
											break;
										case 'd':
										case 'D':
											val = 13;
											break;
										case 'e':
										case 'E':
											val = 14;
											break;
										case 'f':
										case 'F':
											val = 15;
											break;
									}
				
						decimal += val * Math.pow(16, lengthofinput);
						lengthofinput--;
					}
		return decimal;			
		}
		
		
		
		document.onkeydown = function(e) {
		
    switch (e.keyCode) {
		
		case 48:
		case 96:
            		keycolorchange(9);
            break;
		case 49:
        case 97:
            		keycolorchange(6);
            break;
		case 50:
        case 98:
           			keycolorchange(7);
            break;
		case 51:
        case 99:
          			keycolorchange(8);
            break;
		case 52:
		case 100:
          			keycolorchange(3);
            break;
		case 53:
		case 101:
					keycolorchange(4);
			break;
		case 54:
		case 102:
					keycolorchange(5);
			break;
		case 55:
		case 103:
					keycolorchange(0);
			break;
		case 56:
		case 104:
					keycolorchange(1);
			break;
		case 57:
		case 105:
					keycolorchange(2);
			break;
	
			
	
}
};

var keycolor;
function keycolorchange(index){
				     keycolor =keysi[index];
					keycolor.classList.add("active");
					
					setTimeout(keynormalcolor,200);
}

function keynormalcolor(){
			
					keycolor.classList.remove("active");							
}