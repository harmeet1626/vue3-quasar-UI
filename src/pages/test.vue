<template>
    <div>test</div>
    <button @click="getData">test</button>

    <div v-for="item in nishant" :key="item">
        <img :src="`https://ecom-backend-file.onrender.com/upload/${item.thumbnail}`" alt="">
        <p>{{ item.title }}</p>
        <p>{{ item.description }}</p>
    </div>
</template>
<script>
export default {
    name: 'test',
    data() {
        return {
            nishant: []
        }
    },
    methods: {
        async getData() {

            (await fetch(`https://ecom-backend-file.onrender.com/products`)).json().then((res) => {

                this.nishant = res.products
            })
        }
    }
}
</script>