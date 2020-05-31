
/**
 * Initializes a new empty `PriorityQueue` with the given `comparator(a, b)`
 * function, uses `.DEFAULT_COMPARATOR()` when no function is provided.
 *
 * The comparator function must return a positive number when `a > b`, 0 when
 * `a == b` and a negative number when `a < b`.
 *
 * @param {Function}
 * @return {PriorityQueue}
 * @api public
 */
function PriorityQueue(comparator) {
    this._comparator = comparator || PriorityQueue.DEFAULT_COMPARATOR;
    this._elements = [];
    this.d = 2;
}

/**
 * Compares `a` and `b`, when `a > b` it returns a positive number, when
 * it returns 0 and when `a < b` it returns a negative number.
 *
 * @param {String|Number} a
 * @param {String|Number} b
 * @return {Number}
 * @api public
 */
PriorityQueue.DEFAULT_COMPARATOR = function (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    } else {
        a = a.toString();
        b = b.toString();

        if (a == b) return 0;

        return (a > b) ? 1 : -1;
    }
};

/**
 * Returns whether the priority queue is empty or not.
 *
 * @return {Boolean}
 * @api public
 */
PriorityQueue.prototype.isEmpty = function () {
    return this.size() === 0;
};

/**
 * Peeks at the top element of the priority queue.
 *
 * @return {Object}
 * @throws {Error} when the queue is empty.
 * @api public
 */
PriorityQueue.prototype.peek = function () {
    if (this.isEmpty()) throw new Error('PriorityQueue is empty');

    return this._elements[0];
};

/**
 * Dequeues the top element of the priority queue.
 *
 * @return {Object}
 * @throws {Error} when the queue is empty.
 * @api public
 */
PriorityQueue.prototype.deq = function () {
    var first = this.peek();
    var last = this._elements.pop();
    var size = this.size();

    if (size === 0) return first;

    this._elements[0] = last;
    var current = 0;

    while (current < size) {
        var largest = current;
        var left = (2 * current) + 1;
        var right = (2 * current) + 2;

        if (left < size && this._compare(left, largest) >= 0) {
            largest = left;
        }

        if (right < size && this._compare(right, largest) >= 0) {
            largest = right;
        }

        if (largest === current) break;

        this._swap(largest, current);
        current = largest;
    }

    return first;
};

/**
 * Enqueues the `element` at the priority queue and returns its new size.
 *
 * @param {Object} element
 * @return {Number}
 * @api public
 */
PriorityQueue.prototype.enq = function (element) {
    var size = this._elements.push(element);
    var current = size - 1;

    while (current > 0) {
        var parent = Math.floor((current - 1) / 2);

        if (this._compare(current, parent) <= 0) break;

        this._swap(parent, current);
        current = parent;
    }

    return size;
};

/**
 * Returns the size of the priority queue.
 *
 * @return {Number}
 * @api public
 */
PriorityQueue.prototype.size = function () {
    return this._elements.length;
};

/**
 *  Iterates over queue elements
 *
 *  @param {Function} fn
 */
PriorityQueue.prototype.forEach = function (fn) {
    return this._elements.forEach(fn);
};

/**
 * Compares the values at position `a` and `b` in the priority queue using its
 * comparator function.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @api private
 */
PriorityQueue.prototype._compare = function (a, b) {
    return this._comparator(this._elements[a], this._elements[b]);
};

/**
 * 
 */
PriorityQueue.prototype.printHeap = function() {
    for (let i = 0; i < this.size; i++) {
        const element = this._elements[i];
        console.log(element);
    }
}

PriorityQueue.prototype._heapifyUp = function(i) {
    let insertValue = this.heap[i];
    while (i > 0 && insertValue > this.heap[this.parent(i)]) {
        console.log(this.parent(i));
        var p = this.parent[i];
        let val = this.heap[p];
        this.heap[i] = val;
        i = this.parent(i);
    }
    this.heap[i] = insertValue;
}

PriorityQueue.prototype._heapifyDown = function(i) {
    let child;
    let temp = this.heap[i];
    while (this.kthChild(i, 1) < this.heapSize) {
        child = this.maxChild(i);
        if (temp > this.heap[child]) {
            break;
        }
        this.heap[i] = this.heap[child];
        i = child;
    }
    this.heap[i] = temp;
}

PriorityQueue.prototype._maxChild = function(i) {
    let leftChild = this.kthChild(i, 1);
    let rightChild = this.kthChild(i, 2);
    return leftChild > rightChild ? leftChild : rightChild;
}

PriorityQueue.prototype._kthChild = function(i, k){
    let c = d * i + k;
    return c;
}