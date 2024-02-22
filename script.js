let userin = document.getElementById("date");
userin.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge(){
    let birthdate = new Date(userin.value);
    let day1 = birthdate.getDate();
    let mon1= birthdate.getMonth() + 1;
    let yer1 = birthdate.getFullYear();

    let today = new Date();

    let day2 = today.getDate();
    let mon2 = today.getMonth() + 1;
    let yer2 = today.getFullYear();

    let day3, mon3, yer3;
    yer3 = yer2 - yer1;

    if(mon2 >= mon1){
        mon3 = mon2 - mon1;
    }else{
        yer3--;
        mon3 = 12 + mon2 - mon1;
    }

    if(day2 >= day1){
        day3 = day2 - day1;
    }else{
        mon3--;
        day3 = getdaysinmon(yer1, mon1) + day2 - day1;
    }
    if(mon2<0){
        mon3 = 11;
        yer3--;
    }
    result.innerHTML = `You are ${yer3} years, ${mon3} months and ${day3} days old`;

}
function getdaysinmon(year, month){
    return new Date(year, month, 0).getDate();
}