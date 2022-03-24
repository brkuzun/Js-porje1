let isim = prompt("Lütfen Adınızı Giriniz...");
let isimBilgisi = document.querySelector("#isimBilgisi");




if(isim.length>0){
    
    isimBilgisi.innerHTML = isim;


 }else{
     alert("ADINIZI GİRMEDİNİZ !");
     location.reload();
 };

 

 let tarihBilgisi = document.querySelector("#tarihBilgisi");

 function display_ct() {
    var x = new Date()
    var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
    x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
    tarihBilgisi.innerHTML = x1;
     };