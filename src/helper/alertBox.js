import Swal from 'sweetalert2'
// helper
import { getDataLocal } from './getDataLocal';
import { setLocalStorage } from './setLocalStorage';
import { sortBy } from './sortBy';

function alertBox(type, setContext, id) {

    if (type === 'allItem') {

        Swal.fire({
            text: "آیا از حذف همه آیتم ها  مطمئن هستید ؟",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله حذف شود',
            cancelButtonText: 'لغو'
        }).then((result) => {
            if (result.isConfirmed) {

                const removeAllId = getDataLocal('mainData').map(item => item.id)
                const allData = getDataLocal('sortDataLocal');

                const removeAllIdSet = new Set(removeAllId);
                const updateData = allData.filter(item => !removeAllIdSet.has(item.id));

                setLocalStorage(updateData, 'sortDataLocal')

                setLocalStorage([], 'mainData')
                setContext([]);


                Swal.fire({
                    text: "با موفقیت حذف شد",
                    icon: 'success',
                    confirmButtonText: 'باشه',

                }
                )
            }
        })

    } else {



        Swal.fire({
            text: "آیا از حذف  آیتم مورد نظر  مطمئن هستید ؟",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله حذف شود',
            cancelButtonText: 'لغو'
        }).then((result) => {
            if (result.isConfirmed) {

                const filterData = getDataLocal('sortDataLocal').filter(item => item.id !== id)
                setLocalStorage(filterData, 'sortDataLocal');

                const array = sortBy(getDataLocal('sortDataLocal'), localStorage.getItem('select'));
                setLocalStorage(array, 'mainData')
                setContext(getDataLocal('mainData'));



                Swal.fire({
                    text: "با موفقیت حذف شد",
                    icon: 'success',
                    confirmButtonText: 'باشه',

                }
                )
            }
        })

    }

}

export { alertBox }