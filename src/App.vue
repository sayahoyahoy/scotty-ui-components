<script setup>
import { classes } from "./app.st.css"
import BtnSample from "./components/btn-sample/btn-sample.vue"
import Container from "./components/cmps-container/cmps-container.vue"

</script>

<template>
    <div :class="classes.app">
        <Container label="Test Btns">
            <btn-sample>Ahoy</btn-sample>
            <btn-sample size="large">Ahoy</btn-sample>
        </Container>
    </div>
</template>
