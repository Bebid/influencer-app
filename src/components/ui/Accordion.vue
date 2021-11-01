<script setup>
</script>

<template>
    <div class="rounded-md p-3 md:px-6 mb-1" :class="{'bg-gray-100' : open}">
        <div class="flex items-end" :class="{'mb-3' : open}">
            <div class="flex-grow flex flex-col">
                <span>{{header}}</span>
                <span v-if="showSubHeaderOnOpen || !open" class="text-gray-400">{{subHeader}}</span>
            </div>
            <div class="flex-grow-0 pl-3 pb-1 cursor-pointer" @click="open = !open" >
                <img v-if="!open" src="/src/assets/icons/sidebar/arrow-right.svg" alt="open">
                <img v-else src="/src/assets/icons/dropdown.svg" alt="close">
            </div>
        </div>
        <div :class="open ? 'block' : 'hidden'">
            <slot name="content"></slot>
        </div>
    </div>
    
</template>

<script>
export default {
    props: ['header', 'subHeader', 'showSubHeaderOnOpen'],
    data() {
        return {
            open: false
        }
    }
}
</script>