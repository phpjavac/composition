<template>
    <div>
        <div ref="divRef" style="display: inline-block;">
            <textarea></textarea>
        </div>
        <div>
            <span>宽： </span>
            <span>{{ size.width }}</span>
            <span>高：</span>
            <span>{{ size.height }}</span>
        </div>
    </div>
</template>

<script setup lang='ts'>
import useSize from "../index";
import { ref, onMounted, reactive, watch } from "vue";

const divRef = ref<HTMLElement | null>(null);
const widthAndHeight = ref({
    width: 0,
    height: 0
});
const size = ref<{ width: number, height: number }>({ width: 0, height: 0 })
onMounted(() => {
    if (divRef.value) {
        size.value = useSize(divRef.value);
    }

})
</script>