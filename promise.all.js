function promiseAll(taskList){
    let output = [];
    let promisesCompleted = 0;
    return new Promise(function(resolve,reject){
        taskList.forEach((promise,index)=>{
            promise.then((val)=>{
                output[index] = val;
                promisesCompleted +=1;
                
        if(promisesCompleted === taskList.length){
            resolve(output);
        }
            }).catch((err)=>{
                reject(err);
            })
        })
    })
    
}

function task(time){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(time)
        }, time);
    })
}

const taskList = [task(10), task(20), task(30)];

promiseAll(taskList).then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
})
