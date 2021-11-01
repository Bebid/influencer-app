<script setup>
import Input from './ui/Input.vue';
import Button from './ui/Button.vue';
</script>

<template>
<div class="z-10 md:fixed md:py-10   md:inset-0 md:bg-transparent md:flex md:items-center md:justify-center">
    <div class="cursor-pointer md:absolute md:flex md:inset-0 md:h-full md:w-full md:bg-white md:opacity-70"
        @click="$emit('close')"></div>
    <div class="md:relative md:w-5/12 md:bg-white md:shadow-md md:p-10 md:rounded-2xl md:max-h-5/6 md:overflow-y-auto">
        <div v-if="page === 1" class="grid grid-col-1 gap-3">
            <dl>
                <dt class="text-lg md:text-xl font-semibold">Instruction</dt>
                <dd>What do you want the local Influencers to include in their posts?</dd>
            </dl>
            <Input :placeholder="'@Our Instagram'" :outlined="true"></Input>
            <Input :placeholder="'#Our Hashtag'" :outlined="true"></Input>
            <Button :text="'Add Images or Videos'" :size="'full'" class="text-purple-600 border border-purple-600 rounded-xl"></Button>
            <label>Instrcutions and campaign details for influencers:</label>
            <Input :type="'textarea'" :placeholder="'Ex: I Want To Talk About Fameup'" :outlined="true"></Input>
            <Button :text="'Continue'" class="bg-purple-600 text-white md:w-6/12" @click="$emit('next')"></Button>
        </div>
        <div v-if="page === 2" class="grid grid-col-1 gap-3">
            <dl>
                <dt class="text-lg md:text-xl font-semibold">Please Set Your Payment Method</dt>
                <dd>Enter Your Card Details</dd>
            </dl>
            <Input :placeholder="'Card Number'" :outlined="true"></Input>
            <div class="grid grid-cols-2 gap-3">
                <Input :placeholder="'Expiry Date'"></Input>
                <Input :placeholder="'CVV'"></Input>
            </div>
            <Input :placeholder="'First Name'"></Input>
            <Input :placeholder="'Last Name'"></Input>
            <Button :text="'Confirm Payment'" class="bg-purple-600 text-white md:w-6/12" @click="$emit('next')"></Button>
        </div>
        <div v-if="page === 3" class="grid grid-col-1 gap-3">
            <dl>
                <dt class="text-lg md:text-xl font-semibold">Add Invoicing Options</dt>
            </dl>
            <Input :placeholder="'Individual?'" :type="'checkbox'"></Input>
            <Input :placeholder="'Company Name'"></Input>
            <Input :placeholder="'VAT Name'"></Input>
            <Input :placeholder="'Trade Registration Number'"></Input>
            <Input :placeholder="'Email'"></Input>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input :placeholder="'Country'"></Input>
                <Input :placeholder="'City/Town'"></Input>
            </div>
            <Input :placeholder="'Address'"></Input>
            <Input :placeholder="'Post Code'"></Input>
            <label for="">Legal Representative of the Company</label>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input :placeholder="'First Name'"></Input>
                <Input :placeholder="'Last Name'"></Input>
            </div>
            <Button :text="'Save'" class="bg-purple-600 text-white md:w-6/12" @click="$emit('save')"></Button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['page'],
    emits: ['close', 'back', 'next', 'save']
}
</script>