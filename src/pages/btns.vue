<script setup>
import {ref} from 'vue'
import Badge from '../components/badge/badge.vue'
import Btn from '../components/btn-sample/btn-sample.vue'
import Container from '../components/cmps-container/cmps-container.vue'

import MyInput from '../components/input/input.vue'

const inputModel = ref('')
</script>

<template>
    <container label="Test">
        <btn variant="default">
            Default
        </btn>
        <btn variant="secondary">
            Secondary
        </btn>
        <btn variant="destructive">
            Destructive
        </btn>
        <btn variant="outline">
            Outline
        </btn>
        <btn variant="ghost">
            Ghost
        </btn>
        <btn variant="link">
            Link
        </btn>
        <hr>

        <btn size="sm" variant="secondary">
            Secondary Small
        </btn>
        <btn size="default" variant="secondary">
            Secondary Small
        </btn>
        <btn size="lg" variant="secondary">
            Secondary Small
        </btn>
        <hr>

        <btn variant="outline" size="icon">
            ☀️
        </btn>

        <btn variant="default" disabled>
            Default
        </btn>

        <hr>

        <badge variant="default">
            default
        </badge>
        <badge variant="secondary">
            secondary
        </badge>
        <badge variant="destructive">
            destructive
        </badge>
        <badge variant="outline">
            outline
        </badge>

        <hr>

        <my-input v-model="inputModel" placeholder="ahoy" />
        <my-input v-model="inputModel" placeholder="hey" />
    </container>
</template>
