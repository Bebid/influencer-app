<script setup>
import Input from './ui/Input.vue';
import Button from './ui/Button.vue';
import BadgedIcon from './ui/Badged-Icon.vue';
import Sidebar from './Sidebar.vue';

import {ref} from 'vue';

const commonImages = import.meta.globEager('../assets/*.svg');
const iconLogo = commonImages['../assets/logo.svg'].default;
const iconSearch = commonImages['../assets/search.svg'].default;
const iconSettings = commonImages['../assets/settings.svg'].default;
const iconMenu = commonImages['../assets/menu.svg'].default;
const iconLeft = commonImages['../assets/left.svg'].default;
const iconPlusPurple = commonImages['../assets/plus-purple.svg'].default;
const iconNotif = commonImages['../assets/notification.svg'].default;
const iconDropdown = commonImages['../assets/dropdown.svg'].default;
const iconPlus = commonImages['../assets/plus.svg'].default;
const iconCampaignLight = commonImages['../assets/campaign-light.svg'].default;
const iconDeal = commonImages['../assets/deal.svg'].default;
</script>

<template>
    <!--mobile-->
    <nav class="flex md:hidden p-5 pb-3 pt-7 items-center bg-white">
        <div class="flex-grow-0 p-3">
            <img :src="iconMenu" alt="menu" @click="bSidebarDisplay = true">
        </div>
        <div class="flex-grow text-center text-2xl font-semibold">Create Campaign</div>
        <div class="flex-grow-0 p-3"><img :src="iconSettings" alt=""></div>
    </nav>
    <Sidebar :show="bSidebarDisplay" @hide="bSidebarDisplay = false"/>

    <!--web-->
    <nav class="hidden md:block py-5 bg-white">
        <div class="flex items-center mx-auto container">
            <div class="px-6 flex-initial">
            <img :src="iconLogo" alt="Logo">
            </div>
            <div class="px-6 pr-40 flex-grow">
                <Input :icon="iconSearch" :placeholder="'Search...'" :bgColor="'gray-100'"></Input>
            </div>
            <div class="px-6 flex-initial ">
                <Button text='New Campaign' :icon="iconPlusPurple" :outlined="true" :color="'white'"></Button>
            </div>
            <div class="px-6 flex justify-end flex-initial items-center">
                <div class="mx-3"><BadgedIcon/></div>
                <span class="mx-3">Sandu Casm</span>
                <img class="mx-3 h-12 w-12 rounded-full bg-gray-50" :src="iconLogo" alt="profile_picture">
                <img class="mx-3" :src="iconDropdown" alt="dropdown">
            </div>
        </div>
    </nav>
    <div class="hidden md:block container mx-auto">
        <div class="flex p-5 pb-0">
            <div class="pr-3">
                <Button text="Influencers" :icon="iconPlus" :outlined="false" class="md:w-40"></Button>
            </div>
            <div class="pr-3">
                <Button text="Campaign" :icon="iconCampaignLight" :outlined="false" :bgColor="'purple-500'" :textColor="'white'" class="md:w-40"></Button>
            </div>
            <div class="pr-3">
                <Button text="Deal" :icon="iconDeal" :outlined="false" class="md:w-40"></Button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['formPage'],
    data() {
        return {
            bSidebarDisplay: false
        }
    },
    emits: ['back']
}
</script>
