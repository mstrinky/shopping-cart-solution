// console.log('js file added');
document.getElementById('btn-case-plus').addEventListener('click',function(){
    // console.log('case button clicked');
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value ;
    const previousCaseNumber = parseInt(caseNumberString);
    const newCaseNumber = previousCaseNumber + 1;
    // console.log(previousCaseNumber);
    caseNumberField.value = newCaseNumber;
})