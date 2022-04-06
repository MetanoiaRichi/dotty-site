<template>
	<div id="whitsundays_index" class="relative overflow-hidden w-screen">
        <div class="pt-[76px] lg:pt-0">
            <IndexTheBackground/>
            <IndexTheSolution/>
            <IndexTheResult/>
            <IndexTheSlideshow/>
        </div>

        <div class="absolute top-0 left-0 w-screen h-full flex flex-col items-center overflow-hidden z-[-1]">
            <img class="h-auto w-full hidden lg:block mb-[-1px]" :src="require('~/assets/webp/bg-wide.webp')"/>
            <img class="h-auto w-[140%] max-w-none lg:hidden object-cover mb-[-1px]" :src="require('~/assets/webp/bg-long.webp')"/>
            <div class="h-full w-full bg-gradient-to-b from-[#0c353d] via-[#125679] to-[#13aaf0]"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
};
</script>
