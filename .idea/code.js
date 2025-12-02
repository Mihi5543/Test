let count = 99;
let word = "bottles"

while(count > 0) {
    console.log(count + " " + word + " of beer on the wall");
    console.log("Take one down, pass it around,");
        
    if(count == 2) {
        word = "bottle"
    }

    count -= 1;

    if (count > 0) {
        console.log(count + " " + word + " of beer on the wall");
    } else {
        word = "bottles"
        console.log("No more " + word + " of beer on the wall");
    }
}