<template>
    <div v-if="type === 'checkbox'" class="relative text-gray-600">
        <div class="absolute flex items-center inset-y-0 left-0">
            <input type="checkbox" class="m-3"/>
        </div>
        <div :class="inputClass" class="w-full p-3 pl-8 rounded-xl focus:outline-none">{{placeholder}}</div>
    </div>
    <div v-else class="relative">
        <span v-if="icon" class="absolute inset-y-0 left-0 flex items-center">
            <button type="submit" class="p-3">
                <img :src="icon" alt="icon">
            </button>
        </span>
        <input v-if="type !== 'textarea'" :type="type" :class="inputClass" class="w-full px-3 py-3 rounded-xl focus:outline-none" :placeholder="placeholder" autocomplete="off">
        <textarea v-else cols="30" rows="5" class="resize-none w-full p-3 rounded-xl focus:outline-none" :placeholder="placeholder" autocomplete="off" :class="inputClass" ></textarea>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            default: ''
        }, 
        placeholder: {
            default: 'Sample'
        }, 
        outlined: {
            default: true
        },
        borderColor: {
            default: 'border-gray-300'
        }, 
        bgColor: {
            default: 'bg-white'
        }, 
        type: {
            default: 'text'
        }
    },
    computed: {
        inputClass() {
            let sClass = '';
            sClass += (this.icon) ? ' pl-10' : '';
            sClass += ' ' + this.bgColor;
            sClass += (this.outlined) ? ' border' : '';
            sClass += ' ' + this.borderColor;
            return sClass; 
        }
    }
}
</script>