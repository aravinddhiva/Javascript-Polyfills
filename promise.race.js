const promiseRace =(taskList)=>{
    return new Promise((resolve,reject)=>{
        taskList.forEach((promise)=>{
            Promise.resolve(promise)
            .then(resolve,reject)
            .catch(reject);
        })
    })
    
}

const task1 = new Promise((resolve, reject)=>{
    setTimeout(resolve,100, 'task one');
})

const task2 = new Promise((resolve, reject)=>{
    setTimeout(reject,200, 'task two');
})

const task3 = new Promise((resolve, reject)=>{
    setTimeout(reject,300, 'task three');
})

let input = [task1, task2, task3];

promiseRace(input)
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})
