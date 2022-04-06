<template>
    <client-only>
        <scrollactive
            id="navigation"
            active-class="active" 
            :duration="200"
            :offset="30"
            :alwaysTrack="true"
            :highlightFirstItem="true"
            :scrollOnStart="false"
            :modifyUrl="true"
            @itemchanged="navChange"
            class="fixed flex items-center justify-between lg:justify-center w-screen min-h-[76px] max-w-screen overflow-hidden bg-[#333333] top-0 left-0 px-[26px] md:px-20 lg:px-[100px] z-10"
            :class="{ 'navbar_active' : isActive}">
            
            <div class="image_container">
                <img class="h-[36px] w-auto transition-all cursor-pointer" :src="require('~/assets/svg/logo.svg')"/>
            </div>

            <div class="hamburger flex lg:hidden" @click="isActive = !isActive">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>

            <div class="bg-[#484848] w-[1px] mx-[20px] h-[40px] hidden lg:block"></div>

            <section class="hidden lg:flex items-center nav_links_container">
                <template v-for="(nav, index) in navList">
                    <NuxtLink 
                        :key="index"
                        :to="{ path: '/', hash:'#' + nav.id}" 
                        :data-section-selector="'#' + nav.id"
                        class="scrollactive-item inline-flex items-center h-full font-bold text-sm cursor-pointer text-white">
                        <span @click="isActive = false">{{ nav.label }}</span>
                    </NuxtLink>
                    <div class="bg-[#484848] w-[1px] mx-[20px] h-[36px] hidden lg:block" :key="'divider-' + index"></div>
                </template>

                <button class="rounded-md min-h-[50px] lg:min-h-[36px] px-8 lg:px-5 bg-black text-white items-center text-lg lg:text-[13px] lg:ml-36 hover:bg-[#222222] mt-6 lg:mt-0 transition-colors flex lg:hidden">
                    <img class="h-[16px] lg:h-[14px] w-auto mr-3" :src="require('~/assets/svg/download.svg')"/>
                    Download Board
                </button>
            </section>

            <section class="fixed hidden md:flex flex-col top-[50%] translate-y-[-50%] md:right-[40px] lg:right-[50px] orb_links_container">
                <template v-for="(nav, index) in navList">
                    <NuxtLink 
                        :key="'circle-' + index"
                        :to="{ path: '/', hash:'#' + nav.id}" 
                        :data-section-selector="'#' + nav.id"
                        :class="{ active : activeItem == nav.id }"
                        class="mr-5 md:mr-0 md:mb-5 rounded-full circle_bar transition-all h-[6px] w-[6px] bg-white">
                    </NuxtLink>
                </template>
            </section>

            <button class="rounded-md min-h-[36px] px-5 bg-black text-white items-center text-[13px] ml-36 hover:bg-[#222222] transition-colors hidden lg:flex">
                <img class="h-[14px] w-auto mr-3" :src="require('~/assets/svg/download.svg')"/>
                Download Board
            </button>
        </scrollactive>
    </client-only>
</template>

<script>
export default {
    data() {
        return {
            navList: [
                {
                    id: 'background',
                    label: 'Background & Challenge'
                },
                {
                    id: 'solution',
                    label: 'Solution'
                },
                {
                    id: 'result',
                    label: 'Result & Effectiveness'
                },
                {
                    id: 'slideshow',
                    label: 'Slideshow'
                },
            ],
            activeItem: null,
            isActive: false,
        }
    },
    methods: {
        navChange(event, currentItem, lastActiveItem) {
            if (currentItem) {
                this.activeItem = currentItem.getAttribute('data-section-selector').substring(1);
            }
        }
    },
};
</script>
