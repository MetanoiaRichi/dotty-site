<template>
    <section 
        id="background" 
        class="min-h-[calc(100vh-76px)] lg:min-h-screen px-[26px] md:px-20 lg:px-[100px] w-screen overflow-hidden flex flex-col lg:flex-row items-center py-32 justify-center">

        <div class="lg:flex-1 w-full lg:w-[unset] lg:max-w-[40%] lg:pr-14 mb-14 lg:mb-0">
            <img class="h-auto w-full relative" :src="require('~/assets/webp/logo-word.webp')"/>
        </div>

        <div class="lg:flex-1 w-full lg:w-[unset] lg:max-w-[40%] lg:pl-14">
            <div
                v-for="(item, index) in solutions" 
                :key="index"
                class="mb-10 text-white last:mb-0">
                <h1 class="text-xl md:text-5xl font-semibold mb-6">{{ item.title }}</h1>
                <p class="text-sm leading-6">{{ item.content }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            solutions: [
                {
                    title: 'Background & Audience',
                    content: 'Tourism & Events Queensland wanted to increase consideration of The Whitsundays amongst ‘social fun seekers’ digitally savvy consumers that socialise substantially online.'
                },
                {
                    title: 'Problem',
                    content: 'The Whitsundays was losing its cachet as an aspirational holiday location.'
                },
                {
                    title: 'Objective',
                    content: 'Shift perceptions and re-build the Whitsundays’ social currency as a world-class destination.'
                },
            ]
        }
    }
}
</script>
