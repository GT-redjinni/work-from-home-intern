<template>
    <div class="self-start flex flex-col h-screen w-screen items-center">
        <div class="relative p-5 w-screen flex justify-around text-xl">
            <div class="shadow-sm p-3 bg-red-600 rounded-md text-white">Home</div>

            <router-link @click="logout()" to="/signin"
                class="shadow-sm p-3 bg-red-600 rounded-md text-white cursor-pointer">Logout</router-link>

        </div>

        <div v-if="isVisible" class="relative w-fit mt-[50vw] sm:mt-[40vw] md:mt-[30vw] lg:mt-[20vw] xl:mt-[10vw]">
            <div class="bg-white p-8 rounded shadow-md flex flex-col justify-center items-center">
                <div class="text-4xl text-center pt-3 font-bold mb-4 rounded-full w-16 h-16 bg-red-600 text-white">&#10003;
                </div>
                <p class="w-60 text-center">Your Password Has Been Reset Successfully</p>
                <button @click="closeModal" class="mt-4 bg-red-600 text-white px-4 py-2 rounded">Dashboard</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Home',
    data() {
        return {
            userData: null,
            isVisible: this.$route.params.msg,
        };
    },
    created() {
        this.getData();
    },
    methods: {
        logout() {
            localStorage.removeItem('user-info');
            console.log('.....comming');
            this.$router.push({ name: 'Signin' });
        },
        getData() {
            let userInfo = localStorage.getItem('user-info');
            if (!userInfo) {
                this.$router.push({ name: 'SignIn' });
            }
            this.userData = JSON.parse(userInfo);

        },
        closeModal() {
            this.isVisible = false;

        },
    },
};
</script>
  