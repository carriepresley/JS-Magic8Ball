let userName = 'Carrie';

userName ='Carrie' ? 
  console.log ('Hello ' + userName + '!' ):
  console.log('Hello!');

let userQuestion= 'Will you eat cake today?';
  console.log('Will you get lucky today?');


let randomNumber = Math.floor(Math.random()*4);

let eightBall = randomNumber;

switch (eightBall) {
  case 0:
  console.log("It is certain");
  break;

  case 1:
  console.log("It is decidedly so");
  break;

  case 2:
  console.log("Reply hazy");
  break;

  case 3:
  console.log("Cannot predict now");
  break;

  case 4:
  console.log("Probably so!");
  break;

  default:
  console.log("You are super unlucky!");

}