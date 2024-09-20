<script setup>
import {classes} from './app.st.css'
import BtnSample from './components/btn-sample/btn-sample.vue'
import Container from './components/cmps-container/cmps-container.vue'
import SwitchSample from './components/switch-sample/switch-sample.vue'
</script>

<template>
    <div :class="classes.app">
        <container label="Test">
            <btn-sample :black="true">
                Ahoy
            </btn-sample>
            <btn-sample size="large">
                Ahoy
            </btn-sample>
            <switch-sample />
        </container>
    </div>
</template>
