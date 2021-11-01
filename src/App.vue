<script setup>
import Navbar from './components/Navbar.vue';
import Target from './components/Target.vue';
import Budget from './components/Budget.vue';
import AudienceDefinition from './components/AudienceDefinition.vue';
import PaymentForm from './components/PaymentForm.vue';
import {$, jQuery} from 'jquery';
</script>

<template>
    <div class="min-h-full bg-gray-100">
        <Navbar :formPage="iFormPage" @back="back"></Navbar>
        <div class="bg-gray-100 container mx-auto p-5 md:mt-0">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5" :class="{'hidden md:grid' : iFormPage > 0}">
                <div class="grid gap-3 md:gap-5">
                    <Target/>
                    <Budget @continue="++iFormPage"/>
                </div>
                <div>   
                    <AudienceDefinition></AudienceDefinition>
                </div>
            </div>
            <PaymentForm :page="iFormPage" @next="next" @save="save" @close="close" class="" :class="{'md:hidden' : iFormPage === 0}"/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bFormShow: false,
            iFormPage: 0
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
        }
    }
}
</script>
