/**
 * Min heap
 * @param a
 * @constructor
 */
var BinaryMinHeap = function(a) {
    this.d = a || [];

    this.heapify = function(i) {
        var left = this.getLeft(i);
        var right = this.getRight(i);
        var largest = i;
        if (this.d[left] && this.d[left] <= this.d[largest])
        {
            largest = left;
        }

        if (this.d[right] && this.d[right] <= this.d[largest])
        {
            largest = right;
        }

        if (largest != i)
        {
            var tmp = this.d[i];
            this.d[i] = this.d[largest];
            this.d[largest] = tmp;
            this.heapify(largest);
        }
    };

    this.__proto__ = new BinaryHeap(a);
    this.restore();
};

