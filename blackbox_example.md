# BLACKBOX EXAMPLE

prompt :
```
I am preparing a projet with test driven development. The project is a to-do list. Can you write a test in JS using vitest in order to check the function addTask() whose purpose is to add an object JSON in an array. The object is composed with 2 keys : label (string) and completed (boolean initiated at false). The test checks if the function add the object to the array
```

Code :
```JavaScript
import { describe, expect, it, vi } from 'vitest'
import { addTask } from './yourModule'

describe('addTask()', () => {
 it('should add an object JSON in an array', () => {
    const mockLabel = 'Task 1'
    const mockTask = { label: mockLabel, completed: false }
    const tasks = []

    const result = addTask(tasks, mockLabel)

    expect(result).toHaveLength(1)
    expect(result[0]).toEqual(mockTask)
 })

 it('should throw an error if label is not a string', () => {
    const tasks = []
    const invalidLabel = 123

    const errorCallback = () => addTask(tasks, invalidLabel)

    expect(errorCallback).toThrow('Label must be a string')
 })
})
```

This test suite has two tests:

The first test checks if the addTask() function adds an object JSON to the array correctly.

The second test checks if the addTask() function throws an error when the label is not a string.

To use the above code, you need to have the vitest package installed. If you don't have it yet, you can install it using npm or yarn:
```bash
npm install vitest

yarn add vitest
```

