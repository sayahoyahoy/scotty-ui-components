<script setup>
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
        checked: true,
    },
    {
        label: 'People',
        type: 'radio',
        options: [
            {label: 'Pedro Duarte', value: 'pedro'},
            {label: 'Colm Tuite', value: 'colm', checked: true},
        ]
    }
]
</script>

<template>
    <container label="Test">
        <dropdown-menu :items="menuItems">
            <template #item="{ item }">
                ahoy {{ item.label }} s
            </template>
        </dropdown-menu>
    </container>
</template>
