AddSubjectButton = document.querySelector('.AddSubjectButton button');
AddSubjectButton.addEventListener('click', addSubject);
CalculateSGPAButton = document.querySelector('.calculate button');

CalculateSGPAButton.addEventListener('click', ()=>{
    let totalCredits = 0;
    let totalCreditPoints =0;
    for(let i=0;i<document.querySelectorAll('.SubjectCreditsInput').length;i++){
        totalCreditPoints += parseInt(document.querySelectorAll('.SubjectCreditsInput')[i].parentElement.nextElementSibling.innerHTML);
        totalCredits += parseInt(document.querySelectorAll('.SubjectCreditsInput')[i].value)*10;
    }
    let SGPA = (totalCreditPoints/totalCredits)*10;
    showResultTable(SGPA.toFixed(2), totalCreditPoints);
});

function addSubject(){
    let newRow = document.createElement('tr');
    document.querySelector('.Calculator-Table Table tbody').appendChild(newRow);
    for(let i=0;i<7;i++){
        newData =document.createElement('td');
        newRow.appendChild(newData);
    }
    newRow.children[0].innerHTML = `<input type="text" placeholder="${document.querySelector('.Calculator-Table Table tbody').childElementCount} Subject Name">`;
    newRow.children[1].innerHTML = '<input type="number" class="MarksInput" placeholder="(0-100)" oninput="calculateBothGradeAndPoint(this)">';
    newRow.children[2].innerHTML = "NIL";
    newRow.children[3].innerHTML = "0";
    newRow.children[4].innerHTML = '<input type="number" value="0" class="SubjectCreditsInput" oninput="calculateCreditPoint(this)">';
    newRow.children[5].innerHTML = "0";
    newRow.children[6].innerHTML = '<p onclick="deleteSubject(this)" style="cursor: pointer; color: #cf6679">X</p>';

    document.querySelector('.ResultTable').hidden = true;
}
function calculateBothGradeAndPoint(marks){
    calculateGrade(marks);
    calculateYourPoint(marks);
    calculateCreditPoint(marks.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.children[0]); //To avoid marks change issue with credit point calculation id already calculated and then trying to update teh marks
}
function calculateGrade(marks){
    if(marks.value<40){
        marks.parentElement.nextElementSibling.innerHTML = "F";
    }
    else if(marks.value>=40 && marks.value<=49){
        marks.parentElement.nextElementSibling.innerHTML = "D";
    }
    else if(marks.value>=50 && marks.value<=59){
        marks.parentElement.nextElementSibling.innerHTML = "C";
    }
    else if(marks.value>=60 && marks.value<=69){
        marks.parentElement.nextElementSibling.innerHTML = "B";
    }
    else if(marks.value>=70 && marks.value<=79){
        marks.parentElement.nextElementSibling.innerHTML = "A";
    }
    else if(marks.value>=80 && marks.value<=89){
        marks.parentElement.nextElementSibling.innerHTML = "E";
    }
    else if(marks.value>=90 && marks.value<=100){
        marks.parentElement.nextElementSibling.innerHTML = "O";
    }
    else{
        marks.parentElement.nextElementSibling.innerHTML = "Invalid";
    }
}
function calculateYourPoint(marks){
    if(marks.value<40){
        marks.parentElement.nextElementSibling.nextElementSibling.innerHTML = "2";
    }
    else if(marks.value>=40 && marks.value<=49){
        marks.parentElement.nextElementSibling.nextElementSibling.innerHTML = "5";
    }
    else if(marks.value>=50 && marks.value<=59){
        marks.parentElement.nextElementSibling.nextElementSibling.innerHTML = "6";
    }
    else if(marks.value>=60 && marks.value<=69){
        marks.parentElement.nextElementSibling.nextElementSibling.innerHTML = "7";
    }
    else if(marks.value>=70 && marks.value<=79){
        marks.parentElement.nextElementSibling.nextElementSibling.innerHTML = "8";
    }
    else if(marks.value>=80 && marks.value<=89){
        marks.parentElement.nextElementSibling.nextElementSibling.innerHTML = "9";
    }
    else if(marks.value>=90 && marks.value<=100){
        marks.parentElement.nextElementSibling.nextElementSibling.innerHTML = "10";
    }
    else{
        marks.parentElement.nextElementSibling.innerHTML = "0";
    }
}
function calculateCreditPoint(credit){
    credit.parentElement.nextElementSibling.innerHTML = parseInt(credit.parentElement.previousElementSibling.innerHTML) * parseInt(credit.value);
}
function showResultTable(sgpa, totalCreditPoints){
    document.querySelector('.ResultTable tbody tr').children[0].innerHTML = sgpa;
    document.querySelector('.ResultTable tbody tr').children[1].innerHTML = totalCreditPoints;
    document.querySelector('.ResultTable tbody tr').children[2].innerHTML = `${sgpa*10}%`;
    document.querySelector('.ResultTable tbody tr').children[3].innerHTML = `${(sgpa-0.75)*10}%`;
    document.querySelector('.ResultTable').hidden = false;
}
function deleteSubject(deleteElement){
    deleteElement.parentElement.parentElement.remove();
}