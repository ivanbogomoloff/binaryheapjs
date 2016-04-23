##Binary heap (Sorting tree, Priority queue) implementation on Javascript
Can use this code for priority queue implementation

Examples for max heap:
```javascript
var binaryHeap = new BinaryMaxHeap([1, 2, 16, 4, 6, 11, 8, 9, 5, 10, 28]);
console.log(binaryHeap.extract()); //28
console.log(binaryHeap.extract()); //16
console.log(binaryHeap.extract()); //11
console.log(binaryHeap.extract()); //10

console.log(binaryHeap.d); //[9, 8, 6, 1, 4, 5, 2]
```
or for min heap:
```javascript
var binaryHeap = new BinaryMinHeap([1, 2, 16, 4, 6, 11, 8, 9, 5, 10, 28]);
console.log(binaryHeap.extract()); //1
console.log(binaryHeap.extract()); //2
console.log(binaryHeap.extract()); //4
console.log(binaryHeap.extract()); //5

console.log(binaryHeap.d); // [6, 8, 10, 9, 11, 16, 28]
```
or for heap with objects:
```javascript
var Node = function(objectVal) {
    this.value = objectVal;
};

var NodesMaxHeap = function(a) {
    this.d = a || [];

    this.compareLeft = function(leftIndex, largestIndex) {
        return this.d[leftIndex].value >= this.d[largestIndex].value;
    };

    this.compareRight = function(rightIndex, largestIndex) {
        return this.d[rightIndex].value >= this.d[largestIndex].value;
    };

    this.__proto__ = new BinaryHeap(a);
    this.restore();
};

var nodesHeap = new NodesMaxHeap();
nodesHeap.insert(new Node(7));
nodesHeap.insert(new Node(1));
nodesHeap.insert(new Node(4));
nodesHeap.insert(new Node(9));
nodesHeap.insert(new Node(5));
console.log(nodesHeap.extract()); //Node {value: 9} 
console.log(nodesHeap.extract()); //Node {value: 7} 
console.log(nodesHeap.extract()); //Node {value: 5}
```
for get current max(min) value
```javascript
console.log(nodesHeap.max()); //Node {value: 4}
```
For loop over values use this:
```javascript
//loop from bottom to top
binaryHeap.iterateUp(function(parentValue, leftValue, rightValue) {
    console.log('parent: ' + parentValue);
    console.log('left: ' + leftValue);
    console.log('right: ' + rightValue);
});
//or from top to bottom
binaryHeap.iterateDown(function(parentValue, leftValue, rightValue) {
    console.log('parent: ' + parentValue);
    console.log('left: ' + leftValue);
    console.log('right: ' + rightValue);
    //last parent will have leftValue = null and rightValue = null
});
```
