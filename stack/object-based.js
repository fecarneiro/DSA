import { Stack } from './stack.js';

const stack = new Stack();
stack.push('fe');
stack.push('feEE');
stack.push('feEE');
console.log(stack.peak());
console.log(stack.isEmpty());
console.log(stack.toString());
