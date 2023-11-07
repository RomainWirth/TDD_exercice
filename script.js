export function addTask(object, array) {
    if (Object.keys(object).length == 0) {
        throw new Error('Object cannot be empty')
    } else if (typeof object.label !== 'string') {
        throw new Error('Label must be a string');
    } else {
        array.push(object);
        return array;
    }
};

export function removeTask(index, array) {
    if (index >= 0 && index < array.length) {
        array.splice(index, 1);
    } else {
        console.log('Index out of bounds');
    };
    return array;
};

export function sortTasks(array, indexOne, indexTwo) {
    const temporary = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = temporary;
};

export function markTaskCompleted(array, object) {
    const objectIndex = array.indexOf(object);
    if(objectIndex !== -1) {
        array[objectIndex].done = true;
    } 
    return array;
};

export function markTaskUncompleted(array, object) {
    const objectIndex = array.indexOf(object);
    if(objectIndex !== -1) {
        array[objectIndex].done = false;
    } 
    return array;
};

export function markAllAsDone(array) {
    return array.map(task => ({ ...task, done: true }));
};

export function markAllUndone(array) {
    return array.map(task => ({ ...task, done: false }));
};