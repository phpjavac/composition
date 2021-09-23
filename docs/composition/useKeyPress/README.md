# useKeyPress

键盘事件

## 代码演示

### 基础使用

<div>
    <span>{{keyCode}}--2</span>
</div>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useKeyPress } from "../../../../../../src";

const target = ref<HTMLSpanElement>(null);
const keyCode = ref('')
useKeyPress(
    '65', 
    ()=>{console.log('11111')},
    {
        events: ['keypress', ]
    }
);
</script>