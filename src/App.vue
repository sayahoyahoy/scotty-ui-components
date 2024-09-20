<script setup>
import {classes} from './app.st.css'
</script>

<template>
    <div :class="classes.app">
        <router-view />
    </div>
</template>
