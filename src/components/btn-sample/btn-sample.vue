<template>
    <button :class="st(classes.root, {size})">
        <span :class="classes.label">
            <slot></slot>
        </span>
    </button>
</template>

<script setup>
import {classes, st} from "./btn-sample.st.css"

defineProps({
    size: String
})

</script>