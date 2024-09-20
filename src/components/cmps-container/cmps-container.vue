<script setup>
import {classes} from './cmps-container.st.css'

defineProps({
    label: String,
})
</script>

<template>
    <div :class="classes.root">
        <h1 :class="classes.label">
            {{ label }}
        </h1>
        <slot />
    </div>
</template>
