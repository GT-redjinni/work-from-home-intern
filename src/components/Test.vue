<template>
    <div class="bg-red-200 h-screen flex justify-center items-center">
        <div class="w-[50%] h-[50%] bg-sky-300 rounded-sm flex">
            <div class="w-full">
                <img :src="image" alt="sasa" class="h-full" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            users: [
                { image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 21 },
                { image: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_640.jpg', alt: 23 },
                { image: 'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg', alt: 22 },
            ],
            image: null,
            i: 0
        }
    },

    beforeCreate() {
        setInterval(() => {
            if (this.i == 2) {
                this.i = 0
            }
            this.image = this.users[this.i].image;
            this.i++
            console.log(this.i)
        }, 2000)
    }
}
</script>

<style>
/* < !-- Your styles here --> */
</style>
