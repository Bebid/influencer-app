<script setup>
import Input from './ui/Input.vue';
import Button from './ui/Button.vue';
import BadgedIcon from './ui/Badged-Icon.vue';
import Sidebar from './Sidebar.vue';
</script>

<template>
    <!--mobile-->
    <nav class="flex md:hidden p-5 pb-3 pt-7 items-center bg-white">
        <div class="flex-grow-0 p-3">
            <img v-if="formPage === 0" src="/src/assets/icons/menu.svg" alt="menu" @click="bSidebarDisplay = true">
            <img v-else src="/src/assets/icons/back.svg" alt="menu" @click="$emit('back')">
            </div>
        <div class="flex-grow text-center text-2xl font-semibold">Create Campaign</div>
        <div class="flex-grow-0 p-3"><img src="/src/assets/icons/settings.svg" alt=""></div>
    </nav>
    <Sidebar :show="bSidebarDisplay" @hide="bSidebarDisplay = false"/>

    <!--web-->
    <nav class="hidden md:block py-5 bg-white">
        <div class="flex items-center mx-auto container">
            <div class="px-6 flex-initial">
            <img src="../assets/icons/logo.svg" alt="Logo">
            </div>
            <div class="px-6 pr-40 flex-grow">
                <Input :icon="'/src/assets/icons/search.svg'" :placeholder="'Search...'" :bgColor="'gray-100'"></Input>
            </div>
            <div class="px-6 flex-initial ">
                <Button text='New Campaign' :icon="'/src/assets/icons/plus.svg'" :outlined="true" :color="'white'"></Button>
            </div>
            <div class="px-6 flex justify-end flex-initial items-center">
                <div class="mx-3"><BadgedIcon/></div>
                <span class="mx-3">Sandu Casm</span>
                <img class="mx-3 h-12 w-12 rounded-full bg-gray-50" src="../assets/icons/logo.svg" alt="profile_picture">
                <img class="mx-3" src="../assets/icons/dropdown.svg" alt="dropdown">
            </div>
        </div>
    </nav>
    <div class="hidden md:block container mx-auto">
        <div class="flex p-5 pb-0">
            <div class="pr-3">
                <Button text="Influencers" :icon="'/src/assets/icons/sidebar/influencers.svg'" :outlined="false" class="md:w-40"></Button>
            </div>
            <div class="pr-3">
                <Button text="Campaign" :icon="'/src/assets/icons/campaign-light.svg'" :outlined="false" :bgColor="'purple-500'" :textColor="'white'" class="md:w-40"></Button>
            </div>
            <div class="pr-3">
                <Button text="Deal" :icon="'/src/assets/icons/sidebar/deal.svg'" :outlined="false" class="md:w-40"></Button>
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
