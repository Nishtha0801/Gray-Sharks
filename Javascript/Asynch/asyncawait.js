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

function getJobCost(jobs){
    return new Promise((resolve, reject) => {
        console.log(`jobs are ${jobs}`);
        setTimeout(() => {
            reject("Rejected");
        }, 2000);
    })
}


async function getJobsCost(){
    // The code in the try block is executed first, and if it throws an exception, 
    // the code in the catch block will be executed.
    try{
        let data = await getData(20089);
        let jobs = await getJobs(data);
        let cost = await getJobCost(jobs);
        console.log(`cost is ${cost}`);
    }
    catch {
        console.log("Not possible")
    }
    
}

getJobsCost();