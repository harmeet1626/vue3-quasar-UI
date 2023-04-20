<template>
    <div class="1">
        <q-layout view="hHh Lpr lff" container style="height: 600px" class="shadow-2 rounded-borders">
            <q-header elevated class="bg-secondary">
                <q-toolbar>
                    <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
                    <q-toolbar-title><q-avatar><img style="height: 30px;
                width: 30px;" src="https://cdn.quasar.dev/logo-v2/svg/logo.svg"></q-avatar>
                        &nbsp;&nbsp;Admin</q-toolbar-title>
                    <div>
                        <div class="dropdown" style="float:left;">
                            <button class="dropbtn"><q-avatar>
                                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                                </q-avatar></button>
                            <div class="dropdown-content" style="left:0;">
                                <a href="/#/login">Logout</a>
                                <!-- <a href="#">Link 2</a>
                                <a href="#">Link 3</a> -->
                            </div>
                        </div>
                        <!-- <q-btn-dropdown>
                            <div class="row no-wrap q-pa-md">
                                <div class="column">
                                    <div class="text-h6 q-mb-md">Settings</div>
                                    <q-toggle v-model="mobileData" label="Use Mobile Data" />
                                    <q-toggle v-model="bluetooth" label="Bluetooth" />
                                </div>
                                <q-separator vertical inset class="q-mx-lg" />
                                <div class="column items-center">
                                    <q-avatar size="72px">
                                        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                                    </q-avatar>
                                    <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>
                                    <q-btn color="primary" @click="() => this.$router.push('/login')" label="Logout" push
                                        size="sm" v-close-popup />
                                </div>
                            </div>
                        </q-btn-dropdown> -->
                    </div>
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
            <q-page-container style="margin-left: 20px;">
                <router-view />
            </q-page-container>
        </q-layout>
    </div>
</template>  
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
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
        separator: false
    },
    // {
    //     icon: 'delete',
    //     path: '/Login',
    //     label: 'Logout',
    //     separator: false
    // },
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
        const router = useRouter()
        return {
            drawer: ref(false),
            menuList,
            mobileData: ref(false),
            bluetooth: ref(false)
        }
    }
}
</script>
<style>
.dropbtn {
    background-color: #26A69A;
    ;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    background-color: #3e8e41;
}
</style>