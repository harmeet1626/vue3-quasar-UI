<template>
  <form @submit.prevent style="margin-left: 285px;">
    <div class="imgcontainer">
      <img style=" margin-right: 260px;   width: 70px;" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"
        class="avatar">
    </div>
    <div class="container">
      <label for="uname"><b>Username</b></label><br>
      <input v-model="name" style="width: 700px;" type="text" placeholder="Enter Username" name="uname" required>
      <br>
      <label for="psw"><b>Password</b></label><br>
      <input v-model="password" style="width: 700px;" type="password" placeholder="Enter Password" name="psw" required>

      <button @click="() => login()" style="width: 700px;">Login</button><br>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
    </div>
  </form>
</template>
  
<script>
import useQuasar from 'quasar/src/composables/use-quasar.js';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

export default {
  setup() {
    const route = useRouter();
    const $q = useQuasar()
    const name = ref('')
    const age = ref(null)
    const accept = ref(false)
    const password = ref('')
    function login() {
      if (this.name == 'admin' && this.password == 'admin') {
        $q.notify({
          type: 'positive',
          message: 'Welcome!'
        })
        route.push('/')
      } else {
        $q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Enter admin '
        })
      }
    }
    return {
      name,
      age,
      accept,
      password,
      login,

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
        name.value = null
        age.value = null
        accept.value = false
      }
    }
  }
}
</script>
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

form {
  border: 3px solid #f1f1f1;
}

input[type=text],
input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }

  .cancelbtn {
    width: 100%;
  }
}
</style>