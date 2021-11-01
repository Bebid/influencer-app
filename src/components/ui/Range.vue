<script setup>
import Pill from './Pill.vue';
import '../../assets/js/jquery';
import '../../assets/js/jquery-ui.min.js';
import '../../assets/css/jquery-ui.css';
import '../../assets/js/jquery-ui-touch.min.js';
</script>

<template>
    <div class="flex flex-col mb-3" :class="{'px-5 md:px-8' : padding}">
        <div class="grid grid-cols-2 justify-items-stretch">
            <span>{{label}}</span>
            <span class="justify-self-end"><Pill :text="pill"/></span>
        </div>
        <div class="flex h-10 justify-center items-center">
            <div :id="id" @slide='setValue'></div>
        </div>
    </div>
</template>

<script scoped>
export default {
    props: {
        label: {
            default: ''
        }, 
        id: {
            default: 'range',
        },
        range: {
            default: 'min'
        },
        value: {
            default: [0]
        },
        values: {
            default: [0, 100]
        },
        max: {
            default: 100
        },
        min: {
            default: 0
        },
        padding: {
            default: true
        }
    },
    computed: {
        pill() {
            if (this.range === true) {
                return this.values[0] + ' - ' + this.values[1];
            } else {
                return this.value;
            }
        }
    },
    mounted() {
        const oSlider = $('#' + this.id).slider({
            range: this.range,
            min: this.min,
            max: this.max,
            classes: {
                'ui-slider' : 'rounded-full bg-gray-200 h-0.5 border-0 w-full',
                'ui-slider-handle' : 'h-5 w-5 flex rounded-full bg-white shadow border-2 border-purple-600 -top-2',
                'ui-slider-range' : 'bg-purple-600'
            },
            slide: this.setValue
        });    

        if (this.range === true) {
            oSlider.slider('option', 'values', this.values);
        } else {
            oSlider.slider('option', 'value', this.value);
        }
    },
    methods: {
        setValue(oEvent, ui) {
            let mValue = (this.range === true) ? ui.values : ui.value;
            this.$emit('changeValue', {type: this.range, value: mValue});
        }
    },
    emits: ['changeValue']
}
</script>