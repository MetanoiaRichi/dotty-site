<template>
    <section 
        id="background" 
        class="min-h-[calc(100vh-76px)] lg:min-h-screen px-[26px] md:px-20 lg:px-[100px] w-screen overflow-hidden flex flex-col lg:flex-row items-center py-20 lg:py-28 lg:justify-center">

        <div class="lg:flex-1 w-full lg:w-[unset] lg:max-w-[40%] mb-56 lg:mb-0">
            <img class="h-auto w-full relative" :src="require('~/assets/webp/logo-word.webp')"/>
        </div>

        <div class="shrink-0 px-[6%]">
            <div class="rounded-full border-4 h-[140px] w-[140px] border-white cursor-pointer hover:bg-white/[0.4] flex items-center justify-center" @click="isShowPlayer = true">
                <img class="h-[58px] w-auto relative right-[-6px]" :src="require('~/assets/svg/triangle.svg')"/>
            </div>
        </div>

        <div class="flex-1 max-w-[40%] hidden lg:block"></div>

        <div class="fixed top-0 left-0 w-screen h-screen bg-black z-[40]" v-if="isShowPlayer">
            <div
                @click="isShowPlayer = false" 
                class="absolute top-[26px] md:top-20 lg:top-[100px] right-[26px] md:right-20 lg:right-[100px] cursor-pointer z-50">
                <img class="h-[24px] w-auto cursor-pointer" :src="require('~/assets/svg/close.svg')"/>
            </div>

            <div class="w-[100%] h-[70%] absolute top-[50%] translate-y-[-50%]">
                <iframe src="https://player.vimeo.com/video/429388049?h=d6ef415a87&autoplay=1&loop=1&color=a83020&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                <script type="application/javascript" defer src="https://player.vimeo.com/api/player.js"></script>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
            isShowPlayer: false,
        }
    }
}
</script>

