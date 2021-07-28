var number1,number2,operator,result,input;
    number1=document.getElementById("number1");
    number2=document.getElementById("number2");
    operator=document.getElementById("operator");
    answer=document.getElementById("result");
    resulinput=document.getElementById("input");
    True=document.getElementById("truenumber");
    False=document.getElementById("falsenumber");
    newquestion();
function newquestion(){
    var operatorselect=["+","-","/","*"];
    var operatornum=random(4);
    var n1=random(50)+1;
    var n2=random(50)+1;
    while(true){
    if(operatornum==2&&n1%n2!=0){
         n1=random(50)+1;
         n2=random(50)+1;        
    }
    else{
        break;
    }
}
    document.getElementById("operator").innerHTML=operatorselect[operatornum];
    document.getElementById("number1").innerHTML=n1;
    document.getElementById("number2").innerHTML=n2;
}
function random(sayi){
    var rand=Math.floor(Math.random() * sayi);
     return rand;
}
   answer.onclick = function(){
    var ans,n1,n2;
    n1=Number(number1.textContent);
    n2=Number(number2.textContent);
    switch(operator.textContent){
       case '+': ans=n1+n2; break;
       case '-': ans=n1-n2; break;
       case '*': ans=n1*n2; break;
       case '/': ans=n1/n2; break;
       default: break;
    }
    if(resulinput.value==ans){
          True.textContent=Number(True.textContent)+1;
    }
    else{
        False.textContent=Number(False.textContent)+1;        
    }
    newquestion();
     
}