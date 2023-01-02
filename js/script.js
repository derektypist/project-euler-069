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
        txt += `You have entered the number ${num}. <br>`;
        txt += `Value of n ≤ ${num} for which n/φ(n) is a maximum is ${totientMaximum(num)}.`
    }
    
    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to find the value of n ≤ limit, for which
    n/φ(n) is a maximum.
    totientMaximum(10)      returns 6
    totientMaximum(10000)   returns 2310
    totientMaximum(500000)  returns 30030
    totientMaximum(1000000) returns 510510
*/
function totientMaximum(limit) {
    function getSievePrimes(max) {
        const primesMap = Array(max).fill(true);
        primesMap[0] = false;
        primesMap[1] = false;
        const primes = [];
        for (let i=2;i<max;i+=2) {
            if (primesMap[i]) {
                primes.push(i);
                for (let j=i*i;j<max;j+=i) {
                    primesMap[j] = false;
                }
            }
            if (i===2) i=1;
        }
        return primes;
    }

    const MAX_PRIME = 50;
    const primes = getSievePrimes(MAX_PRIME);
    let result = 1;
    for (let i=0;result*primes[i]<limit;i++) {
        result *= primes[i];
    }
    return result;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}