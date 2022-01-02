var student1 = {
    name: "Hammad",
    fatherName: "Fakhar",
    rollNum: 01,
    contact: "03110928248",
    result: "Pass",
}


var student2 = {
    name: "Azal",
    fatherName: "Aziz",
    rollNum: 02,
    contact: "03343079067",
    result: "pass",
}

var student3 = {
    name: "Murtaza",
    fatherName: "Yusuf",
    rollNum: 03,
    contact: "03009229030",
    result: "Fail",
}


var student4 = {
    name: "Hameed",
    fatherName: "Khan",
    rollNum: 04,
    contact: "03323709744",
    result: "Fail",
}

var student5 = {
    name: "Shahrukh",
    fatherName: "Jamal",
    rollNum: 05,
    contact: "03312112559",
    result: "Pass",
}



// var a = "contact" in student1;

// // console.log(a)

// student2.fatherName = "akmal aziz"
// // console.log(student2)


// student2.houseNum = "0300"
// // console.log(student2)

// delete student2.houseNum;
// console.log(student2)

var table = document.getElementById("student")

var studentList = [student1,student2,student3,student4,student5]

for(var i=0; i < studentList.length;i++){
    var obj = studentList[i]
    // console.log(studentList[i])
    table.innerHTML += '<tr><td>'+obj.name+'</td><td>'+obj.fatherName+'</td><td>'+obj.rollNum+'</td><td>'+obj.contact+'</td><td>'+obj.result+'</td></tr>'
}

function searchStd(){
    var inpVal = document.getElementById("inpVal")
    var stdname = document.getElementById("Name")
    var stdFatherName = document.getElementById("FatherName")
    var stdRollNum = document.getElementById("Rollnum")
    var stdContact = document.getElementById("Contact")
    var stdresult = document.getElementById("Result")

    for(var i = 0; i < studentList.length;i++){
        var std = studentList[i];
        if(inpVal.value == std.rollNum){
            console.log(std)
            stdname.innerHTML = std.name;
            stdFatherName.innerHTML = std.fatherName;
            stdRollNum.innerHTML = std.rollNum;
            stdContact.innerHTML = std.contact;
            stdresult.innerHTML = std.result
        }
    }
}

