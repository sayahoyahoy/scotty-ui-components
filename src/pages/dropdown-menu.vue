<script setup>
import {ref} from 'vue'
import DropdownMenu from '../components/dropdowm-menu/dropdown-menu.vue'

const menuItems = [
    {
        label: 'New Tab',
    },
    {
        label: 'More Tools',
        subItems: [
            {label: 'Save Page As…'},
            {label: 'Create Shortcut…'},
            {label: 'Name Window…'},
            {
                label: 'More Tools',
                subItems: [
                    {label: 'Save Page As…'},
                    {label: 'Create Shortcut…'},
                    {label: 'Name Window…'},
                    {
                        label: 'Show Bookmarks',
                        type: 'checkbox',
                        name: 'aaa',
                        checked: true,
                    },
                ]
            },
        ]
    },
    {
        type: 'separator',
    },
    {
        label: 'New Window',
    },
    {
        label: 'Show Bookmarks',
        type: 'checkbox',
        name: 'showBookmarks',
        checked: true,
    },
    {
        label: 'People',
        type: 'radio',
        name: 'person',
        value: 'colm',
        options: [
            {label: 'Pedro Duarte', value: 'pedro'},
            {label: 'Colm Tuite', value: 'colm'},
        ]
    }
]

const model = ref({})
</script>

<template>
    <container label="Test">
        <dropdown-menu v-model="model" :items="menuItems">
            <template #trigger>
                <button>Open Dropdown</button>
            </template>
            <!-- <template #item="{ item }">
                ahoy {{ item.label }} s
            </template> -->
        </dropdown-menu>
        <pre>{{ model }}</pre>
    </container>
</template>
