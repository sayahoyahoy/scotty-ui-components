<script setup>
import {
    DropdownMenuCheckboxItem,
    DropdownMenuItem,
    DropdownMenuItemIndicator,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from 'radix-vue'
import {defineProps, inject} from 'vue'

import {classes, st} from './dropdown-menu.st.css'

const props = defineProps({
    items: Array,
})
const values = inject('values')
const selectItem = inject('selectItem')

function action(item) {
    selectItem(item)
    item.action?.(item)
}
</script>

<script>
export default {
    name: 'DropdownMenuItems',
}
</script>

<template>
    <template v-for="item in props.items" :key="item.label">
        <dropdown-menu-item v-if="!item.subItems && !item.type" :class="st(classes.item)" @click="action(item)">
            <slot name="item" :item="item">
                {{ item.label }}
            </slot>
            <span v-if="item.shortcut" :class="st(classes.shortcut)">
                <slot name="shortcut" :item="item">
                    {{ item.shortcut }}
                </slot>
            </span>
        </dropdown-menu-item>

        <dropdown-menu-separator v-if="item.type === 'separator'" :class="st(classes.separator)" />

        <dropdown-menu-checkbox-item
            v-if="item.type === 'checkbox'"
            v-model:checked="values[item.name || item.label]"
            :class="st(classes.checkboxItem)"
        >
            <span :class="classes.checkboxItemIndicator">
                <dropdown-menu-item-indicator>
                    <slot name="checkbox-item-indicator" :item="item">
                        ☑️
                    </slot>
                </dropdown-menu-item-indicator>
            </span>
            <slot name="item" :item="item">
                {{ item.label }}
            </slot>
        </dropdown-menu-checkbox-item>

        <dropdown-menu-label v-if="item.type === 'radio'" :class="st(classes.label)">
            <slot name="item" :item="item">
                {{ item.label }}
            </slot>
        </dropdown-menu-label>
        <dropdown-menu-radio-group v-if="item.type === 'radio'" v-model="values[item.name || item.label]">
            <dropdown-menu-radio-item
                v-for="option in item.options"
                :key="option.value"
                :value="option.value"
                :class="st(classes.radioItem)"
            >
                <span :class="classes.checkboxItemIndicator">
                    <dropdown-menu-item-indicator>
                        <slot name="radio-item-indicator" :item="option">
                            🔘
                        </slot>
                    </dropdown-menu-item-indicator>
                </span>
                <slot name="item" :item="item" :option="option">
                    {{ option.label }}
                </slot>
            </dropdown-menu-radio-item>
        </dropdown-menu-radio-group>

        <dropdown-menu-sub v-if="item.subItems">
            <dropdown-menu-sub-trigger :class="st(classes.subTrigger)">
                <span>
                    <slot name="item" :item="item">
                        {{ item.label }}
                    </slot>
                </span>
                <span :class="classes.subTriggerArrow">
                    <slot name="sub-trigger-arrow" :item="item">
                        👉
                    </slot>
                </span>
            </dropdown-menu-sub-trigger>
            <dropdown-menu-portal>
                <dropdown-menu-sub-content :class="st(classes.subContent, {}, classes.root)">
                    <dropdown-menu-items v-if="item.subItems" :items="item.subItems">
                        <template #item="{ item: subitem }">
                            <slot name="item" :item="subitem" />
                        </template>
                    </dropdown-menu-items>
                </dropdown-menu-sub-content>
            </dropdown-menu-portal>
        </dropdown-menu-sub>
    </template>
</template>
