<script setup>
import Button from './Button.vue';
</script>

<template>
    <div class="flex gap-3 mb-3" >
        <div class="flex-1 md:flex-initial">
            <Button text='All' class="w-full md:w-40" :class="{'bg-purple-100 text-purple-600' : (iSelected !== 0), 'bg-purple-600 text-purple-100': (iSelected === 0)}"
                @click="$emit('select', 0)"></Button>
        </div>
        <div v-for="oButton in aButtons" :key="oButton.id" class="flex-1 md:flex-initial">
            <Button :text="oButton.name" class="w-full md:w-40" :class="{'bg-purple-100 text-purple-600' : (iSelected !== oButton.id), 'bg-purple-600 text-purple-100': (iSelected === oButton.id)}"
                @click="$emit('select', oButton.id)"></Button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        aButtons : {
            default: []
        },
        iSelected : {
            default: 0
        }
    }
}
</script>