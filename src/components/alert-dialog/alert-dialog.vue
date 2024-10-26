<script setup>
import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogOverlay,
    AlertDialogPortal,
    AlertDialogRoot,
    AlertDialogTitle,
    AlertDialogTrigger,
} from 'radix-vue'
import Btn from '../button/button.vue'
import {classes, st} from './alert-dialog.st.css'

defineProps({
    title: {
        type: String,
    },
    body: {
        type: String,
    },
    cancel: {
        type: String,
        default: 'Cancel',
    },
    action: {
        type: String,
        default: 'Continue',
    },
})

const emits = defineEmits(['action', 'cancel'])
</script>

<template>
    <alert-dialog-root>
        <alert-dialog-trigger as-child :class="st(classes.root, classes.trigger, {})">
            <slot name="trigger" />
        </alert-dialog-trigger>
        <alert-dialog-portal>
            <alert-dialog-overlay :class="st(classes.root, classes.overlay, {})" />
            <alert-dialog-content :class="st(classes.root, classes.content, {})">
                <alert-dialog-header :class="st(classes.header)">
                    <alert-dialog-title :class="st(classes.title)">
                        <template v-if="$slots.title">
                            <slot name="title" />
                        </template>
                        <template v-else-if="title">
                            {{ title }}
                        </template>
                    </alert-dialog-title>
                    <alert-dialog-description :class="st(classes.description)">
                        <template v-if="$slots.body">
                            <slot name="body" />
                        </template>
                        <template v-else-if="body">
                            {{ body }}
                        </template>
                    </alert-dialog-description>
                </alert-dialog-header>
                <AlertDialogFooter :class="st(classes.footer)">
                    <template v-if="$slots.cancel">
                        <alert-dialog-cancel :class="st(classes.cancel)" as-child>
                            <slot name="cancel" />
                        </alert-dialog-cancel>
                    </template>
                    <template v-else-if="cancel">
                        <alert-dialog-cancel :class="st(classes.cancel)" as-child @click="emits('cancel')">
                            <btn variant="outline">
                                {{ cancel }}
                            </btn>
                        </alert-dialog-cancel>
                    </template>

                    <template v-if="$slots.action">
                        <alert-dialog-action :class="st(classes.action)" as-child>
                            <slot name="action" />
                        </alert-dialog-action>
                    </template>
                    <template v-else-if="action">
                        <alert-dialog-action :class="st(classes.action)" as-child @click="emits('action')">
                            <btn variant="default">
                                {{ action }}
                            </btn>
                        </alert-dialog-action>
                    </template>
                </AlertDialogFooter>
            </alert-dialog-content>
        </alert-dialog-portal>
    </alert-dialog-root>
</template>
