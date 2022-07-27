//1 eded daxil edin. Eger o eded 50den kicikdirse o edede qeder 3-e bolunen, 50-100 araligindadirsa o edede qeder 5e bolunen, 100den boyukdurse o edede qeder 8 e bolunen ededlerin sayini ekrana cixardan bir alqoritm yazin.

var number = prompt("ededi daxil edin");

if(number < 50){
    Counter(50, 3);
}else if(number>=50 && number<=100){
    Counter(100, 5);
}else if(number>100){
    Counter(number, 8);
}


function Counter(number, divider){
    let j = 0;
    for(let i=1; i<=number; i++){
        if (i % divider == 0) {
            j++
        }
    }
    alert(j);
}