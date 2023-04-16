function getData(id){
    return new Promise((resolve, reject) => {
        console.log("I am trying to fetch data from DB");
        setTimeout(()=>{
            resolve({
                personId: id,
                fname: 'nishtha',
            });
        }, 1000);
    });
}

function getJobs(data){
    return new Promise((resolve, reject) => {
        console.log(`I am trying to get jobs of ${data.fname}`);
        setTimeout(() => {
            resolve(
                ['instructor', 'mentor']
            );
        }, 2000);
    });
}

// hr ek job ka => cost kitna h

async function getJobCost(jobs){
    return new Promise((resolve, reject) => {
        console.log(`jobs are ${jobs}`);
        setTimeout(() => {
            resolve(5000);
        }, 2000);
    })
}

async function getJobsCost(){
    let data = await getData(20089);
    let jobs = await getJobs(data);
    let cost = await getJobCost(jobs);
    console.log(`cost is ${cost}`);
    
}

getJobsCost();