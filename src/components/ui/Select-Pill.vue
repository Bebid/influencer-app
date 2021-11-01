<script setup>
import Pill from './Pill.vue';
</script>

<template>
    <div class="block">Collaboration made by influencers</div>
    <div class="flex gap-3">
        <div class="py-1"><Pill text="1+" :clickable="true"/></div>
        <div class="py-1"><Pill text="5+" :clickable="true"/></div>
        <div class="py-1"><Pill text="10+" :clickable="true"/></div>
    </div>
</template>