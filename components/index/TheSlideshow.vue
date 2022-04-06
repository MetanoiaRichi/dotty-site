<template>
    <section 
        id="slideshow" 
        class="min-h-[calc(100vh-76px)] lg:min-h-screen px-[26px] md:px-20 lg:px-[100px] w-screen overflow-hidden py-32 text-white flex flex-col items-center justify-center bg-gradient-to-b from-[#144252] via-[#1f4f65] to-[#1a536e]">

        <client-only>
            <vue-tabs type="pills" centered>
                <v-tab
                    v-for="(item, index) in results" 
                    :key="index"
                    :title="item.title">
                    
                    <div class="flex flex-col lg:flex-row items-center justify-center w-full">
                        <div class="lg:flex-1 w-full lg:w-[unset] lg:max-w-[40%] lg:pr-14 mb-6 md:mb-14 lg:mb-0">
                            <img class="h-auto w-full relative" :src="'https://source.unsplash.com/1280x720/?' + item.title"/>
                        </div>

                        <div class="lg:flex-1 w-full lg:w-[unset] lg:max-w-[40%] lg:pl-14 flex flex-col">
                            <p class="text-sm leading-6 mb-8">{{ item.content }}</p>

                            <button class="h-[50px] px-6 rounded-md flex items-center justify-center py-4 text-base font-medium bg-[#178bc1] text-white w-full md:min-w-[200px] lg:min-w-fit md:w-fit self-center lg:self-start">
                                View Project
                            </button>
                        </div>
                    </div>
                </v-tab>
            </vue-tabs>
        </client-only>
    </section>
</template>

<script>
export default {
    data() {
        return {
            results: [
                {
                    title: 'Video',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    title: 'Photography',
                    content: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
                {
                    title: 'Social',
                    content: 'Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. In dictum non consectetur a erat.'
                },
                {
                    title: 'PR',
                    content: 'Orci eu lobortis elementum nibh. Sed odio morbi quis commodo odio aenean. Ligula ullamcorper malesuada proin libero nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. In pellentesque massa placerat duis ultricies lacus.'
                },
                {
                    title: 'Radio',
                    content: 'Live reads from NOVA presenters reflected the ever-evolving story of Jake in real time, and encouraged people to get involved to shape the story themselves.'
                },
            ]
        }
    }
}
</script>
