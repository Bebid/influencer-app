<script setup>
import Card from './ui/Card.vue';
</script>

<template>
    <Card>
        <div class="grid grid-cols-1 md:grid-cols-2 items-center px-5 py-5 md:py-8 md:px-8 ">  
            <div class="mb-3">
                <h3 class="text-lg md:text-xl font-bold mb-3">Audience Definition</h3>
                <p>Location: {{data.location}}</p>
                <p>Age: 18-65+</p>
                <p>Potential Reach: {{data.reach}}</p>
                <h3 class="text-lg font-bold md:text-2xl">{{data.potential}} people</h3>
            </div>
            <div class="mb-3">
                <canvas class="mx-auto" id="gauge"></canvas>
                <div class="relative mx-3 -top-5 flex justify-items-center">
                    <span class="flex-auto text-left font-sm text-gray-400">Specific</span>
                    <span class="flex-auto text-right font-sm text-gray-400">Broad</span>
                </div>
            </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 px-5 md:px-8">  
            <div class="mb-3">
                <div class="flex gap-3 items-center">
                    <div class="flex-initial">
                        <img class="w-10" src="/src/assets/icons/influencer.svg" alt="">
                    </div>
                    <div class="flex-grow flex-col">
                        <h6 class="text-sm text-gray-400">Number of Influencers</h6>
                        <h3 class="text-lg">{{data.influencers}}</h3>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="flex gap-3 items-center">
                    <div class="flex-initial">
                        <img class="w-10" src="/src/assets/icons/reach.svg" alt="">
                    </div>
                    <div class="flex-grow flex-col">
                        <h6 class="text-sm text-gray-400">Potential Reach</h6>
                        <h3 class="text-lg">{{data.reach}}</h3>
                    </div>
                </div>
            </div>
            <div class="mb-3 pb-5">
                <div class="flex gap-3 items-center">
                    <div class="flex-initial">
                        <img class="w-10" src="/src/assets/icons/engagement.svg" alt="">
                    </div>
                    <div class="flex-grow flex-col">
                        <h6 class="text-sm text-gray-400">Potential Engagement</h6>
                        <h3 class="text-lg">{{data.engagement}}</h3>
                    </div>
                </div>
            </div>
        </div>
    </Card>
</template>

<script>
export default {
    props: {
        data: {
            default: {}
        }
    },
    mounted() {
        const opts = {
            angle: -0.2,
            lineWidth: 0.05,
            radiusScale: 1,
            pointer: {
              length: 0.6,
              strokeWidth: 0.035,
              color: '#000000'
            },
            limitMax: false, 
            limitMin: false,
            generateGradient: true,
            highDpiSupport: true,
            percentColors: [[0.3, "#d26f65" ], [0.660, "#14d238"], [1.0, "#eae43e"]]
        };
        const target = document.getElementById('gauge');
        const gauge = new Gauge(target).setOptions(opts);
        gauge.maxValue = 3000; 
        gauge.animationSpeed = 32; 
        gauge.set(2000);
    }
}
</script>

