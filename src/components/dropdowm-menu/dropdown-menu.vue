<script setup>
import {
    DropdownMenuArrow,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuItemIndicator,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuRoot,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from 'radix-vue'
import {computed, defineProps, reactive, ref, useSlots, watch} from 'vue'
import {classes, st} from './dropdown-menu.st.css'
import DropdownMenuItems from './dropdown-menu-items.vue'

const props = defineProps({
    items: Array,
})
const checkboxValues = reactive({})

watch(() => props.items, (newItems) => {
    newItems?.forEach((item) => {
        if (item.type === 'checkbox') {
            checkboxValues[item.label] = ref(item.checked || false)
        }
    })
}, {immediate: true})
</script>

<template>
    <pre>{{ Object.keys($slots) }}</pre>
    <dropdown-menu-root :class="st(classes.root)">
        <dropdown-menu-trigger :class="st(classes.trigger)">
            trigger
        </dropdown-menu-trigger>

        <dropdown-menu-portal>
            <dropdown-menu-content :class="st(classes.content, {}, classes.root)">
                <dropdown-menu-items :items="props.items" :checkbox-values="checkboxValues">
                    <template #item="{ item }">
                        <slot name="item" :item="item" />
                    </template>
                </dropdown-menu-items>
            </dropdown-menu-content>
        </dropdown-menu-portal>
    </dropdown-menu-root>
</template>
