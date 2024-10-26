<script setup>
import {classes, st} from './button.st.css'

defineProps({
    size: String,
    variant: String,
})
</script>

<template>
    <button :class="st(classes.root, { size: size || 'default', variant: variant || 'default' })">
        <slot />
    </button>
</template>
