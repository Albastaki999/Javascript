// let day = 1;

// if (day == 1) {
//     console.log("Monday");
// }
// else if (day == 2) {
//     console.log("Tuesday");
// }
// else if (day == 3) {
//     console.log("Wed");
// }
// else if (day == 4) {
//     console.log("Thu");
// }
// else if (day == 5) {
//     console.log("Fri");
// }
// else if (day == 6) {
//     console.log("Sat");
// }
// else if (day == 7) {
//     console.log("Sun");
// }
// else {
//     console.log("Invalid day");
// }

/* 
        switch (value) {
            case val1:
                break;
                case val2:
                    break;
                    .
                    .
                    .
                    case valn:
                        break
                        default:

                        }
*/

// let day = 2;

// switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("Weekday");
//         break;
//     case 6:
//     case 7:
//         console.log("Weekend");
//         break;
//     default:
//         console.log("Invalid Day");
// }

let role = "superAdmin";

switch (role) {
  case "customer":
    console.log("Redirecting to Customer dashboard");
    break;
  case "admin":
    console.log("Redirecting to Admin dashboard");
    break;
  case "superAdmin":
    console.log("Redirecting to Super Admin dashboard");
    break;
  default:
    console.log("Invalid role");
}
