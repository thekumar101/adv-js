let user = {
    age: 34,
    name: 'Kylie',
    magic: true,
    scream: function () {
        console.log('SCREAM!')
    }
}
//-------------------------------------------
class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i % this.data.length)
        }

        return hash;
    }

    set(key, value) {
        let addr = this._hash(key)
        if (!this.data[addr]) {
            this.data[addr] = []
            this.data[addr].push([key, value])
        }
        this.data[addr].push([key, value])
    }

    get(key) {
        let addr = this._hash(key)
        const currBucket = this.data[addr]
        if (currBucket) {
            for (let i = 0; i < currBucket.length; i++) {
                if (currBucket[i][0] === key) {
                    return currBucket[i][1]
                }
            }
        }

        return undefined
    }

    keys() {
        const keysArr = []
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArr.push(this.data[i][0][0])
            }
        }
        return keysArr
    }
}

// const myHashTable = new HashTable(50)
// myHashTable.set('apples', 1000)
// myHashTable.set('oranges', 20)
// console.log(myHashTable.get('apples'))
// console.log(myHashTable.keys())

function firstRecurrChar(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i]
            }
        }
    }
    return undefined
}

// console.log(firstRecurrChar([11,21,11]))

function firstRecurrChar2(input) {
    let map = {};

    for (let index = 0; index < input.length; index++) {
        if (map[input[index]] !== undefined) {
            return input[index]
        } else {
            map[input[index]] = index
        }
    }

    return undefined
}
