function call(){
    var name=f.in1.value;
    var phone=parseInt(f.in2.value);
    var password=f.in3.value;
    var password2=f.in5.value;
    var m=document.querySelector('.mssg');
   
    var text;
    var d,sum=0;
    sum=phone.toString().length;
    
    if(name.length<5){
        alert("name must have more than 4 letters");
        text="name must have more than 4 letters";
       m.textContent=text; 
    }
    else if( sum !=10){
        alert("number must have 10 digits")
        text="number must have 10 digits"
        m.textContent=text;
    }
    else if(password.length<6){
        alert("it must have more than 5 letters or digit")
        text="it must have more than 5 letters or digit"
        m.textContent=text;
    }
    else if(password!=password2){
        alert("password not matched")
        text="password not matched"
        m.textContent=text;
    }
    else  {  
        alert("submited successfully" )
        text="submited successfully"
        m.textContent=text;
    }
}