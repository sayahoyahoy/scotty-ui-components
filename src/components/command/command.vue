<script setup>
import {
    ComboboxContent,
    ComboboxEmpty,
    ComboboxGroup,
    ComboboxInput,
    ComboboxItem,
    ComboboxItemIndicator,
    ComboboxLabel,
    ComboboxRoot,
    PopoverAnchor,
    PopoverContent,
    PopoverPortal,
    PopoverRoot,
    PopoverTrigger,
} from 'radix-vue'

import {computed, nextTick, ref} from 'vue'

import Btn from '../button/button.vue'
import {classes, st} from './command.st.css'

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
    placeholder: {
        type: String,
        default: 'Select a framework xy',
    },
    modelValue: {
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
    withArrow: {
        type: Boolean,
        default: false,
    },
})

const emits = defineEmits(['update:modelValue'])

const selectedItem = ref(props.valueModel || {})

const open = ref(false)
const searchTerm = ref('')
const selectedItemx = ref({})

const filteredItems = computed(() =>
    searchTerm.value === ''
        ? props.items
        : props.items.filter((item) => {
            return item.label?.toLowerCase().includes(searchTerm.value?.toLowerCase())
        }),
)

function updateSelectedValue(value) {
    open.value = false
    selectedItem.value = value
    searchTerm.value = ''
    emits('update:modelValue', value)
}
</script>

<template>
    <popover-root :open="open" @update:open="v => open = v">
        <popover-trigger :class="st(classes.root, classes.trigger)" as-child>
            <slot name="trigger" :item="selectedItem">
                <btn variant="outline">
                    {{ selectedItem?.label || placeholder }}
                </btn>
            </slot>
        </popover-trigger>
        <popover-portal>
            <popover-content
                :align="props.align"
                :side="props.side"
                :side-offset="props.sideOffset"
                :align-offset="props.alignOffset"
                :class="st(classes.root, classes.content)"
            >
                <combobox-root
                    v-model:search-term="searchTerm"
                    :class="st(classes.combo)"
                    :default-open="true"
                    :display-value="(v) => v.label"
                    @update:model-value="updateSelectedValue"
                >
                    <div :class="st(classes.inputWrapper)">
                        <combobox-input autofocus :class="st(classes.input)" :placeholder="placeholder" />
                    </div>
                    <combobox-empty :class="st(classes.empty)">
                        No framework found.
                    </combobox-empty>
                    <combobox-content :class="st(classes.list)">
                        <div role="presentation">
                            <combobox-group :class="st(classes.group)">
                                <!-- <combobox-label v-if="heading" :class="st(classes.groupLabel)">
                                    {{ heading }}
                                </combobox-label> -->

                                <combobox-item
                                    v-for="item in filteredItems"
                                    :key="item.value"
                                    :class="st(classes.item)"
                                    :value="item"
                                    @select.prevent="updateSelectedValue(item)"
                                >
                                    {{ item.label }}

                                    <div v-if="selectedItem.value === item.value" :class="st(classes.indicator)">
                                        ✔️
                                    </div>
                                </combobox-item>
                            </combobox-group>
                        </div>
                    </combobox-content>
                </combobox-root>
            </popover-content>
        </popover-portal>
    </popover-root>
</template>
