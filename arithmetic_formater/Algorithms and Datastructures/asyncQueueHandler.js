// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

async function asyncQueueHandler(tasks, maxNumberOfTasks = 4) {
    let taskIndex = 0;
    let maxWorkers = 0;
    
    return new Promise (done => {
        const handleResult = index => result => {
            tasks[index] = result;
            maxWorkers--;
            getNextTask();
        }
        
        const getNextTask = () => {
            if (maxWorkers < maxNumberOfTasks && taskIndex < tasks.length) {
                console.log(tasks, taskIndex);
                tasks[taskIndex]()
                    .then(handleResult(taskIndex))
                    .catch(handleResult(taskIndex));
                taskIndex++;
                maxWorkers++;
                getNextTask();
            } else if (maxWorkers === 0 && taskIndex === tasks.length){
                done(tasks);
            }
        }
    
        getNextTask();
    });
}

const createTask = value => () => {
    return new Promise(resolve => setTimeout(() => resolve(value), value * 1000));
}

asyncQueueHandler([
        createTask(2),
        createTask(3)
    ]).then(result => console.log(result));


/** *
 * Correct anser:
 * function createQueue(tasks, maxNumOfWorkers = 4) {
  var numOfWorkers = 0;
  var taskIndex = 0;

  return new Promise(done => {
    const handleResult = index => result => {
      tasks[index] = result;
      numOfWorkers--;
      getNextTask();
    };
    const getNextTask = () => {
      console.log('getNextTask numOfWorkers=' + numOfWorkers);
      if (numOfWorkers < maxNumOfWorkers && taskIndex < tasks.length) {
        tasks[taskIndex]().then(handleResult(taskIndex)).catch(handleResult(taskIndex));
        taskIndex++;
        numOfWorkers++;
        getNextTask();
      } else if (numOfWorkers === 0 && taskIndex === tasks.length) {
        done(tasks);
      }
    };
    getNextTask();
  });
}


const createTask = value => () => {
  if (value === 6) return Promise.reject(new Error('sorry'));
  return new Promise(resolve => setTimeout(() => resolve(value), value * 1000));
}

createQueue([
  createTask(1),
  createTask(2),
  createTask(6),
  createTask(5),
  createTask(1),
  createTask(1),
  createTask(2),
  createTask(4)
]).then(result => console.log(result)); 

*/