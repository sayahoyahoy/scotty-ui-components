<script setup>
import {ref} from 'vue'
import AlertDialog from '../components/alert-dialog/alert-dialog.vue'
import Badge from '../components/badge/badge.vue'
import Btn from '../components/button/button.vue'
import Container from '../components/cmps-container/cmps-container.vue'

import MyInput from '../components/input/input.vue'

const inputModel = ref('')

function alertMe(msg) {
  alert(msg)
}
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

        <alert-dialog action="Ok" @action="() => alertMe('k')">
            <template #trigger>
                <btn variant="outline">
                    Open Dialog
                </btn>
            </template>
            <template #title>
                Are you absolutely sure?
            </template>
            <template #body>
                This action cannot be undone. This will <strong>permanently</strong> delete your account and remove your data from our servers.
            </template>
        </alert-dialog>

        <alert-dialog
            action="Yes"
            cancel=""
            title="Surely?"
            body="of course"
            @action="() => alertMe('k')"
        >
            <template #trigger>
                <btn variant="outline">
                    Open Dialog
                </btn>
            </template>
        </alert-dialog>
    </container>
</template>
