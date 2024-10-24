<script setup>
import {
    DropdownMenuArrow,
    DropdownMenuContent,
    DropdownMenuPortal,
    DropdownMenuRoot,
    DropdownMenuTrigger,
} from 'radix-vue'
import {defineProps, provide, reactive, watch} from 'vue'
import {classes, st} from './dropdown-menu.st.css'
import DropdownMenuItems from './dropdown-menu-items.vue'

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
    valueModel: {
        type: Object,
        default: () => ({}),
    },
    modal: {
        type: Boolean,
        default: false,
    },
    align: {
        type: String,
        default: 'start',
    },
    side: {
        type: String,
        default: 'bottom',
    },
    sideOffset: {
        type: Number,
        default: 0,
    },
    alignOffset: {
        type: Number,
        default: 0,
    },
    avoidCollisions: {
        type: Boolean,
        default: true,
    },
    collisionPadding: {
        type: [Number, Object],
        default: 0,
    },
    arrowPadding: {
        type: Number,
        default: 0,
    },
    sticky: {
        type: String,
        default: 'partial',
    },
    hideWhenDetached: {
        type: Boolean,
        default: false,
    },
})

const emits = defineEmits(['update:modelValue'])

const values = reactive({...props.modelValue})

provide('values', values)

watch(
    () => props.modelValue,
    (newVal) => {
        Object.assign(values, newVal)
    },
    {deep: true},
)

watch(
    values,
    () => {
        emits('update:modelValue', {...values})
    },
    {deep: true},
)

// Initialize values based on items
watch(
    () => props.items,
    (newItems) => {
        processItems(newItems)
    },
    {immediate: true},
)

function processItems(items) {
  items?.forEach((item) => {
    if (item.type === 'checkbox') {
      const key = item.name || item.label
      if (!(key in values)) {
        values[key] = item.checked || false
      }
    }
        else if (item.type === 'radio') {
      const groupName = item.name || item.label
      if (!(groupName in values)) {
        values[groupName] = item.value || null
      }
    }

    if (item.subItems) {
      processItems(item.subItems)
    }
  })
}
</script>

<template>
    <dropdown-menu-root :class="st(classes.root)" :modal="props.modal">
        <dropdown-menu-trigger :class="st(classes.trigger)" as-child>
            <slot name="trigger" :open="open" />
        </dropdown-menu-trigger>

        <dropdown-menu-portal>
            <dropdown-menu-content
                :class="st(classes.content, {}, classes.root)"
                :align="props.align"
                :side="props.side"
                :side-offset="props.sideOffset"
                :align-offset="props.alignOffset"
                :avoid-collisions="props.avoidCollisions"
                :collision-padding="props.collisionPadding"
                :arrow-padding="props.arrowPadding"
                :sticky="props.sticky"
                :hide-when-detached="props.hideWhenDetached"
            >
                <dropdown-menu-items :items="props.items">
                    <template #item="{ item }">
                        <slot name="item" :item="item" />
                    </template>
                </dropdown-menu-items>
                <dropdown-menu-arrow :class="classes.arrow" />
            </dropdown-menu-content>
        </dropdown-menu-portal>
    </dropdown-menu-root>
</template>
