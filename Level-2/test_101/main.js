const arr1 = [1, 2, 4, 5, 6];
const arr2 = [1, 6, 8, 9, 0];

const newArr = arr1.filter((number) => {
    return arr2.includes(number);
});

const plusArr = arr1.map(number => number + 5 );


const m = [1,2,4,5,6,7]; 
const n = [3,5,675,8,96];

const del = [1, 8,10,96,7];

const baitap3 = m.concat(n);
const showBaiTap3 = baitap3.map((num)=> {
    for (i=0; i++; i<=del.length){
        if(num === del[i]){
            console.log(num)
        }
    }
})

