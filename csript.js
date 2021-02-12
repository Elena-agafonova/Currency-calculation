            c = new Array();
            n = new Array();
            c[0] = 1;
            n[0] = "USD";
            c[1] = 0.75;
            n[1] = "EUR";
            c[2] = 63.01;
            n[2] = "RUB";
        
function GiveResult()
{
    var res, vfrom, vto, vcash;
    vcash = document.getElementById("cash").value;
    vfrom = document.getElementById("from").value;
    vcash = vcash.replace(',', '\.');
    vcash = vcash.replace(' ', '');
    vcash = vcash.replace(' ', '');
    vto = document.getElementById("to").value;
    res = c[vto] * vcash / c[vfrom], 2;

    res = res.toFixed(2);
    res = res.toString();
    res = res.replace('\.', ',');
    res = "<span class='result'> Результат перевода: " + res + "</span>&nbsp;" + n[vto];

    document.getElementById("result").innerHTML = res;
}
 



// * $date_today = date("m/d/Y"); // вычисляем сегодняшнюю дату
// $xml_kurs = 'http://www.nbrb.by/Services/XmlExRates.aspx?ondate='.$date_today;
// $xml = simplexml_load_file($xml_kurs);
 
// foreach ($xml->Currency as $Currency) {
//     switch((string) $Currency['Id']) { // Возвращает атрибуты как элементы массива
//     case '224': //UAH
//         $uah = $Currency->Rate;
//         break;
//     case '145': //USD
//         $usd = $Currency->Rate;
//         break;
//     case '19':  //EUR
//         $eur = $Currency->Rate;
//         break;
//     case '219': //PLN
//         $pln = $Currency->Rate;
//         break;
//     case '190': //RUB
//         $rub = $Currency->Rate;
//         break; 
//     case '171': //CZK
//         $czk = $Currency->Rate;
//         break;  
//     case '177': //LTL
//         $ltl = $Currency->Rate;
//         break;    
 
//     }
// }