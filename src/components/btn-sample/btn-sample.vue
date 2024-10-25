<script setup>
import {classes, st} from './btn-sample.st.css'

defineProps({
    size: String,
    variant: Boolean,
})
</script>

<template>
    <button :class="st(classes.root, { size: size || 'default', variant: variant || 'default' })">
        <slot />
    </button>
</template>
