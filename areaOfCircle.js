const val = process.argv;

function areaOfCircle(radius) {
    let area = Math.PI * (Math.pow(radius,2));
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`)   
}

areaOfCircle(val[2])
