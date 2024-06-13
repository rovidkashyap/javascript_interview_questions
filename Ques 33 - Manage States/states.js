/*
    If we talk about JavaScript then the most basic way to manage
    state is 'Using Variables'. However your application grows, it
    can become difficult to keep track of all of the variables, and
    it can be easy to make mistakes.

    Another approach is to 'Using State Management Library':
    There are number of state management libraries available for
    JavaScript such as Redux, MobX and Recoil.

    Or there are another JavaScript Frameworks such as React and
    Angular, having built-in state management features. These
    features can make it easy to manage state in your application, 
    but they can also add complexity.
*/

class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        console.log(this.count);
    }
}

const myCounter = new Counter();
myCounter.increment();

// In the context of objects and class, you can use properties
// to maintain state