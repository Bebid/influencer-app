<template>
    <button class="flex p-3 items-center justify-center rounded-xl" :class="buttonClass" >
        <img v-if="icon !== undefined" class="mx-2" :src="icon" alt="plus_icon">
        <span class="mx-2" :class="textClass">{{ text }}</span>
    </button>
</template>

<script>
export default {
    props: ['text', 'outlined', 'icon', 'textColor', 'bgColor'],
    computed: {
        buttonClass() {
            let sClass = '';
            sClass += (this.outlined) ? 'border' : '';
            sClass += ' bg-' + (this.bgColor || 'white');
            return sClass;
        },
        textClass() {
            let sClass = 'text-';
            sClass += this.textColor || 'current';
            return sClass;
        }
    }
}
</script>
