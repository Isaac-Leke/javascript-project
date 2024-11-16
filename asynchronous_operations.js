// // setTimeout(() => {
// //     console.log('this will log in seconds')
// // }, 1000);

// // function greet(){
// //     console.log('Hello from greet function')
// // }

// // setTimeout(greet, 5000)

// // setTimeout(() => {
// //     console.log('data fetched')
// // }, 6000);

// // console.log('data fetching');

// // setTimeout(() => {
// //     console.log('display data')
// // }, 8000);


// //DATA FETCHING
// const sampleData  =[
//     {id: 1, name: 'item 1', description: "Description for item 1"},
//     {id: 2, name: 'item 2', description: "Description for item 2"},
//     {id: 3, name: 'item 3', description: "Description for item 3"}
// ];

// async function fetchData(){
//     console.log("Fetching data............")

//     return await new Promise ((resolve, reject) => {
//         setTimeout(() => {
//          resolve(sampleData)   
//          console.log('data successfully fetched', sampleData)
//         }, 10000);
//     })
// }

// //fetchData();

// async function displayData() {
//     const dataList = document.getElementById('user-list');

//     try {
//         const data = await fetchDat();
//         const listItems = data.map(item => `<li>${item.name}: ${item.description} </li>`).join('');
//         dataList.innerHTML = listItems;
//     } catch (error) {
//         console.log('the error in your code is: ', error)
//     }
// }

// displayData();


// get button element into variable
const showBtn = document.getElementById("show");
const hideBtn = document.getElementById("hide");


// FUNCTION TO FECH USER DATA
async function fetchUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
        throw new Error('User Data contains some errror')
    }
    return response.json();
}
// function to hide data displayed on html
function hideData() {
    const user_List = document.getElementById("user-list");
    user_List.style.display = "none";
}

// function to display data in the html

async function displayUserData() {
    const userList = document.getElementById('user-list');
    
    try {
        const users = await fetchUserData();
        const listItems = users.map(user => `<li>${user.name} - ${user.email}</li>`);
        userList.innerHTML = listItems;

        
    } catch (error) {
        console.log('error fetching data:', error);
        userList.innerHTML = "<li> Error Fetching Data. please try again later.</li>";
    };
}