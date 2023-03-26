// /*We call the forEach method to iterate between the elements of an array.
//  This function takes a callback function.*/

function createCar(manufacture:string, model:string, ...optional:any[]){
    const cars:any = {manufacture,model};
    optional.forEach(callBackFunction => {
        const [key, value] = callBackFunction.split(`:`);
        cars[key] = value;
    })
    return cars;
}
const mycar = createCar(`Hyundai Motor Group`,`HYUNDAI Kona Electric`,`Color: red`,`Year: 2023`,`Range: 258miles`);
console.log(mycar);