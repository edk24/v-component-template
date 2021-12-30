<template>
    <div class="v-waterfall" :style="style">
       <slot></slot>
    </div>
</template>

<script>
    export default {
        props:{
            
        }
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
</style>