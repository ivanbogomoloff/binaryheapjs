var BinaryHeap = function(a) {
    this.d = a || [];
    this.restore();
};
/**
 * Return parent index
 * @param i
 * @returns {*}
 */
BinaryHeap.prototype.getParent = function(i) {
    if (i == 0)
    {
        return i;
    }

    return Math.ceil(i / 2);
};
/**
 * Return left index
 * @param i
 * @returns {number}
 */
BinaryHeap.prototype.getLeft = function (i) {
    return Math.ceil(i * 2 + 1);
};

/**
 * Return right index
 * @param i
 * @returns {number}
 */
BinaryHeap.prototype.getRight = function(i) {
    return Math.ceil(i * 2 + 2);
};
/**
 * Restore heap properties
 * @returns {*|Array}
 */
BinaryHeap.prototype.restore = function() {
    var heapSize = this.d.length;
    for(var i = Math.ceil(heapSize / 2); i >= 0; i--)
    {
        this.heapify(i);
    }
};
/**
 * Restore special index
 * @param i
 */
BinaryHeap.prototype.heapify = function(i) {
    var left = this.getLeft(i);
    var right = this.getRight(i);
    var largest = i;
    if (this.d[left] && this.d[left] >= this.d[largest])
    {
        largest = left;
    }

    if (this.d[right] && this.d[right] >= this.d[largest])
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
/**
 * Return priority value
 * and remove it from heap
 * @returns {*}
 */
BinaryHeap.prototype.extract = function() {

    if (this.d.length == 0) {
        console.log('heap empty');
        return null;
    }

    var max = this.d[0];
    this.d.splice(this.d.indexOf(max), 1);
    this.restore();

    return max;
};
