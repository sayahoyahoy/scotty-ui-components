<script setup>
import {classes, st} from './badge.st.css'

defineProps({
    variant: Boolean,
})
</script>

<template>
    <div :class="st(classes.root, { variant: variant ?? 'default' })">
        <slot />
    </div>
</template>
