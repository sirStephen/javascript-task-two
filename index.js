// array of objects
const data = [
    {
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    }
]

const interestCalculator = () => {
    let interestData = [];

    // loops over the variable data (an array of objects)
    for (let i = 0; i < data.length; i++) {
        const element = data[i];

        if (element.principal >= 2500 && element.time > 1 && element.time < 3) {
            data[i].rate = 3;
        } else if (element.principal >= 2500 && element.time >= 3) {
            data[i].rate = 4;
        } else if (element.principal <= 2500 && element.time <= 1) {
            data[i].rate = 2;
        } else {
            data[i].rate = 1;
        }    
    }

    // mapping over looped data to calculate interest
    data.map(c => {
        let int = (c.principal * c.time * c.rate)/100;
        return c.interest = int;
    })
    
    // pushes data into a new variable named interestData
    interestData.push(data);
    console.log(interestData);
    console.log(data)

    return interestData;
}

interestCalculator(data)