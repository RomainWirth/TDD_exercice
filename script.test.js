import { test, describe, expect, it, vi } from 'vitest'
import {
    addTask, 
    checkTaskObject, 
    removeTask, 
    sortTasks, 
    markTaskCompleted, 
    markTaskUncompleted,
    markAllAsDone,
    markAllUndone
} from "./script.js"

// test('ADT01', () => {
//     let taskArray = [];
//     let mockTask = new Object();
//     mockTask.label = "tâche 1";
//     mockTask.done = false;

//     const result = addTask(mockTask, taskArray);

//     expect(result).toHaveLength(1);
//     expect(result[0]).toEqual(mockTask);
// })

describe('addTask()', () => {
    const taskArray = [];
    const mockLabel = "mockLabel";
    let mockTask = new Object();
    mockTask.label = mockLabel;
    mockTask.done = false;

    let result = addTask(mockTask, taskArray);

    it('ADT01', () => {    
        expect(result).toHaveLength(1);
        expect(result[0]).toEqual(mockTask);
    })

    mockTask = {};
    result = addTask(mockTask, taskArray);
    it('ADT02', () => {
        expect(result).toHaveLength(1);
        expect(result[0]).toEqual(mockTask);
    })
})

