<template>
    <div style="display: flex;">
        <div class="q-pa-md" style="max-width: 400px">
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                <div style="display: flex;">
                    <q-input style="width: 600px;" filled v-model="Firstname" label="First name" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Please type something']" />
                    <q-input style="width: 600px;" filled type="number" v-model="age" label="Your age *" lazy-rules :rules="[
                        val => val !== null && val !== '' || 'Please type your age',
                        val => val > 0 && val < 100 || 'Please type a real age'
                    ]" />
                </div>
                <div style="display: flex;">
                    <q-input style="width: 600px;" filled v-model="gender" label="Gender" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Please type something']" />
                    <q-input style="width: 600px;" filled v-model="Phone" label="Phone" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Please type something']" />
                </div>
                <q-input style="width: 350px;" filled v-model="birthdate" label="DOB" lazy-rules
                    :rules="[val => val && val.length > 0 || 'Please type something']" />
                <q-toggle style="width: 600px;" v-model="accept" label="I accept the license and terms" />
                <div>
                    <q-btn label="Update" @click="update()" color="primary" />
                    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
            </q-form>
        </div>
        <img style="    height: 500px;
        width: 700px;"
            src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60">
    </div>
</template>
  
<script>
import useQuasar from 'quasar/src/composables/use-quasar.js';
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import jsonData from '../sampleData/user.json'
export default {
    setup() {
        const route = useRoute();
        const router = useRouter()
        const $q = useQuasar()
        const Firstname = ref(jsonData.users[route.params.id - 1].firstName)
        const age = ref(jsonData.users[route.params.id - 1].age)
        const gender = ref(jsonData.users[route.params.id - 1].gender)
        const Phone = ref(jsonData.users[route.params.id - 1].phone)
        const birthdate = ref(jsonData.users[route.params.id - 1].birthDate)
        const accept = ref(false)
        function update() {
            router.push('/')
        }
        return {
            update,
            Firstname,
            age,
            accept,
            gender,
            Phone,
            birthdate,
            onSubmit() {
                if (accept.value !== true) {
                    $q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: 'You need to accept the license and terms first'
                    })
                }
                else {
                    $q.notify({
                        color: 'green-4',
                        textColor: 'white',
                        icon: 'cloud_done',
                        message: 'Submitted'
                    })
                }
            },
            onReset() {
                accept.value = false
                Firstname.value = null
                age.value = null
                accept.value = null
                gender.value = null
                Phone.value = null
                birthdate.value = null
            }
        }
    }
}
</script>
  