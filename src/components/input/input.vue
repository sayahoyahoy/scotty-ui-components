<script setup>
import {ref, watch} from 'vue'

import {classes, st} from './input.st.css'

const props = defineProps({
    defaultValue: [String, Number],
    modelValue: [String, Number],
    class: String,
})

const emits = defineEmits(['update:modelValue'])

const modelValue = ref(props.defaultValue)

watch(() => props.modelValue, (newValue) => {
    modelValue.value = newValue
})

watch(modelValue, (newValue) => {
    emits('update:modelValue', newValue)
})
</script>

<template>
    <input v-model="modelValue" :class="st(classes.root)">
</template>
