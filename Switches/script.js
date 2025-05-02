let age = 6;

switch(true) { // USE TRUE TO EVALUATE EACH CASE AND WHAT SHOULD RUN!!
    case age >= 40:
        console.log("Good bye soon!!");
        break;
    case age >= 18 && age < 40:
        console.log("Adult oh yeah!!");
        break;   
    case age < 18 && age > 3:
        console.log("Still a child");
        break;
    default:
        console.log("YO're a baby??");

}