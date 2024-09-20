<script setup>
import {SwitchRoot, SwitchThumb} from 'radix-vue'
import {classes, st} from './switch-sample.st.css'
</script>

<template>
    <div :style="{ display: 'flex', alignItems: 'center' }">
        <label
            :class="classes.label"
            for="airplane-mode"
        >
            Airplane mode
        </label>
        <switch-root
            id="airplane-mode"
            :class="st(classes.root, {})"
        >
            <switch-thumb
                :class="classes.thumb"
            />
        </switch-root>
    </div>
</template>
