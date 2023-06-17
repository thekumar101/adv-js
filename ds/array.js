const strings = ['a', 'b']
//push pop shift unshift splice

class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }

    pop() {
        const last = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return last
    }

    delete(index) {
        const item = this.data[index]
        this.shiftItems(index)

    }

    shiftItems(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1]

        }
        delete this.data[this.length - 1]
        this.length--
    }
}

const newArray = new MyArray()
// newArray.push(5)
// newArray.push('hello')
// newArray.push('hello')
// console.log('newArray ', newArray)
// newArray.pop()
// newArray.push('world')
// console.log('newArray ', newArray)
// newArray.delete(1)
// console.log('newArray ', newArray)

//---------------------------------------------------------------------------------
function reverse(str) {
    const arrStr = str.split('').reverse().join('')

    console.log(arrStr);
}

// reverse('hi my name is arr')
//--------------------------------------------------------------------------------
function mergeSortedArray(array1, array2) {
    const mergedArray = []
    let array1Item = array1[0]
    let array2Item = array2[0]
    let i = 1
    let j = 1
    //check input
    if (array1.length === 0) {
        return array2
    }

    if (array2.length === 0) {
        return array1
    }

    while (array1Item || array2Item) {
        console.log(array1Item, array2Item)
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item)
            array1Item = array1[i]
            i++
        } else {
            mergedArray.push(array2Item)
            array2Item = array2Item[j]
            j++
        }
    }

    return mergedArray
}


console.log(mergeSortedArray([1,3,4,51], [2,20,40]))
