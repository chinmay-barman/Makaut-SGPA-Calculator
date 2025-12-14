AddSubjectButton = document.querySelector('.AddSubjectButton button');
MarksInput = document.querySelectorAll('.MarksInput');

AddSubjectButton.addEventListener('click', addSubject);
for(let i=0;i<MarksInput.length;i++){
    MarksInput[i].addEventListener('input', ()=>{
        calculateGrade(MarksInput[i]);
        calculateYourPoint(MarksInput[i]);
    })
}

function addSubject(){
    let newRow = document.createElement('tr');
    document.querySelector('.Calculator-Table Table tbody').appendChild(newRow);
    for(let i=0;i<7;i++){
        newData =document.createElement('td');
        document.querySelector('.Calculator-Table Table tbody tr:last-Child').appendChild(newData);
    }
    newRow.children[0].innerHTML = '<input type="text" placeholder="Subject Name">';
    newRow.children[1].innerHTML = '<input type="number" class="MarksInput" placeholder="(0-100) (CA+Attendence)">';
    newRow.children[2].innerHTML = "NIL";
    newRow.children[3].innerHTML = "0";
    newRow.children[4].innerHTML = '<input type="number" placeholder="">';
    newRow.children[5].innerHTML = "0";
    newRow.children[6].innerHTML = "X";
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
