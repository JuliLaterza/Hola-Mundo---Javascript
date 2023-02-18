const fn = (a,b,c) => console.log(a + b + c)


const arr = [1,2,3]


//fn(...arr)
//fn(arr[0],arr[1],arr[2])

const arr1 = [5,6]

const arr2 = [1,2,3]

const arr3 = [...arr,8,7]

//console.log(arr3)


const obj1 = {a:2, b:2}

const obj2 = {b:5, c: 'chanchito Feliz'}

const obj3 = {...obj1, ...obj2}

//console.log(obj3)

//un uso de la vida real

const obj5 = {
    ...obj1,
    loading: true,
    data: {
        prop: 'lala',
        animal: 'perrito'
    }
}

console.log(obj5)