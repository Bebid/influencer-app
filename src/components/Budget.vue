<script setup>
import Card from './ui/Card.vue';
import Range from './ui/Range.vue';
import Button from './ui/Button.vue';
import { BUDGET_DEFAULTS, BUDGET_LIMITS } from '../graphql/campaign';
</script>

<template>
    <card :label="'Budget'" :headerCount="'20.00 RON'" :headerText="'Total budget'" :subHeader="'1146-432 Estimated reach'">
        <Range :label="'Influencers'" :value="iBudget" :max="campaignFilterLimits.influencers" :id="'budget-range'" 
            @changeValue="updateBudget"/>
        <Range :label="'Posts'" :value="iPosts" :max="campaignFilterLimits.posts" :id="'posts-range'" 
            @changeValue="updatePosts"/>
        <div class="px-5 md:px-8 pb-8">
            <Button text="Continue" :bgColor="'purple-600'" :textColor="'white'" :rounded="'xl'" :size="'full'" class="w-full" 
                @click="$emit('continue')"></Button>
        </div>
    </card>    
</template>

<script>
export default {
    apollo: {
        campaignFilterLimits() {
            return {
                query: BUDGET_LIMITS
            }
        },
        campaignDefaultFilter() {
            return {
                query: BUDGET_DEFAULTS,
                result: (oResult) => {
                    this.iBudget = oResult.data.campaignDefaultFilter.influencers;
                    this.iPosts = oResult.data.campaignDefaultFilter.posts;
                }
            }
        }
    },
    data() {
        return {
            campaignFilterLimits: {},
            iBudget: 50,
            iPosts: 50
        }
    },
    methods: {
        updateBudget(oSlider) {
            this.iBudget =  oSlider.value;
            this.$emit('change', {key: 'influencers', value: oSlider.value});
        },
        updatePosts(oSlider) {
            this.iPosts = oSlider.value;
            this.$emit('change', {key: 'posts', value: oSlider.value});
        }
    },
    emits: ['continue', 'change']
}
</script>
