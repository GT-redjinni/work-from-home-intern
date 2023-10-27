<template>
    <div class="absolute">
        Home
        <router-link @click="logout()" to="/signin">Logout</router-link>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data() {
        return {
            userData: null,
        }
    },
    created() {
        this.getData()
    },
    methods: {
        logout() {
            localStorage.removeItem('user-info')
            console.log('.....commming');
            this.$router.push({ name: 'Signin' })
        },
        getData() {
            let userInfo = localStorage.getItem('user-info')
            if (!userInfo) {
                console.log(userInfo);
                this.$router.push({name:'SignIn'})
            }
            this.userData = JSON.parse(userInfo)
        }
    },
}
</script>
