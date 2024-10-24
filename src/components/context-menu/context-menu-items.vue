<script setup>
import {
  ContextMenuCheckboxItem,
  ContextMenuItem,
  ContextMenuItemIndicator,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from 'radix-vue'
import {defineProps, inject} from 'vue'

import {classes, st} from './context-menu.st.css'

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
    name: 'ContextMenuItems',
}
</script>

<template>
    <template v-for="item in props.items" :key="item.label">
        <context-menu-item v-if="!item.subItems && !item.type" :class="st(classes.item)" @click="action(item)">
            <slot name="item" :item="item">
                {{ item.label }}
            </slot>
        </context-menu-item>

        <context-menu-separator v-if="item.type === 'separator'" :class="st(classes.separator)" />

        <context-menu-checkbox-item
            v-if="item.type === 'checkbox'"
            v-model:checked="values[item.name || item.label]"
            :class="st(classes.checkboxItem)"
        >
            <span :class="classes.checkboxItemIndicator">
                <context-menu-item-indicator>
                    <slot name="checkbox-item-indicator" :item="item">
                        ☑️
                    </slot>
                </context-menu-item-indicator>
            </span>
            <slot name="item" :item="item">
                {{ item.label }}
            </slot>
        </context-menu-checkbox-item>

        <context-menu-label v-if="item.type === 'radio'" :class="st(classes.label)">
            <slot name="item" :item="item">
                {{ item.label }}
            </slot>
        </context-menu-label>
        <context-menu-radio-group v-if="item.type === 'radio'" v-model="values[item.name || item.label]">
            <context-menu-radio-item
                v-for="option in item.options"
                :key="option.value"
                :value="option.value"
                :class="st(classes.radioItem)"
            >
                <span :class="classes.checkboxItemIndicator">
                    <context-menu-item-indicator>
                        <slot name="radio-item-indicator" :item="option">
                            🔘
                        </slot>
                    </context-menu-item-indicator>
                </span>
                <slot name="item" :item="item" :option="option">
                    {{ option.label }}
                </slot>
            </context-menu-radio-item>
        </context-menu-radio-group>

        <context-menu-sub v-if="item.subItems">
            <context-menu-sub-trigger :class="st(classes.subTrigger)">
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
            </context-menu-sub-trigger>
            <context-menu-portal>
                <context-menu-sub-content :class="st(classes.subContent, {}, classes.root)">
                    <context-menu-items
                        v-if="item.subItems"
                        :items="item.subItems"
                    >
                        <template #item="{ item: subitem }">
                            <slot name="item" :item="subitem" />
                        </template>
                    </context-menu-items>
                </context-menu-sub-content>
            </context-menu-portal>
        </context-menu-sub>
    </template>
</template>
