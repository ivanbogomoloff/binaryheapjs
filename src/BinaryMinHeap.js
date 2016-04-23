/**
 * Min heap
 * @param a
 * @constructor
 */
var BinaryMinHeap = function(a) {
    this.d = a || [];

    this.compareLeft = function(leftIndex, largestIndex) {
        return this.d[leftIndex] <= this.d[largestIndex];
    };

    this.compareRight = function(rightIndex, largestIndex) {
        return this.d[rightIndex] <= this.d[largestIndex];
    };

    this.__proto__ = new BinaryHeap(a);
    this.restore();
};

