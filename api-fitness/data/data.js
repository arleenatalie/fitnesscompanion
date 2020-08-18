const heroes = [
    {
        "heroId": 1,
        show: false,
        "name": "Bat Ability",
        "detail": "Batman often performs the action at night. Because of that, batman must have additional strength at night. Perform the workouts over a seven days period.",
        "training":
        [{
            "exerciseName": "Incline Barbell Bench Press",
            "wramUp": "2 x 10-15",
            "workingSet": "3 x 4-8",
            "restPeriod": "5 min"
        },
        {
            "exerciseName": "Barbell Bench Press",
            "wramUp": "2 x 10-15",
            "workingSet": "3 x 4-8",
            "restPeriod": "4 min"
        },
        {
            "exerciseName": "Bent Over Barbell Row",
            "wramUp": "5 x 10-15",
            "workingSet": "1 x 4-8",
            "restPeriod": "10 min"
        }]
    },
    {
        "heroId": 2,
        show: false,
        "name": "Bat Punch",
        "detail": "The enemy of batman often has a good body endurance. To damage the opponents defense, the batman must launch a powerful punch to the opponent. Perform the workouts over a three days period.",
        "training":
        [{
            "exerciseName": "Incline Barbell Bench Press",
            "wramUp": "2 x 10-15",
            "workingSet": "3 x 4-8",
            "restPeriod": "5 min"
        },
        {
            "exerciseName": "Barbell Bench Press",
            "wramUp": "2 x 10-15",
            "workingSet": "3 x 4-8",
            "restPeriod": "4 min"
        },
        {
            "exerciseName": "Bent Over Barbell Row",
            "wramUp": "5 x 10-15",
            "workingSet": "1 x 4-8",
            "restPeriod": "10 min"
        }]
    },
    {
        "heroId": 3,
        show: false,
        "name": "Steel Muscle",
        "detail": "Get ready to ramp up the intensity and really blow out the muscle.",
        "training":
        [{
            "exerciseName": "Incline Barbell Bench Press",
            "wramUp": "2 x 10-15",
            "workingSet": "3 x 4-8",
            "restPeriod": "5 min"
        },
        {
            "exerciseName": "Barbell Bench Press",
            "wramUp": "2 x 10-15",
            "workingSet": "3 x 4-8",
            "restPeriod": "4 min"
        },
        {
            "exerciseName": "Bent Over Barbell Row",
            "wramUp": "5 x 10-15",
            "workingSet": "1 x 4-8",
            "restPeriod": "10 min"
        }]
    }
]
const personals = [
    {personalId: 1, name: "Incline Barbell Bench Press"},
    {personalId: 2, name: "Barbell Bench Press"},
    {personalId: 3, name: "Bent Over Barbell Row"}
]
module.exports = {
    heroes,
    personals
}