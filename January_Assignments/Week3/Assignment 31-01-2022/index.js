
var obj = {
    "first_name" : "Monika",
    "last_name" : "Maurya",
    "email" : "monikamaurya120@gmail.com",
     "roll_no." : "12",
     "students" : [ 
	{
	  "name" : "neha",
	  "marks" : 15
	},
	{
	  "name" : "usha",
	  "marks" : 17
	},
	{
	  "name" : "jaya",
	  "marks" : 19
	},
	{
	  "name" : "ayushi",
	  "marks" : 21
	},
	{
	  "name" : "tanvi",
	  "marks" : 0
	},
	{
	  "name" : "suman",
	  "marks" : 27
	},
	
        ]
}

var ip = prompt("Enter marks to check the list of student who scored equal to or above the given score.")
var ip = parseInt(ip)
var len = obj.students.length

for(var i = 0 ; i<len ; i++){
     var a = obj.students[i]
     var name = a.name
     var marks = a.marks
     if(ip<=marks){
         console.log("Name  : ",name,"\n")
         console.log("Marks : ",marks,"\n")
     }
}