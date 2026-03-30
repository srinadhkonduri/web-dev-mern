// synch code -> blocking
// codes are executed line by line as per written
console.log('1. start boiling water');
console.log('2. add raw eggs');
console.log('3. boil 10 minutes');
console.log('4. take the eggs out from the vessel');





// async -> non blocking
function fetchData(callBack){
    console.log('fetching the data from the weather');

    setTimeout(() => {
        console.log('processing the data');
        callBack();
    },2000)
    
};


function dataProcess(){
    console.log('weather data fetched done ...');
}

fetchData(dataProcess);



// HTTP request components
//? methods
// * GET -> retrieve data
// * POST -> sending data to the server
// * PUT -> update
// * DELETE -> delete
// ? URL -> uniform resource locator --------> api end points
// ? headers -> additional meta data
// ? BODY -> sending data to the server
