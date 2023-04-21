<template>
    <div class="q-pa-md">
        <h5 style="padding-left: 17px;">Users page</h5>
        <div style="width: 300px; margin-left: 700px;">
            <q-input v-model="SearchInput" label="Search user here" r />
        </div>
        <div class="q-pa-md">
            <q-table @row-click="onRowClick" flat bordered :rows="rows" :columns="columns" row-key="name"
                :separator="separator" />
        </div>
    </div>
</template>
  
<script>
import { ref, computed } from 'vue'
import jsonData from '../sampleData/user.json'
import { useRouter } from 'vue-router';

const columns = [
    {
        name: 'id',
        required: true,
        label: 'id',
        align: 'left',
        field: row => row.id,
        format: val => `${val}`,
        sortable: true
    },
    { name: 'firstName', align: 'left', align: 'center', label: 'FirstName', field: 'firstName', sortable: true },
    { name: 'lastName', align: 'left', label: 'LastName', field: 'lastName', sortable: true },
    { name: 'age', align: 'left', label: 'age', field: 'age' },
    { name: 'gender', align: 'left', label: 'Gender', field: 'gender' },
    { name: 'email', align: 'left', label: 'Email', field: 'email' },
    { name: 'phone', align: 'left', label: 'Phone', field: 'phone', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
    { name: 'bloodGroup', align: 'bloodGroup', label: 'BloodGroup', field: 'bloodGroup' },
]
export default {
    setup() {
        const route = useRouter()
        const SearchInput = ref('')
        const rows = computed(() => {
            let data = [...jsonData.users]
            if (SearchInput) {
                return data.filter((item) => {
                    return SearchInput.value.toLowerCase().split(' ').every(v => item.firstName.toLowerCase().includes(v))
                })
            } else {
                return data
            }
        })
        function onRowClick(evt, row) {
            route.push(`/userDetails/${row.id}`)
        }
        return {
            onRowClick,
            separator: ref('cell'),
            columns,
            rows,
            SearchInput
        }
    }
}
</script>
  