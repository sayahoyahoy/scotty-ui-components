<script setup>
import {classes, st} from './app.st.css'
import {classes as tailwind} from './components/tailwind.st.css'
</script>

<template>
    <div :class="st(classes.app)">
        <router-view />
    </div>
</template>
