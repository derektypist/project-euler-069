// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if the Input is Valid
    if (isNaN(num) || num.length==0 || num<10 || num>1000000 || num[0]=="0" || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 10 and 1000000.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `Value of n ≤ for which n/φ(n) is a maximum is ${totientMaximum(num)}.`
    }
    
    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}