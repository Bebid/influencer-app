<template>
    <div class="grid justify-items-stretch">
        <span class="">{{label}}</span>
    </div>
    <div class="flex py-2">
        <div v-for="iIndex in 5" :key="iIndex" class="mr-2">
            <img class="cursor-pointer" src="/src/assets/icons/star.svg" :class="{'opacity-50': iIndex > dataRating}" 
                @mouseover="dataRating = iIndex" @mouseleave="dataRating = rate" @click="$emit('change', iIndex)"/>
        </div>
    </div>
</template>

<script>
export default {
    props: ['label', 'rate'],
    data() {
        return {
            dataRating: this.rate
        }
    },
    emits: ['change']
}
</script>