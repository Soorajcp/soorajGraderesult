
function addMark() {
    const inputvalue = document.getElementById("marks").value;
    Mark = parseFloat(inputvalue);
    const Result = document.getElementById("result")
    let grade
    let result 

    if (Mark>=101) {
        grade = "sorry:(  you can check the grade till 100"
    } else if(Mark >= 90) { 
        grade = "A+"
    } else if (Mark >= 80) {
        grade = "A"
    } else if (Mark >= 70) {
        grade = "B+"
    } else if (Mark >= 60) {
        grade = "B"
    } else if (Mark >= 50) {
        grade = "C+"
    } else if (Mark >= 40) {
        grade = "C"
    } else if (Mark >= 30) {
        grade = "D+"
    } else if (Mark >= 20) {
        grade = "D"
    } else if(Mark >=1){
        grade = "E"
    }
    else{
        grade = "not a grade"
    }
    

    if (Mark >= 30 & Mark <=100) {
        result = "Passed";
    } else if(Mark >= 1 & Mark <= 29){
        result = "Failed";
    }else{
        result ="-"
    }

    
    Result.innerHTML = `Grade: ${grade} , Result: ${result}`;
}

