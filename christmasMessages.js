//funtion to generate a random Christmas message
function randomChristmasMessage(){
    dayOfChristmas = Math.floor(Math.random() * 12) + 1
    naughtyOrNice = Math.floor(Math.random() * 5)

    let firstMessage = "Ho Ho Ho, Merry Christmas!"
    let secondMessage = ""
    let thirdMessage = "You are on the nice list so Santa will bring you "

    switch (dayOfChristmas){
        case 1:
            secondMessage = "On the first day of Christmas, my true love gave to me a partridge in a pear tree."
            break
        case 2:
            secondMessage = "On the second day of Christmas, my true love gave to me two turtle doves."
            break
        case 3:
            secondMessage = "On the third day of Christmas, my true love gave to me three french hens."
            break
        case 4:
            secondMessage = "On the fourth day of Christmas, my true love gave to me four calling birds."
            break
        case 5:
            secondMessage = "On the fifth day of Christmas, my true love gave to me five golden rings."
            break
        case 6:
            secondMessage = "On the sixth day of Christmas, my true love gave to me six geese a-laying."
            break
        case 7:
            secondMessage = "On the seventh day of Christmas, my true love gave to me seven swans a-swimming."
            break
        case 8:
            secondMessage = "On the eigth day of Christmas, my true love gave to me eight maids a-milking."
            break
        case 9:
            secondMessage = "On the ninth day of Christmas, my true love gave to me nine ladies dancing."
            break
        case 10:
            secondMessage = "On the tenth day of Christmas, my true love gave to me ten lords a-leaping."
            break
        case 11:
            secondMessage = "On the eleventh day of Christmas, my true love gave to me eleven pipers piping."
            break
        case 12:
            secondMessage = "On the twelth day of Christmas, my true love gave to me twelve drummers drumming."
            break
        default:
            "Merry Christmas to all and to all a good night!"
    }

    if (naughtyOrNice === 1){
        thirdMessage +=  "a new car"
    } else if (naughtyOrNice === 2){
        thirdMessage += "a bicycle"
    } else if (naughtyOrNice === 3){
        thirdMessage += "a pistol"
    } else if (naughtyOrNice === 4){
        thirdMessage += "a Barbie Dream House"
    } else {
        thirdMessage += "a X Box"
    }

    return firstMessage + " " + secondMessage + " " + thirdMessage
}

console.log(randomChristmasMessage())