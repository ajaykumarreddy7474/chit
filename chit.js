let AmountT=document.getElementById('amountVal')
let monthVal=document.getElementById('monthVal')
let membersVal=document.getElementById('membersVal')
let commissionVal=document.getElementById('commissionVal')
let interestVal=document.getElementById('interestVal')
let TotalInterestVal=document.getElementById('TotalInterestVal');


let hx=document.getElementById('hx');
let sub=document.getElementById('sub');

    

sub.addEventListener('click', () => {
    var Month = Number(monthVal.value);
    var Amount = Number(AmountT.value);
    var Members = Number(membersVal.value);
    var Commission = Number(commissionVal.value);
    var Interest = Number(interestVal.value);

    var TotalInterest = Amount * (Interest / 100);
    var MainCount = Amount - (Amount * (Commission / 100));

    
    let tableHTML = '<table border="1" ><tr><th>Month</th><th>Amount</th></tr>';

    for (let i = 0; i < Members; i++) {
        var AllPer = MainCount + TotalInterest * (i);
        tableHTML += `<tr><td>${i + 1}</td><td>${AllPer}</td></tr>`;
    }

    tableHTML += '</table>';

    hx.innerHTML = tableHTML;

});


// var amount=500000;
// var months=20;
// var members=20

// var perPerson=amount/members;

// var commission=5; //%
// var interest=1; //%
// var TotalInterest=amount*(interest/100)
// var MainCount=amount-(amount*(commission/100));

// for(i=0;i<members;i++){
//     AllPer=MainCount +TotalInterest*i;
//     console.log(`${i+1}th person : ${AllPer}`)
// }


