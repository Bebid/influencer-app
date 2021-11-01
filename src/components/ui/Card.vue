<template>
    <div class="bg-white rounded-2xl w-full">
        <div v-if="label" class="block px-5 md:px-8 py-3 md:py-5 border-b">
            <span class="text-lg md:text-xl font-semibold">{{label}}</span>
        </div>
        <div v-if="headerText" class="flex px-5 md:px-8 pt-3 mb-3 items-center">
            <span class="flex-grow-0 mr-3 font-bold text-3xl">{{headerCount}}</span>
            <span class="flex-grow-0 text-2xl font-semibold">{{headerText}}</span>
        </div>
        <div v-if="subHeader" class="px-5 md:px-8 mb-3 text-gray-400 text-lg font-medium">{{subHeader}}</div>   
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['label', 'headerCount', 'headerText', 'subHeader']
}
</script>