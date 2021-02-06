var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color, count){
    if(count <= 0)
        return "Number cannot be zero/negative";
    while(count != 0){
        chocolates.unshift(color)
        count=count-1;
    }
}


//Progression 2: Remove ___ chocolates from the top the dispenser


function removeChocolates(chocolates,number){
    if(number <= 0)
        return "Number cannot be zero/negative";
    if(number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    var array=[]
    while(number != 0){
        array.push(chocolates.shift())
        number--;
    }
    return array
} 


//Progression 3: Dispense ___ chocolates

function dispenseChocolates(chocolates,number){
    if(number <= 0)
        return "Number cannot be zero/negative";
    if(number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    var array=[]
    while(number != 0){
        array.push(chocolates.pop())
        number--;
    }
    return array
}





//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates,number,color){
    if(number <= 0)
        return "Number cannot be zero/negative";
    if(number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    var array=[]
    var i=chocolates.length-1;
    while(number != 0 && i>=0){
        if(chocolates[i] == color){
            array.push(chocolates.pop())
            number--;
        }
        i=i-1
    }
    return array
} 


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates){
    if(chocolates.length == 0)
        return []
    var array=[0,0,0,0,0,0,0]
    for(var i=0;i<chocolates.length;i++){
        if(chocolates[i] == "green")
            array[0] += 1
        else if(chocolates[i] == "silver")
            array[1] += 1
        else if(chocolates[i] == "blue")
            array[2] += 1
        else if(chocolates[i] == "crimson")
            array[3] += 1
        else if(chocolates[i] == "purple")
            array[4] += 1
        else if(chocolates[i] == "red")
            array[5] += 1
        else if(chocolates[i] == "pink")
            array[6] += 1
    }
    var ans=[]
    for(var i=0;i<array.length;i++){
        if (array[i] != 0)
            ans.push(array[i])
    }
    return ans
}



//Progression 6: Sort chocolates based on count in each color. Return array of colors

 function sortChocolateBasedOnCount(chocolates){
    var array = chocolates.reduce(function (b, a) {
        if (a in b)
            b[a]++;
        else 
            b[a] = 1;
        return b;
    }, {});
    let arr = chocolates.sort((a, b) => {
        if (array[b] > array[a]) 
            return 1;
        if (array[b] < array[a]) 
            return -1;
        if (a > b) 
            return 1;
        if (a < b) 
            return -1;
    });
    return arr;
 }




//Progression 7: Change ___ chocolates of ____ color to ____ color

function changeChocolateColor(chocolates,number, color, finalColor){
    if(chocolates.length == 0)
        return []
    if(color == finalColor)
        return "Can't replace the same chocolates";
    if (number <= 0)
        return "Number cannot be zero/negative"
    for(var i=0;i<chocolates.length;i++){
        if(chocolates[i] == color){
            chocolates[i]=finalColor;
            number--;
        }
        if(number == 0)
            return chocolates
    }
}




//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates,color, finalColor){
    if(color == finalColor)
        return "Can't replace the same chocolates";
    var count=0;
    for(var i=0;i<chocolates.length;i++){
        if(chocolates[i] == color){
            chocolates[i]=finalColor;
            count++;
        }
        else if(chocolates[i] == finalColor)
            count++
    }
    return [count,chocolates]
}



//Challenge 1: Remove one chocolate of ____ color from the top

function removeChocolateOfColor(chocolates,color){
    if(chocolates.length == 0)
        return []
    for(var i=0;i<chocolates.length;i++)
    {
        if(chocolates[i] == color)
            chocolates.splice(i,1);
    }
}


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
