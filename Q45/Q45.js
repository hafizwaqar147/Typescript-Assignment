// /*We call the forEach method to iterate between the elements of an array.
//  This function takes a callback function.*/
//  function cars(manufacture:string, model:string, ...options:any[]){
//     const car:any = {manufacture, model};
//     options.forEach(option => {
//         const [key, value] = option.split(`:`);
//         car[key.trim()] = value.trim();
//     });
//     return car;
//  }
//  const mycars = cars(`Hyundai Motor Group`,`HYUNDAI Kona Electric`,`Color: red`,`Year: 2023`,`Range: 258miles`);
//  console.log(mycars);
function createCar(manufacture, model) {
    var optional = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optional[_i - 2] = arguments[_i];
    }
    var cars = { manufacture: manufacture, model: model };
    optional.forEach(function (callBackFunction) {
        var _a = callBackFunction.split(":"), key = _a[0], value = _a[1];
        cars[key] = value;
    });
    return cars;
}
var mycar = createCar("Hyundai Motor Group", "HYUNDAI Kona Electric", "Color: red", "Year: 2023", "Range: 258miles");
console.log(mycar);
