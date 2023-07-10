import { getDataLocal } from "./getDataLocal"
function findTodo(id) {
    const data = getDataLocal('sortDataLocal');
    return data.find(item => item.id === id)
}

export { findTodo }