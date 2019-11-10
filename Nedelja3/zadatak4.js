
function lifeSupply(numPerMonth, age) {

    let godPotr = 12 * numPerMonth;
    let razGod = 100 - age;
    return godPotr * razGod;
}
console.log(lifeSupply(10,26));


