<script setup>
import Range from './ui/Range.vue';
import Button from './ui/Button.vue';
import Input from './ui/Input.vue';
import Accordion from './ui/Accordion.vue';
import Rating from './ui/Rating.vue';
import Card from './ui/Card.vue';
import SelectPill from './ui/Select-Pill.vue';
import SelectButton from './ui/Select-Button.vue';
import {TARGET_LIMITS, TARGET_DEFAULTS} from '../graphql/campaign.js';
</script>

<template>
    <card :label="'Target'" :headerCount="45" :headerText="'Local influencers available'">
        <Range :label="'Followers'" :id="'followers-range'" :value="iFollowers" :max="campaignFilterLimits.followers"
            @changeValue="updateFollowers"/>
        <Range :label="'Price range / post'" :range="true" :id="'price-range'" :values="aPriceRange" :min="campaignFilterLimits.priceStart" :max="campaignFilterLimits.priceEnd"
            @changeValue="updatePrice"/>
        <div class="flex flex-col px-5 md:px-8 mb-3">
            <Rating :label="'Rating'" :rate="iRating" @change="changeRate"/>
        </div>
        <div class="flex flex-col px-2 mb-3">
            <Accordion :showSubHeaderOnOpen='true' :header="'Age and Header'" :subHeader="'16 - 65+ | All'">
                <template v-slot:content>
                    <SelectButton :aButtons="campaignFilterLimits.gender" :iSelected="iGender" @select="changeGender"></SelectButton>
                    <Range :label="'Age'" :values="aAgeRange" :padding="false" :range="true" :id="'age-range'"
                        @changeValue="updateAge"></Range>
                </template>
            </Accordion>
            <Accordion :header="'Location'" :subHeader="'Entire country'">
                <template v-slot:content>
                    <Input placeholder="Entire country" :outlined="1"></Input>
                </template>
            </Accordion>
            <Accordion :header="'Interests'" :subHeader="'All'">
                <template v-slot:content>
                    <div class="rounded-md bg-white border border-gray-300 divide-y divide-gray-300">
                        <div v-for="oInterests in campaignFilterLimits.interests" :key="oInterests.id" class="p-3">
                        {{oInterests.name}}
                        </div>
                    </div>
                </template>
            </Accordion>
            <Accordion :header="'Quality Filters'" :subHeader="'All'">
                <template v-slot:content>
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <div><Rating :label="'Minimum rating for influencers'" @change="changeMinRate" /></div>
                        <div><SelectPill></SelectPill></div>
                    </div>
                </template>
            </Accordion>
        </div>
    </card>
</template>

<script>
export default {
    apollo: {
        campaignFilterLimits() {
            return {
                query: TARGET_LIMITS
            }
        },
        campaignDefaultFilter() {
            return {
                query: TARGET_DEFAULTS,
                result: (oResult) => {
                    this.iFollowers = oResult.data.campaignDefaultFilter.followers;
                    this.aPriceRange = [
                        oResult.data.campaignDefaultFilter.priceStart,
                        oResult.data.campaignDefaultFilter.priceEnd
                    ]
                    this.iRating = oResult.data.campaignDefaultFilter.rating;
                    this.aAgeRange = [
                        oResult.data.campaignDefaultFilter.ageStart,
                        oResult.data.campaignDefaultFilter.ageEnd
                    ],
                    this.iGender = oResult.data.campaignDefaultFilter.gender;
                }
            }
        }
    },
    data() {
        return {
            campaignFilterLimits: {},
            iFollowers: 0,
            aPriceRange: [0, 100],
            iRating: 0,
            aAgeRange: [0, 100],
            iGender: 0
        }
    },
    methods: {
        updateFollowers(oSlider) {
            this.iFollowers = oSlider.value;
            this.$emit('change', {key: 'followers', value: oSlider.value});
        },
        updatePrice(oSlider) {
            this.$emit('change', {key: 'price', value: oSlider.value});
        },
        updateAge(oSlider) {
            this.$emit('change', {key: 'age', value: oSlider.value});
        },
        changeRate(iIndex) {
            this.iRating = iIndex;
            this.$emit('change', {key: 'rating', value: iIndex});
        },
        changeGender(iIndex) {
            this.iGender = iIndex;
            this.$emit('change', {key: 'gender', value: iIndex});
        },
        changeMinRate(iIndex) {
            this.iMinRating = iIndex
        }
    }
}
</script>