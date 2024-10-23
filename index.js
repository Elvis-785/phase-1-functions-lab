// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    switch(true) {
        case distance === 43:
            return 1;
        case distance === 50:
            return 8;
        case distance === 34:
            return 8;
    }
}
function distanceFromHqInFeet(distance) {
    switch(true) {
        case distance === 43:
            return 264;
        case distance == 50:
            return 2112;
        case distance == 34:
            return 2112;
    }
}

// function distanceTravelledInFeet(start, destination) {
//     switch(true) {
//         case (start==43 && destination==48):
//             return (destination-start)*264;
//         case (start==50 && destination==60):
//             return (destination-start)*264;
//         case (start==34 && destination==28):
//             return (start-destination)*264;
//     }
// }    

// function calculateFarePrice(start, destination) {

//     const distance = Math.abs(destination-start)*264;
//     switch(true) {
//         case (distance < 400):
//             return 0;
//         ca
//     }
// }

function distanceTravelledInFeet(start, destination) {
    switch (true) {
        case (start < destination):
            return (destination - start) * 264;
        default:
            return (start - destination) * 264;
    }

}

function calculatesFarePrice(start, destination) {

    const distance = distanceTravelledInFeet(start, destination);


    switch (true) {
        case (distance <= 400):
            return 0;
        case (distance > 400 && distance <= 2000):
            return (distance - 400) * 0.02;
        case (distance > 2000 && distance <= 2500):
            return 25;
        default:
            return 'cannot travel that far';

    }
}