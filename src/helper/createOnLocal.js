import { setLocalStorage } from './setLocalStorage'
import { getDataLocal } from './getDataLocal'
import { sortBy } from './sortBy'

const createTodoOnLocal = (newTodo, setFunc) => {
    let setId = []

    if (localStorage.getItem('sortDataLocal')) {
        const mainData = getDataLocal('sortDataLocal');
        mainData.push(newTodo);
        setLocalStorage(mainData, 'sortDataLocal');



        setId = getDataLocal('sortDataLocal').map((value, index) => {
            value['id'] = index;
            return value
        });

    } else {
        newTodo.id = 0
        setLocalStorage([newTodo], 'sortDataLocal');
        setId = [newTodo]
    }



    setLocalStorage(setId, 'sortDataLocal')



    const array = sortBy(getDataLocal('sortDataLocal'), localStorage.getItem('select'));
    setLocalStorage(array, 'mainData')
    setFunc(getDataLocal('mainData'));


}

export { createTodoOnLocal }