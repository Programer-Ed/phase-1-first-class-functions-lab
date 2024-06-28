function returnFirstTwoDrivers(first){
    return first.slice(0,2)
}
function returnLastTwoDrivers(last){
    return last.slice(2,4)
}
const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier(multiply){
    return function(fare){
     return multiply * fare
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
function selectDifferentDrivers(arrayOfDrivers,functionSel){
    return functionSel(arrayOfDrivers)
}