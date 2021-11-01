<script setup>
import Range from './ui/Range.vue';
import Button from './ui/Button.vue';
import Input from './ui/Input.vue';
import Accordion from './ui/Accordion.vue';
import Rating from './ui/Rating.vue';
import Card from './ui/Card.vue';
import SelectPill from './ui/Select-Pill.vue';
</script>

<template>
    <card :label="'Target'" :headerCount="45" :headerText="'Local influencers available'">
        <Range :label="'Followers'" :id="'followers-range'" :value="iFollowers" @changeValue="updateFollowers"/>
        <Range :label="'Price range / post'" :range="true" :id="'price-range'" :values="aPriceRange"/>
        <div class="flex flex-col px-5 md:px-8 mb-3">
            <Rating :label="'Rating'" :rate="iRating" @change="changeRate"/>
        </div>
        <div class="flex flex-col px-2 mb-3">
            <accordion :showSubHeaderOnOpen='true' :header="'Age and Header'" :subHeader="'16 - 65+ | All'">
                <template v-slot:content>
                    <div class="flex gap-3 mb-3" >
                        <div class="flex-1 md:flex-initial">
                            <Button text='All' :bgColor="'purple-100'" :textColor="'purple-600'" class="w-full"></Button>
                        </div>
                        <div class="flex-1 md:flex-initial">
                            <Button text="Women" :bgColor="'purple-600'" :textColor="'white'" class="w-full"></Button>
                        </div>
                        <div class="flex-1 md:flex-initial">
                            <Button text="Male" :bgColor="'purple-100'" :textColor="'purple-600'" class="w-full"></Button>
                        </div>
                    </div>
                    <Range :label="'Age'" :values="aAge" :padding="false" :range="true" :id="'age-range'"></Range>
                </template>
            </accordion>
            <accordion :header="'Location'" :subHeader="'Entire country'">
                <template v-slot:content>
                    <Input placeholder="Entire country" :outlined="1"></Input>
                </template>
            </accordion>
            <accordion :header="'Interests'" :subHeader="'All'">
                <template v-slot:content>
                    <div class="rounded-md bg-white border border-gray-300 divide-y divide-gray-300">
                        <div v-for="(interest, index) in aInterests" :key="index" class="p-3">
                        {{interest}}
                        </div>
                    </div>
                </template>
            </accordion>
            <accordion :header="'Quality Filters'" :subHeader="'All'">
                <template v-slot:content>
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <div><Rating :label="'Minimum rating for influencers'" :rate="iMinRating" @change="changeMinRate" /></div>
                        <div><SelectPill></SelectPill></div>
                    </div>
                </template>
            </accordion>
        </div>
    </card>
</template>

<script>
export default {
    components: { Accordion, Rating },
    data() {
        return {
            aInterests : ['All', 'Beauty', 'Blogger'],
            iFollowers : 77,
            aPriceRange : [10, 50],
            aAge: [16, 65],
            iRating: 0,
            iMinRating: 3
        }
    },
    methods: {
        updateFollowers(oSlider) {
            this.iFollowers = oSlider.value;
        },
        changeRate(iIndex) {
            this.iRating = iIndex;
        },
        changeMinRate(iIndex) {
            this.iMinRating = iIndex
        }
    }
}
</script>