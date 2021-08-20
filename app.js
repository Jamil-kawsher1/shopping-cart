function UpdatecaseNumberAndPhone(id, totalId, price, isIncreasing) {
    const caseInput = document.getElementById(id);
    let caseNumber = parseInt(caseInput.value);

    if (isIncreasing) {

        caseNumber = caseNumber + 1;
    }
    else {
        if (caseNumber > 0) {
            caseNumber = caseNumber - 1;
        }

    }

    caseInput.value = caseNumber;
    //update case total
    const caseTotal = document.getElementById(totalId);
    caseTotal.innerText = caseNumber * price;
    totalSubTotalTaxUpdate();
}



//plus iphonecase button event listener
document.getElementById("case-number").addEventListener("click", function () {

    UpdatecaseNumberAndPhone("inputPlus2", "case-total", 59, true);


})

function getPrice(id) {
    const price = document.getElementById(id).value;
    debugger;
    const inputprice = parseInt(price);
    return inputprice;


}

debugger;
function totalSubTotalTaxUpdate() {
    const iphonePrice = getPrice("phone-number") * 1219;
    const casePrice = getPrice("inputPlus2") * 59;
    debugger;
    const subtotal = iphonePrice + casePrice;
    const tax = parseInt(subtotal * .07);
    const totalAmount = subtotal + tax;
    debugger;
    //seeting value to inner sub total
    const displySubtotal = document.getElementById("subtotal").innerText = subtotal;
    // displySubtotal.innerText = subtotal;

    //setting vale to inner Tax
    document.getElementById("tax").innerText = tax;
    //setting up value to total
    document.getElementById("final-total").innerText = totalAmount;




}


//minus phonecase button event listener

const caseNumberMinus = document.getElementById("inputMinus1").addEventListener("click", function () {
    UpdatecaseNumberAndPhone("inputPlus2", "case-total", 59, false);


})

// function updatePhone(isTrue) {
//     const phoneInput = document.getElementById("phone-number");
//     console.log(phoneInput);
//     let phoneInputValue = phoneInput.value;
//     let phoneInputValuep = parseInt(phoneInputValue);

//     if (isTrue) {
//         console.log("true cliked")
//         phoneInputValuep = phoneInputValuep + 1;

//     }
//     else {

//         if (phoneInputValuep > 0) {

//             phoneInputValuep = phoneInputValuep - 1;
//         }
//     }
//     phoneInput.value = phoneInputValuep;

//     //update phone total
//     const phoneTotal = document.getElementById("phone-total");
//     phoneTotal.innerText = phoneInputValuep * 1229;

// }



//plus iphone button event handaler
document.getElementById("phone-plus").addEventListener("click", function () {
    console.log("Phone plus Button cliked");

    // updatePhone(true);
    UpdatecaseNumberAndPhone("phone-number", "phone-total", 1219, true);

})



//minus iphone button event handeler
document.getElementById("phone-minus").addEventListener("click", function () {

    // updatePhone(false);
    UpdatecaseNumberAndPhone("phone-number", "phone-total", 1219, false);
})