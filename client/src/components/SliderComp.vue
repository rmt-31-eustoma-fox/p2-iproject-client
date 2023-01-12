<script>
import { mapState } from 'pinia'
import CardVue from './Card.vue'
import { useMainStore } from '../stores/main'
import { Pagination, Autoplay, Navigation,EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import GenresFormatterVue from '../components/GenresFormatter.vue'

export default {
    components: {
        Swiper,
        SwiperSlide,
        CardVue,
        GenresFormatterVue
    },
    data() {
        return {
            modules: [Pagination,Autoplay,Navigation,EffectCoverflow]
        }
    },
    props: ["moviesChecker", "type"],
    computed: {
        ...mapState(useMainStore, ["formatDate"])
    }
}
</script>

<template>
    <div>
        <swiper
            v-if="type === 'main'"
            class="swiper"
            :modules="modules"
            :space-between="300"
            slides-per-view="1"
            :autoplay="{delay:5000, disableOnInteraction:false}"
            :loop="true"
            :centered-slides="true"
            navigation
            :effect="'coverflow'"
            :grab-cursor="true"
            :coverflow-effect="{
                rotate: 0,
                stretch: 0,
                depth: 120,
                modifier: 3,
                slideShadows: true
            }"
        >
            <swiper-slide v-for="item in moviesChecker" :key="item._id" class="slide overflow-hidden w-full">
                <div class="h-[85vh] bg-right bg-contain bg-no-repeat bg-blend-lighten" :style="{'background-image': `url(${item.image}),linear-gradient(to right,#243a60 60%,transparent)`}">
                    <div class="grid grid-cols-5 grid-rows-5 h-full py-16 pl-12 text-white gap-y-8">
                        <h2 class="text-4xl col-start-1 col-end-4 row-start-1 row-end-2">{{ item.title }}</h2>
                        <p class="self-center text-base break-words col-start-1 col-end-3 row-start-2 row-end-3">
                            <GenresFormatterVue :genres="item.genres"/>
                        </p>
                        <!-- <p class="text-lg col-start-1 col-end-2 row-start-2 row-end-4">{{ formatGenre(item.genres) }} </p> -->
                        <div class="self-center font-semibold flex space-x-10 text-lg col-start-3 col-end-4 row-start-2 row-end-3">
                            <p>{{ formatDate(item.releaseDate) }}</p><p>{{ item.certification }}</p>
                        </div>
                        <!-- <p class="text-lg col-start-3 col-end-4 row-start-2 row-end-3">{{ item.certification }}</p> -->
                        <p class="leading-relaxed col-start-1 col-end-4 row-start-3 row-end-6">{{ item.overview }}</p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>

        <swiper
                v-if="type === 'submain'"
                class="swiper"
                :modules="modules"
                :autoplay="{delay:15000, disableOnInteraction:false}"
                :space-between="30"
                slides-per-view="5"
                :loop="true"
                navigation
            >
            <swiper-slide v-for="item in moviesChecker" :key="item.id">
                <CardVue :item="item"/>
            </swiper-slide>
            </swiper>
    </div>
</template>