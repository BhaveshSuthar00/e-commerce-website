import { DATA } from "./Action";

const initialState = {
    data : [],
    category : [],
    brand : [],
    discount : [],
    color : [],
}
export const dataReducer = (store = initialState, {type, payload}) => {
    switch (type){
        case DATA: {
            function docal (filter, arr){
                const productArr = [];
                const map = new Map();
                    for(let i = 0; i < arr.length; i++) {
                        if(filter === 'category'){
                            if(!map.has(arr[i].category)) {
                                map.set(arr[i].category);
                                productArr.push(arr[i].category);
                            } 
                        } else if(filter === 'discount'){
                            if(!map.has(arr[i].discount) && arr[i].discount != 0) {
                                map.set(arr[i].discount);
                                productArr.push(arr[i].discount);
                            } 
                        } else {
                            if(!map.has(arr[i].brand)) {
                                map.set(arr[i].brand);
                                productArr.push(arr[i].brand);
                            } 
                        }
                    }
                    if(filter === 'discount'){
                        productArr.map(Number)
                        productArr.sort((a,b)=> a-b)
                    }
                return productArr;
            }

            let category2 = docal('category', payload);
            let brand2 = docal('brand', payload);
            let discount2 = docal('discount', payload);
            return {...store, data : payload, category : category2, brand : brand2, discount : discount2}
        }
        default:
            return store
    }
}