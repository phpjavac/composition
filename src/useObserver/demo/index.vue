<template>
<div class="targetWrapper">
    <div ref="targetDom" class="targetDomS"></div>
    <div class='testBlock'>{{finalResult}}</div>
</div>
</template>
<script  lang="ts">
import { defineComponent,ref } from 'vue';
import {useObserver} from '../index';

export default defineComponent({
    setup() {
        const targetDom = ref();
        const finalResult = useObserver(targetDom);
        return {finalResult,targetDom}
    },
})
</script>
<style lang="stylus" scoped>
.targetWrapper
        width 200%
        height 1000px
    .targetDomS
        width 100px 
        height 100px
        border 1px solid #000 
    .testBlock
        position fixed
        height 100px
        width 100%
</style>
