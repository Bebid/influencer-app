<template>
    <div class="bg-purple-100 text-purple-600 rounded-full w-12 h-5 bg- items-center justify-center inline-flex text-xs" :class="{'hover:bg-purple-600 hover:text-purple-100 cursor-pointer active:bg-purple-600 active:text-purple-100' : clickable}">
        <span>{{text}}</span>
    </div>
</template>

<script>
export default {
    props: ['text', 'clickable'],
}
</script>