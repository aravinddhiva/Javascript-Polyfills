const promiseAny =(taskList)=>{
    let counter = 0;
    let promiseErrors = [];
    return new Promise((resolve, reject)=>{
        taskList.forEach((promise,index)=>{
            promise.then((val)=>{
                resolve(val);
            }).catch((err)=>{
                promiseErrors[index] = err;
                counter +=1;
                if(counter === taskList.length){
                    reject(promiseErrors);
                }
            })
        })
    })
}

const task1 = new Promise((resolve, reject)=>{
    setTimeout(reject,100,'task one');
})

const task2 = new Promise((resolve, reject)=>{
    setTimeout(resolve,200,'task two');
})

const task3 = new Promise((resolve, reject)=>{
    setTimeout(reject,300,'task three');
})

const input = [task1,task2,task3];

promiseAny(input)
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})

