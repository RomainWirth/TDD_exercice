import { test, describe, expect, it, vi } from 'vitest'
import {
    addTask, 
    // checkTaskObject, 
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

    const invalidLabel = 123
    it('ADT02', () => {
        const errorCallback = () => addTask(invalidLabel, taskArray)
        expect(errorCallback).toThrow(Error)
    })

    it('ADT03', () => {
        const emptyTask = {};
        const errorCallback = () => addTask(taskArray, emptyTask);
        expect(errorCallback).toThrow(Error)
     })
})

describe('removeTask()', () => {
    const taskArray = [
        { label: "task 1", done: false },
        { label: "task 2", done: false },
        { label: 'task 3', done: false },
    ];
    const indexToRemove = 1;
    const removedTask = removeTask(indexToRemove, taskArray);
    it('RMT01', () => {
        // expect(removedTask).toEqual({ label: 'task 2', done: false });
        expect(taskArray).toEqual([
            { label: "task 1", done: false },
            { label: 'task 3', done: false }
        ])
    })
})

describe('sortTasks()', () => {
    const taskArray = [
        { label: "task 1", done: false },
        { label: "task 2", done: false },
        { label: "task 3", done: false }
    ];
    const indexOne = 0;
    const indexTwo = 2;
    
    sortTasks(taskArray, indexOne, indexTwo);
    
    it('SRT01', () => {
        expect(taskArray[indexOne]).toEqual({ label: 'task 3', done: false });
        expect(taskArray[indexTwo]).toEqual({ label: 'task 1', done: false });
    })
})

describe('markTaskCompleted()', () => {
    it('MTC01', () => {
        const taskArray = [
          { label: 'Task 1', done: false },
          { label: 'Task 2', done: false },
          { label: 'Task 3', done: false }
        ];
    
        const taskToMarkDone = taskArray[1];
        const result = markTaskCompleted(taskArray, taskToMarkDone);
    
        expect(result).toEqual([
          { label: 'Task 1', done: false },
          { label: 'Task 2', done: true },
          { label: 'Task 3', done: false }
        ]);
     });
})


describe('markTaskUncompleted()', () => {
    it('MTU01', () => {
      const taskArray = [
        { label: 'Task 1', done: true },
        { label: 'Task 2', done: true },
        { label: 'Task 3', done: true }
      ];

      const taskToMarkUndone = taskArray[1];
      const result = markTaskUncompleted(taskArray, taskToMarkUndone);

      expect(result).toEqual([
        { label: 'Task 1', done: true },
        { label: 'Task 2', done: false },
        { label: 'Task 3', done: true }
      ])
    })
})

describe('markAllAsDone()', () => {
    it('MAD01', () => {
        const initialToDoList = [
          { label: 'Task 1', done: false },
          { label: 'Task 2', done: false },
          { label: 'Task 3', done: false },
        ];
    
        const expectedToDoList = [
          { label: 'Task 1', done: true },
          { label: 'Task 2', done: true },
          { label: 'Task 3', done: true },
        ];
    
        const result = markAllAsDone(initialToDoList);
    
        expect(result).toEqual(expectedToDoList);
     });
})

describe('markAllUndone()', () => {
    it('MAU01', () => {
        const initialToDoList = [
            { label: 'Task 1', done: true },
            { label: 'Task 2', done: true },
            { label: 'Task 3', done: true },
        ];
        const expectedToDoList = [
            { label: 'Task 1', done: false },
            { label: 'Task 2', done: false },
            { label: 'Task 3', done: false },
        ];
        const result = markAllUndone(initialToDoList);
        expect(result).toEqual(expectedToDoList);
    });
})