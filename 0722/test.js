'use strict';

const measureKelvin =function(){
    const measurement={
        type:'temp',
        unity:'celsius',
        value: Number(prompt('Degrees celsius'))
    }
    const kelvin =measurement.value+273;
    return kelvin;
}
console.log(measureKelvin());
