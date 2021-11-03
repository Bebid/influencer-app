<script setup>
const icons = import.meta.globEager('../../assets/rating/*.svg');
const iconStar = icons['../../assets/rating/star.svg'].default;
</script>

<template>
    <div class="grid justify-items-stretch">
        <span class="">{{label}}</span>
    </div>
    <div class="flex py-2">
        <div v-for="iIndex in 5" :key="iIndex" class="mr-2">
            <img class="cursor-pointer" :src="iconStar" :class="{'opacity-50': iIndex > dataRating}" 
                @mouseover="dataRating = iIndex" @mouseleave="dataRating = rate" @click="$emit('change', iIndex)"/>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            default: ''
        },
        rate: {
            default: 0
        }
    },
    watch: {
        rate: function(iValue) {
            this.dataRating = iValue;
        }
    },
    data() {
        return {
            dataRating: 0
        }
    },
    emits: ['change']
}
</script>