
var a = prompt('Enter the Palindrom');

// a = parsInt(a);

function str(a){
    var converInArry = a.split("")

    var reversedArry = converInArry.reverse();

    var reverstr  =  reversedArry.join('');

    if(a == reverstr){

    document.write('It is Palindrome')

   
    
    }

    else{
        document.write('It is not Palindrome')


    }


}

var output = str(a);
