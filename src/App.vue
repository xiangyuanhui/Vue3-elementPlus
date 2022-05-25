<template>
    <div class="content">
        <el-button type="primary" size="large">{{messge}}</el-button>
        <ul class="test-list">
            <li class="item" v-for="item in list" :key="item.name">{{item.name}}</li>
        </ul>
    </div>    
</template>

<script setup>
import { ref, reactive } from 'vue'   
    let messge = ref(0)
    let list = reactive([
        {name:'张三'}
    ])
</script>

<style>

</style>