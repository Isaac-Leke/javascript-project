const greetUser = (name,firstCallback, secondCallback) => {
    console.log(`Hello ${name}`);
    firstCallback();
    secondCallback();
}

const welcomeMessage = () => {
    console.log('welcome to our app');
}

const offerService = () => {
    console.log('please, how can we help you?')
}

greetUser("Martins", welcomeMessage, offerService);


const userIntroduction = (name, firstCallback, secondCallback, thirdCallback) => {
    firstCallback();
    secondCallback();
    thirdCallback();
}

const userName = () => {
    console.log(`Hi. I am john doe`);
}

const courseTaken= () =>{
    console.log(`i'm taking the frontend devlopment course`);
}

const dreamJob = () => {
    console.log("I'll would love to have by dream job at Google Inc.")
}

userIntroduction('john doe', userName, courseTaken, dreamJob)