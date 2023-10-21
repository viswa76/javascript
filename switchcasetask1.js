function displayShirtColor(day) {
    switch (day) {
      case ('Monday'):
        color = 'Blue';
        break;
      case ("Tuesday"):
        color = 'Red';
        break;
      case ("Wednesday"):
        color = 'Green';
        break;
      case ("Thursday"):
        color = 'Yellow';
        break;
      case ("Friday"):
        color = 'Purple';
        break;
      case ("Saturday"):
        color = 'Pink';
        break;
      case ("Sunday"):
        color = 'Orange';
        break;
      default:
        color = ("Invalid day");
    }
  
    // console.log("The color of the shirt for day is .");
    // console.log("The color of the shirt for day is red.");
    // console.log("The color of the shirt for day is green.");
    // console.log("The color of the shirt for day is yellow.");
    // console.log("The color of the shirt for day is purple.");
    // console.log("The color of the shirt for day is pink.");
    // console.log("The color of the shirt for day is orange.");
   }
 displayShirtColor("Monday");
displayShirtColor("Tuesday");
displayShirtColor("Wednesday");
displayShirtColor("Thursday");
displayShirtColor("Friday");
displayShirtColor("Saturday");
displayShirtColor("Sunday");
  
  