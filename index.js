function distanceFromHqInBlocks(distance) {
if (distance>42) {
    return distance -42 
}
else {
    return 42-distance
}
}

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks)*264
}

function distanceTravelledInFeet(begin, end) {
    if (begin < end){
        return (end-begin)*264     
    }else {
        return (begin-end)*264
    }      
}

function calculatesFarePrice(begin,end){
    let feet = distanceTravelledInFeet(begin, end)
    if (feet < 400){
        return 0
    }
    else if (feet > 400 && feet < 2000)  {
        return (feet-400)*.02
    }

    else if  (feet > 2001 && feet < 2500) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }
    
}


