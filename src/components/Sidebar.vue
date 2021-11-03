<script setup>
import Input from './ui/Input.vue';

const icons = import.meta.globEager('../assets/*.svg');
const iconLeft = icons['../assets/left.svg'].default;
const iconLogo = icons['../assets/logo.svg'].default;
const iconCampaign = icons['../assets/campaign.svg'].default;
const iconGroup = icons['../assets/group.svg'].default;
const iconRight = icons['../assets/right.svg'].default;
const iconPlus = icons['../assets/plus.svg'].default;
const iconDeal = icons['../assets/deal.svg'].default;
const iconNotifSolid = icons['../assets/notification-solid.svg'].default
</script>

<template>
    <div class="fixed z-10 h-full w-full flex md:hidden bg-gray-100 top-0 left-0" :class="{'hidden' : !show}">
        <div class="w-full">
            <div class="flex px-5 my-5 items-center">
                <div class="flex-grow-0 p-3 rounded-md bg-white" @click='hideSidebar'>
                    <img :src="iconLeft" alt="back">
                </div>
                <div class="flex-grow">
                    <img class="mx-auto" :src="iconLogo" alt="logo">
                </div>
            </div>
            <div class="px-5 mb-5">
                <Input></Input>
            </div>
            <div class="mb-5">
                <div class="flex m-3 mx-6 pb-3 border-b">
                    <div class="flex w-8">
                        <img class="m-auto" :src="iconPlus" alt="">
                    </div>
                    <span class="flex-grow px-3">New Campaign</span>
                    <img class="flex-grow-0" :src="iconRight" alt="">
                </div>
                <div class="flex m-3 mx-6 pb-3 border-b">
                    <div class="flex w-8">
                        <img class="m-auto" :src="iconGroup" alt="">
                    </div>
                    <span class="flex-grow px-3">Influencers</span>
                    <img class="flex-grow-0" :src="iconRight" alt="">
                </div>
                <div class="flex m-3 mx-6 pb-3 border-b">
                    <div class="flex w-8">
                        <img class="m-auto" :src="iconCampaign" alt="">
                    </div>
                    <span class="flex-grow px-3">Campaign</span>
                    <img class="flex-grow-0" :src="iconRight" alt="">
                </div>
                <div class="flex m-3 mx-6 pb-3 border-b">
                    <div class="flex w-8">
                        <img class="m-auto" :src="iconDeal" alt="">
                    </div>
                    <span class="flex-grow px-3">Deal</span>
                    <img class="flex-grow-0" :src="iconRight" alt="">
                </div>
                <div class="flex m-3 mx-6 pb-3 border-b">
                    <div class="flex w-8">
                        <img class="m-auto" :src="iconNotifSolid" alt="">
                    </div>
                    <div class="flex-grow flex px-3 items-center">
                        <span class="flex-grow">Notifications</span>
                        <span class="inline-flex items-center justify-center h-5 w-5 text-xs leading-none text-red-100 bg-purple-500 rounded-full">9</span>
                    </div>
                    <img class="flex-grow-0" :src="iconRight" alt="">
                </div>
            </div>
        </div>
        <div class="p-6 absolute bottom-0 left-0 text-gray-300">Version 1.24.55</div>
    </div>
</template>

<script>
export default {
    props: ['show'],
    methods: {
        hideSidebar() {
            this.$emit('hide');
        }
    },
    emits: ['hide']
}
</script>
