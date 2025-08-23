// Q1. Take a number (1–7). Print the **day of the week**.
let day = 4 ;
switch (day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
     case 2:
        console.log("Tuesday");
        break;
     case 3:
        console.log("Wednesday");
        break;
      case 4:
        console.log("Thursday");
        break;
      case 5:
        console.logg("Friday");
        break;
      case 6:
        console.log("Saturday");
        break;
       default :
       console.log("no match data");     

}


//2. Take a month number (1–12). Print the **month name**.

let month = parseInt(prompt("Enter a month number"));
switch (month){
    case 1:
        console.log("January");
        break;
     case 2:
        console.log("February");
        break;
     case 3:
        console.log("March");
        break;
     case 4:
        console.log("April");
        break;
      case 5:
        console.log("May");
        break;
      case 6:
        console.log("June");
        break;
      case 7:
        console.log("July");
        break;
       case 8:
        console.log("August");
        break;
        case 9:
            console.log("Setmber");
            break;
        case 10:
            console.log("October");
            break;
         case 11:
            console.log("November");
            break;
          case 12:
            console.log("December");
            break;
            default:
                console.log("Invalid Month Number");                     
}



//3. Input a number (1–4). Print:
   let choice = parseInt(prompt("choice a number"));
switch (choice){
    case 1:
        console.log("Addition");
        break;
      case 2:
        console.log("Subtraction");
        break;
       case 3:
        console.log("Multiplication");
        break;
        case 4:
            console.log("Division");
            break;
           default:
            console.log("Invalid input. Please enter a number between 1 to 4.");    
}



// 4. A user selects a drink:
let drinks = prompt("please select c-Coffee , T-Tea , J-juse , W-Water")
switch (drinks){
    case 'C':
   console.log("You can select cofee");
   break;
   case 'T':
   console.log("You can select Tea");
   break;
   case 'J':
   console.log("You can select Juse");
   break;
   case 'W':
   console.log("You can select Water");
   break;
   default:
    console.log("invalid seelection.please select C , T ,J ,W");
}



// 5.Input a grade (`A`, `B`, `C`, `D`, `F`). Print a message like Excellent, Good, etc.
let grade  = prompt("enter a  grade");
switch(grade){
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("very Good");
        break;
    case 'C':
            console.log("Good");
            break;
    case 'D':
            console.log("Needs Improvement");
            break;
    case 'F':
            console.log("failing");
           break;
           default:
            console.log("Invalid grade.Plase enter A , B , C , D , or F");    

}


// 6. Input the first letter of a traffic light (`R`, `Y`, `G`). Print Stop, Ready, or Go.

let trafficLight = 'Y';
switch(trafficLight){
    case 'R':
        console.log("stop");
        break;
      case 'Y' : 
         console.log("Ready");
         break;
      case  'G': 
        console.log("Go");
        break;
        default:
            console.log("invalid letter. plase chosse to R,Y,G");     
}


// 7. Input a **browser name** (Chrome, Firefox, Edge, Safari). Show a launch message.


let name = prompt("Input a browser name");
switch (name){
    case 'Chorme':
        console.log("You are selected a Chorme");
        break;
        case 'Firboxe':
        console.log("You are selected a Fireboxe");
        break;
        case 'Edge':
            console.log("You are selected a Edge");
          break;
         case 'Safari':
            console.log("You are selected a Safari");
            break;   
           default:
            console.log(" invalid a browser"); 

}


// 8. Input a number (1–3). Print:

let num = parseInt(prompt("Input a number "));
switch (num) {
    case 1:
        console.log("Circle Area");
        break;
    case 2:
        console.log("Square Area");
        break;
     case 3:
        console.log("Triangle Area");
        break;   
        default:
            console.log("Invalid number.please  choose a 1-3 number");    
}

//  9. Input a language code (`en`, `fr`, `es`, `de`). Display the **language name**.

const code = prompt("Input a language code (en,fr,es,de):");
switch(code ){
    case 'en':
        console.log("English");
        break;
      case 'fr':
        console.log("French");
        break;
        case 'es':
            console.log("spanish");
            break;
        case 'de':
            console.log("German");
            break;
            default:
                console.log(" Invalid code please select from 'en' 'fr' 'es' 'de'");       
}



//10.