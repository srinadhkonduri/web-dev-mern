// HTTP request components
//? methods
// * GET -> retrieve data
// * POST -> sending data to the server
// * PUT -> update
// * DELETE -> delete
// ? URL -> uniform resource locator --------> api end points
// ? headers -> additional meta data
// ? BODY -> sending data to the server

// *** MAKING HTTP REQUEST
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json().then((post) => {
      console.log("post fetched success", post);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// ? fetch user details -> API // https://jsonplaceholder.typicode.com/users
// ? user post's
function fetchUserData() {
  fetch("https://jsonplaceholder.typicode.com/users/3")
    .then((response) => {
      return response.json().then((userData) => {
        console.log(userData);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchUserData();



// creating the promise and consuming the promise
// ! 1 . creating the promise
const myPromise = new Promise((resolve, reject) => {
    // perform async task
    let success = true;
    if(success){
        resolve('operation successful');
    }
    else{
        reject('operation failed');
    }
})
// ! 2 . consuming the promise
myPromise
    .then((data) => {console.log(data)})
    .catch((error) => {console.log(data)})




// * creating promises and using it
const fetchDataResponse = fetch('https://jsonplaceholder.typicode.com/albums');

fetchDataResponse
    .then((data) => {
        return data.json().then((data) => {
            console.log(data);
        })
        
    })
    .catch((data) => {console.log(data)})



// ! async await
async function fetchAlbums(){
    try {
        const albums = await fetch('https://jsonplaceholder.typicode.com/albums');
        
        const res = await albums.json();
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
fetchAlbums();