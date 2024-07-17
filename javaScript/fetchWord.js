document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelector("#then-btn").addEventListener('click', () => {
        getWord();
    });
    
    function getWord() {
        let key = APIkey;
        let url = `https://api.wordnik.com/v4/words.json/randomWord?api_key=${key}`;
        
        console.log("1) Beginning the call to the API");
        
        // Returns a Promise that resolves to a Response object representing the response to the request
        fetch(url)

        // Take this Response obj and calls .json() on it
        // response.json() returns a Promise that resolves to te parsed JSON object
        .then(response => response.json())
 
        .then(data => {
            console.log("2) The response object body is being returned"); 
            console.log(`3) Parsed word is: ${data.word}`);

            document.querySelector("#then-call").innerHTML = data.word;
        })
        .catch(err => console.log(err.message));

        console.log("4) End of the call to the API");

    } // End getWord
    
    
    // async function getWord() {
    //     let key = APIkey;
    //     let url = `https://api.wordnik.com/v4/words.json/randomWord?api_key=${key}`;
        
    //     console.log("Beginning the call to the API");
    
    //     try {
    //         let response = await fetch(url);
    //         if (!response.ok){
    //             throw new Error("Failed to fetch data")
    //         }
    //         console.log("1) Response object returns")
    
    //         let apiWord = await response.json()
    //         console.log("2) JSON data available")

    //         document.querySelector("#then-call").innerHTML = apiWord.word;
    //         console.log("3) Data added to DOM")
            
    //     }   
    //         catch (error) {
    //         console.error("Error fetching data:", error)
    //     }
    //     console.log("4) End of the call to the API");
    // } // End getWord

}) // End COMContentLoaded
