var string1 = prompt("Enter First String");
var string2 = prompt("Enter Second String");
if (string1.length != string2.length) {
    document.write("Please enter the same length of string")
}
else {
    var a = [];
    var b = [];
    var sortstring1;
    var sortstring2;
    a = string1.split("");
    a.sort();
    sortstring1 = a.join("");
    b = string2.split("");
    sortb = b.sort();
    sortstring2 = sortb.join("");

    if (sortstring1 == sortstring2) {
        document.write("This is an Anagram");
    }
    else {
        document.write("This is not an Anagram");
    }
}