<template>
    <div class="targetWrapper">
        <div ref="targetDom" class="targetDomS"></div>
        <div class="finalResultW">
            <span>finalResult:</span>
            <span class="testBlock">{{ finalResult }}</span>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import { useInViewport } from '../index';

const targetDom = ref(null);
const changeFunc = (value) => {
    if (value) {
        console.log("进入");
    }
    else {
        console.log('离开');
    }
}
const finalResult = useInViewport(targetDom, changeFunc)

</script>

<style >
.targetWrapper {
    width: 100%;
    height: 300px;
    position: relative;
}
.targetDomS {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
    background: pink;
}
.finalResultW {
    position: absolute;
    bottom: 0;
}
.finalResultW span {
    line-height: 60px;
    font-size: 30px;
}
.testBlock {
    height: 80px;
    width: 100px;
    color: red;
    text-align: center;
}
</style>

