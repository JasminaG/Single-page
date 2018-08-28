
function pocetna(){
  document.getElementById("sekcija-pocetna").style.display = "unset";
  document.getElementById("sekcija-o_nama").style.display = "none";
  document.getElementById("sekcija-galerija").style.display = "none";
}
function o_nama(){
  document.getElementById("sekcija-o_nama").style.display = "unset";
  document.getElementById("sekcija-pocetna").style.display = "none";
  document.getElementById("sekcija-galerija").style.display = "none";

}
function galerija(){

 document.getElementById("sekcija-galerija").style.display = "unset";
 document.getElementById("sekcija-pocetna").style.display = "none";
 document.getElementById("sekcija-o_nama").style.display = "none";
}


