//  1. Console app-da bir eded daxil olunur. Eger bu eded 7-ye bolunurse ekrana "7 ye bolunur" yazilsin. Eks halda daxil olunan edede en yaxin 7-ye bolunen eded ekranda yazilsin(Meselen: 17 yazilibsa ekrana  21 yox 14 cixsin, 19 yazilibsa 21 cixsin)
let flag = 0;
var number = prompt("Ededi daxil edin...");
    number = parseInt(number);
if (number % 7 == 0) {
    alert(`${number} ededi 7-ye bolunur!`);
} else {
    for (;;) {
       let numberIncrement = number + flag;
       let numberDecrement = number - flag;
       if(numberDecrement % 7 == 0){
        alert(`${numberDecrement} ededi 7-ye bolunur!`);
        break;
       } 
       if(numberIncrement % 7 == 0){
        alert(`${numberIncrement} ededi 7-ye bolunur!`);
        break;
       }
        
       
        flag++;
       
        
    }
}
