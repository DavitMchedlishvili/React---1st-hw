// task 1



let array = [2, 6, -1, 19, -23, 25];


function sumPositive(x) {
    let newArray = x.filter(numbers => numbers >= 0);
    const result = newArray.reduce((acc, cur) => {

        return acc + cur

    }, 0);
    console.log(result)
}


sumPositive(array);





// task 2


let stringArray = ["a", "a", "b", "c", "d", "e", "e", "b", "a", "c", "c"];


function countElems() {
    const frequency = stringArray.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc
    }, [])
    console.log(frequency)
}



countElems();





// task 3



class Car {
    constructor(brand, model, speed = 0, motion = 'The car is not moving',) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
        this.motion = motion;
    }

    checkMotion() {
        if (this.speed > 0)
            this.motion = 'This car is moving'
        console.log(`მანქანა ${this.brand}, ${this.model} სიჩქარეა ${this.speed}კმ/სთ და სტატუსია ${this.motion}`)

    };


    accelerate(x) {
        if (this.speed) {
            this.speed += x;
        }
        this.checkMotion();

    };


    brake(x) {
        if (this.speed) {
            this.speed -= x;
        }
        this.checkMotion();

    }


    emergencyBrake() {
        if (this.speed > 0) {
            this.speed = 0
            this.motion = 'This car is not moving';
        }
        this.checkMotion();
    }




};


const ford = new Car('Mitsubishi', 'Outlander', 80);



ford.accelerate(86);
ford.brake(80);
ford.emergencyBrake();




// task 4


function addAsync(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof x === 'number' && typeof y === 'number') {
            resolve('operation succsess')

        } else {
            reject(new Error('rejected'));
        }
    })
}





addAsync(10, null)
    .then(result => {
        console.log('1st', result);
    })
    .catch(error => {
        console.error('1st', error.message)
    });







    addAsync(15, 52)
    .then(result => {
        console.log('2nd', result);
    })
    .catch(error => {
        console.error('2nd', error.message)
    });





    
    addAsync(15)
    .then(result => {
        console.log('3rd', result);
    })
    .catch(error => {
        console.error('3rd', error.message)
    });