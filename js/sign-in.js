document.addEventListener('DOMContentLoaded' ,function(){

document.querySelector('#sup').disabled=true;
document.querySelector('#nam').onkeyup = () => {
	document.querySelector('#sup').disabled=false;
	
	if (document.querySelector('#nam').value.length<=5) {
		document.querySelector('#sup').disabled=true;
	  document.querySelector('#veri').innerHTML="username must be more than 5 characters";
}
		
	else{
         document.querySelector('#veri').innerHTML="";
         document.querySelector('#sup').disabled=false;
};
};
document.querySelector('#password').onkeyup = () => {
	document.querySelector('#sup').disabled=false;
	var letters = /^[A-Za-z](?=.*\d)\w{7,20}$/;
  if (document.querySelector('#password').value.match(letters)){
		document.querySelector('#sup').disabled=false;
		  document.querySelector('#verip').innerHTML="";
	
	  
}
 
else{
         document.querySelector('#verip').innerHTML="username must be 8 characters or more, and must contain digit";
         document.querySelector('#sup').disabled=true;

         


         };
        };


});

