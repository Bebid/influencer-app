<script setup>
import Card from './ui/Card.vue';
import Range from './ui/Range.vue';
import Button from './ui/Button.vue';
</script>

<template>
    <card :label="'Budget'" :headerCount="'20.00 RON'" :headerText="'Total budget'" :subHeader="'1146-432 Estimated reach'">
        <Range :label="'Influencers'" :value="iBudget" :id="'budget-range'" @changeValue="updateBudget"/>
        <Range :label="'Posts'" :value="iPosts" :id="'posts-range'" @changeValue="updatePosts"/>
        <div class="px-5 md:px-8 pb-8">
            <Button text="Continue" :bgColor="'purple-600'" :textColor="'white'" :rounded="'xl'" :size="'full'" class="w-full" 
                @click="$emit('continue')"></Button>
        </div>
    </card>    
</template>

<script>
export default {
    data() {
        return {
            iBudget: 50,
            iPosts: 50
        }
    },
    methods: {
        updateBudget(oSlider) {
            this.iBudget =  oSlider.value;
        },
        updatePosts(oSlider) {
            this.iPosts = oSlider.value;
        }
    },
    emits: ['continue']
}
</script>
