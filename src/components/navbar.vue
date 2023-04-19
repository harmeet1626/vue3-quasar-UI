<template>
    <div class="1">
        <q-layout view="hHh Lpr lff" container style="height: 600px" class="shadow-2 rounded-borders">
            <q-header elevated class="bg-secondary">
                <q-toolbar>
                    <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
                    <q-toolbar-title>Header</q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/img/avatar.png">
                    </q-avatar>
                </q-toolbar>
            </q-header>
            <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="500" bordered
                :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
                <q-scroll-area class="fit">
                    <q-list>
                        <template v-for="(menuItem, index) in menuList" :key="index">
                            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple
                                @click="() => this.$router.push(menuItem.path)">

                                <q-item-section avatar>
                                    <q-icon :name="menuItem.icon" />
                                </q-item-section>
                                <q-item-section>
                                    <span>{{ menuItem.label }}</span>

                                </q-item-section>
                            </q-item>
                            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
                        </template>

                    </q-list>
                </q-scroll-area>
            </q-drawer>

            <q-page-container>
                <router-view />
            </q-page-container>
        </q-layout>
    </div>
</template>
  
<script>
import { ref } from 'vue'

const menuList = [
    {
        icon: 'inbox',
        path: '/Dashboard',
        label: 'Dashboard',
        separator: false
    },
    {
        icon: 'send',
        path: '/Users',
        label: 'Users',
        separator: true
    },
    {
        icon: 'delete',
        path: '/Login',
        label: 'Logout',
        separator: false
    },
    // {
    //     icon: 'error',
    //     label: 'Spam',
    //     separator: true
    // },
    // {
    //     icon: 'settings',
    //     label: 'Settings',
    //     separator: false
    // },
    // {
    //     icon: 'feedback',
    //     label: 'Send Feedback',
    //     separator: false
    // },
    // {
    //     icon: 'help',
    //     iconColor: 'primary',
    //     label: 'Help',
    //     separator: false
    // }
]

export default {
    setup() {
        return {
            drawer: ref(false),
            menuList
        }
    }
}
</script>
  