/**
 * @author Pablo Leon Alcaide
 */
let name = document.getElementById("name");
let subname = document.getElementById("subname");
let mail = document.getElementById("mail");
let phone = document.getElementById("phone");

let checkEmpty = (input)=>{
		input.style.borderBottom="1px solid #8BC34A";
	if(input.value== ""){
		input.style.borderBottom="1px solid #FF5722";
	}else{
		input.style.borderBottom="1px solid #757575";
	}
}
let paintFocus = (input)=>{
	input.style.borderBottom="1px solid #8BC34A";
}


name.addEventListener("blur", checkEmpty.bind(null,name),false);
subname.addEventListener("blur", checkEmpty.bind(null,subname),false);
mail.addEventListener("blur", checkEmpty.bind(null,mail),false);
phone.addEventListener("blur", checkEmpty.bind(null,phone),false);

name.addEventListener("focus", paintFocus.bind(null,name),false);
subname.addEventListener("focus", paintFocus.bind(null,subname),false);
mail.addEventListener("focus", paintFocus.bind(null,mail),false);
phone.addEventListener("focus", paintFocus.bind(null,phone),false);