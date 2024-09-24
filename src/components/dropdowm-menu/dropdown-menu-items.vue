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
import {computed, defineProps, reactive, ref, watch} from 'vue'
import {classes, st} from './dropdown-menu.st.css'

const props = defineProps({
    items: Array,
    checkboxValues: Object,
})
</script>

<script>
export default {
    name: 'DropdownMenuItems',
}
</script>

<template>
    <template v-for="item in items" :key="item.label">
        <dropdown-menu-item v-if="!item.subItems && !item.type" :class="st(classes.item)" @click="item.action">
            <slot name="item" :item="item">
                {{ item.label }}
            </slot>
        </dropdown-menu-item>

        <dropdown-menu-separator v-if="item.type === 'separator'" :class="st(classes.separator)" />

        <dropdown-menu-checkbox-item
            v-if="item.type === 'checkbox'" v-model:checked="checkboxValues[item.label]"
            :class="st(classes.checkboxItem)"
        >
            <span :class="classes.checkboxItemIndicator">
                <dropdown-menu-item-indicator>
                    x
                </dropdown-menu-item-indicator>
            </span>
            {{ item.label }}
        </dropdown-menu-checkbox-item>

        <dropdown-menu-label v-if="item.type === 'radio'" :class="st(classes.label)">
            {{ item.label }}
        </dropdown-menu-label>
        <dropdown-menu-radio-group v-if="item.type === 'radio'" v-model="person">
            <dropdown-menu-radio-item
                v-for="option in item.options" :key="option.value" :value="option.value"
                :class="st(classes.radioItem)"
            >
                {{ option.label }}
            </dropdown-menu-radio-item>
        </dropdown-menu-radio-group>

        <dropdown-menu-sub v-if="item.subItems">
            <dropdown-menu-sub-trigger :class="st(classes.subTrigger)">
                <span>{{ item.label }}</span>
                <span :class="classes.subTriggerArrow">
                    >
                </span>
            </dropdown-menu-sub-trigger>
            <dropdown-menu-portal>
                <dropdown-menu-sub-content :class="st(classes.subContent, {}, classes.root)">
                    <dropdown-menu-items v-slot="slotProps" :items="item.subItems" :checkbox-values="checkboxValues">
                        <slot v-bind="slotProps ?? {}" />
                    </dropdown-menu-items>
                </dropdown-menu-sub-content>
            </dropdown-menu-portal>
        </dropdown-menu-sub>
    </template>
</template>
