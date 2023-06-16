let continueTheProgram = parseInt(1)

while (continueTheProgram == 1) {
    
    let userName = prompt("User name: ")
    let age = parseInt(prompt("User age: "))
    let weight = parseFloat(prompt("User weight: "))
    let height = parseFloat(prompt("User height: "))
    
    console.log("User name: ", userName)
    console.log("User age: ", age)
    console.log("User weight: ", weight)
    console.log("User  height: ", height)
    
    if(age >= 18) {
        console.log("You can drink alcohol")
    } else {
        console.log("You can not drink alcohol")
    }
    
    let userAgeYearsInDays = age * 365
    let userAgeMonths = Math.floor(userAgeYearsInDays/30)
    let userAgeWeeks = Math.floor(userAgeYearsInDays/7)
    
    console.log("User age in months: ", userAgeMonths)
    console.log("User age in weeks: ", userAgeWeeks)
    console.log("User age in days: ", userAgeYearsInDays)
    
    let BMICalculator = parseFloat(weight / (height * height))
    
    if (BMICalculator <= 18.5) {
        console.log("Underweight")
    } else if (BMICalculator <= 24.9) {
        console.log("Normal weight")
    } else if (BMICalculator <= 30) {
        console.log("Overweight")
    } else {
        console.log("Obesity")
    }
    
    let userYear = parseInt(2023 - age)
    let cont = parseInt(0)
    while (cont <= age) {
        console.log(userYear, " - ", cont, " years old.")
        userYear++;
        cont++;
    }

    continueTheProgram = parseInt(prompt("Type 1 to continue or 2 to stop: "))
}


