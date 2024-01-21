let mainClock = document.querySelector('.clockH');
let mainM = document.querySelector('.clockM');
let mainS = document.querySelector('.clockS');
let aMpM = document.querySelector('#amPM');

let getTime = () => {
    setInterval(() => {
        let today = new Date();
        let hour = today.getHours();
        let min = today.getMinutes();
        let second = today.getSeconds();

        let prepand = hour >= 12 ? 'PM' : 'AM';

        // Ensure the hour, min, and second are always displayed with two digits
        mainClock.innerText = hour < 10 ? '0' + hour : hour;
        mainM.innerText = min < 10 ? '0' + min : min;
        mainS.innerText = second < 10 ? '0' + second : second;
        aMpM.innerText = prepand;
    }, 1000); // Update every second
};

// Call getTime function on page load
getTime();
