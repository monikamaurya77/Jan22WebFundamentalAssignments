var a=prompt("Enter First Number");
var b=prompt("Enter Second Number");
var c=prompt("Enter Third Number");
a=parseInt(a);
b=parseInt(b);
c=parseInt(c);
if(a<b && a<c){
alert(a);
}
else if(b<a && b<c){
alert(b);
}
else{
alert(c);
}