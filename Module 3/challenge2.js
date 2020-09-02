var mark = prompt("Enter your mark")

if (mark >= 70 && mark <= 100) {
    console.log("Grade is A")
}
else if (mark >=50 && mark <=60) {
    console.log("Grade is C")
}
else if (mark >=0 && mark <=40) {
    console.log("Garde is F")
} 
else {
    console.log("Grade is unknown")
}