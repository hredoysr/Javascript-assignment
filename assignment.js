//function 1:
function kilometerToMeter(distance) {
    var negativeValue = Math.sign(distance);
    if (negativeValue == -1) {
        return "Distance can't be negative";
    }
    else {
        var result = distance * 1000;
        return result;
    }

}




//function 2:

function budgetCalculator(countWatch, countPhone, CountLaptop) {
    var watchPrice = countWatch * 50;
    var phonePrice = countPhone * 100;
    var laptopPrice = CountLaptop * 500;
    var totalBudget = watchPrice + phonePrice + laptopPrice;
    return totalBudget;
}



//function 3:

function hotelCost(totalDays) {
    var totalCost = 0;
    var negativeValue = Math.sign(totalDays);
    if (negativeValue == -1) {
        return "Input is error";
    }
    else if (totalDays <= 10) {
        totalCost = totalDays * 100;
    }
    else if (totalDays <= 20) {
        var first10daysCost = 10 * 100;
        var remainingDays = totalDays - 10;
        var remainingCost = remainingDays * 80;
        totalCost = first10daysCost + remainingCost;
    }
    else {
        var first10daysCost = 10 * 100;
        var second10daysCost = 10 * 80;
        var remainingDays = totalDays - 20;
        var remainingCost = remainingDays * 50;
        totalCost = first10daysCost + second10daysCost + remainingCost;
    }
    return totalCost;
}




//function 4:

function megaFriend(friendsArray) {
    var max = friendsArray[0].length;
    for (var i = 0; i < friendsArray.length; i++) {
        var element = friendsArray[i].length;
        if (element >= max) {
            max = element;
            var largeName = friendsArray[i];
        }

    }
    return largeName;
}


