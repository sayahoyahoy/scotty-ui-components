<script setup>
import {ref} from 'vue'
import Btn from '../components/button/button.vue'
import Container from '../components/cmps-container/cmps-container.vue'
import Combobox from '../components/command/command.vue'
import ContextMenu from '../components/context-menu/context-menu.vue'
import DropdownMenu from '../components/dropdown-menu/dropdown-menu.vue'

const menuItems = [
    {
        label: 'New Tab',
        action: () => console.log('New Tab'),
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
        shortcut: 'Ctrl+N',
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

const frameworks = [
    {value: 'next.js', label: 'Next.js'},
    {value: 'sveltekit', label: 'SvelteKit'},
    {value: 'nuxt', label: 'Nuxt'},
    {value: 'remix', label: 'Remix'},
    {value: 'astro', label: 'Astro'},
]

const model = ref({})
const model2 = ref({})
const model3 = ref({})
const model4 = ref({})
</script>

<template>
    <container label="Test">
        <dropdown-menu v-model="model" :items="menuItems" @action="console.log">
            <template #trigger>
                <btn variant="outline">
                    Open Dropdown
                </btn>
            </template>
            <!-- <template #item="{ item }">
                ahoy {{ item.label }} s
            </template> -->
        </dropdown-menu>
        <pre>{{ model }}</pre>

        <context-menu v-model="model2" :items="menuItems" @action="console.log">
            <template #trigger>
                <btn variant="secondary">
                    context menu right click
                </btn>
            </template>
            <!-- <template #item="{ item }">
                ahoy {{ item.label }} s
            </template> -->
        </context-menu>
        <pre>{{ model2 }}</pre>

        <pre>{{ model4 }}</pre>

        <combobox v-model="model3" :items="frameworks" @update:selected-value="console.log" />

        <div>xy</div>
        <pre>{{ model3 }}</pre>
    </container>
</template>
