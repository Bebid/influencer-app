<script setup>
import Navbar from './components/Navbar.vue';
import Target from './components/Target.vue';
import Budget from './components/Budget.vue';
import AudienceDefinition from './components/AudienceDefinition.vue';
import PaymentForm from './components/PaymentForm.vue';
import { ESTIMATE } from './graphql/campaign';
</script>

<template>
    <div class="min-h-full bg-gray-100">
        <Navbar :formPage="iFormPage" @back="back"></Navbar>
        <div class="bg-gray-100 container mx-auto p-5 md:mt-0">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5" :class="{'hidden md:grid' : iFormPage > 0}">
                <div class="grid gap-3 md:gap-5">
                    <Target @change="updateDetails"/>
                    <Budget @continue="++iFormPage" @change="updateDetails"/>
                </div>
                <div>   
                    <AudienceDefinition :data="campaignEstimate"></AudienceDefinition>
                </div>
            </div>
            <PaymentForm :page="iFormPage" @next="next" @save="save" @close="close" class="" :class="{'md:hidden' : iFormPage === 0}"/>
        </div>
    </div>
</template>

<script>
export default {
    apollo: {
        campaignEstimate() {
            return {
                query: ESTIMATE,
                variables () {
                    return {
                        followers: this.followers,
                        priceStart: this.priceStart,
                        priceEnd: this.priceEnd,
                        rating: this.rating,
                        ageStart: this.ageStart,
                        ageEnd: this.ageEnd,
                        gender: this.gender,
                        location: this.location,
                        interests: this.interests,
                        influencers: this.influencers,
                        posts: this.posts
                    }
                }
            }
        }
    },
    data() {
        return {
            campaignEstimate: {},
            iFormPage: 0,
            followers: 0,
            priceStart: 0,
            priceEnd: 100,
            rating: 5,
            ageStart: 18,
            ageEnd: 60,
            gender: 0,
            location: [0],
            interests: [0],
            influencers: 10,
            posts: 1
        }
    },
    methods: {
        back() {
            --this.iFormPage;
        },
        next() {
            ++this.iFormPage;
        },
        save() {
            alert('Form saved!');
        },
        close() {
            this.iFormPage = 0;
        },
        updateDetails(aToChange) {
            if (aToChange.key === 'price') {
                this.priceStart = aToChange.value[0];
                this.priceEnd = aToChange.value[1];
                return;
            }

            if (aToChange.key === 'age') {
                this.ageStart = aToChange.value[0];
                this.ageEnd = aToChange.value[1];
                return;
            }

            this[aToChange.key] = aToChange.value;
        }
    }
}
</script>
