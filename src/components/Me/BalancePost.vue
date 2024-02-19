<template>
    <div class="d-flex border rounded-2 bg-white">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-wallet2" viewBox="0 0 16 16">
  <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
</svg>
    <span class="text-subheading font-400 grey-color"> Availabel Balance</span>
        </div>
        <div class="ms-auto text-heading font-600 grey-color">
            $1160.00
        </div>
    </div>
</template>

<script>
    export default {
        name:'BalancePost'
    }
</script>

<style scoped>
.d-flex{
    padding: 10px 20px 10px 10px;
}
</style>