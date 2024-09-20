<script setup>
import {classes, st} from './btn-sample.st.css'

defineProps({
    size: String,
    black: Boolean,
})
</script>

<template>
    <button :class="st(classes.root, { size, black })">
        <span :class="classes.label">
            <slot />
        </span>
    </button>
</template>
