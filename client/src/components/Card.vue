<script>
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '../stores/main';
import GenresFormatter from './GenresFormatter.vue';

export default {
    components: {
        GenresFormatter
    },
    props: ["item"],
    methods: {
        ...mapActions(useMainStore,["changePage","addWatchList"]),
        addList() {
            this.addWatchList(this.item._id);
        }
    },
    computed: {
        ...mapState(useMainStore,["formatDate","backgroundColorGenres","formatGenresBackground"]),
        formatDesc() {
            const spliter = this.item.overview.split(" ");
            if(spliter.length > 15) {
                return spliter.slice(0,15).join(" ") + "...";
            }
        },
        formatTagline() {
            const spliter = this.item.overview.split(" ");
            if(spliter.length > 7) {
                return spliter.slice(0,7).join(" ") + "...";
            }
        },
        formatGenre() {
            return this.item.genres.slice(0,3);
        }
    }
}
</script>

<!-- linear-gradient(to top, rgba(109, 127, 156, 0.95) 35%, rgba(109, 127, 156, 0.7) 45%, transparent) -->

<template>
    <div class="group overflow-hidden relative" @click="changePage(`/movie/${this.item._id}`)">
    <div class="absolute top-2 right-2 z-50 cursor-pointer" @click.stop="addList">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
        </svg>
    </div>
    <div class="relative pt-1 h-96 bg-cover rounded-md transition-all duration-500 group-hover:brightness-75" :style="{'background-image': `url('${item.image}')`}">
    </div>
    <div class="absolute top-0 left-0 grid-cols-6 grid-rows-6 h-1/2 transition-all duration-500 mt-[82%] gap-y-10 grid opacity-0 group-hover:opacity-100 px-1" style="background-image: linear-gradient(to top, rgba(109, 127, 156, 0.95) 40%, rgba(109, 127, 156, 0.7) 50%, transparent);">
        <h2 class="col-span-full row-start-1 row-end-2 leading-4">{{ item.title }}</h2>
        <p class="text-sm italic col-span-full row-start-2 row-end-3">{{ formatTagline }}</p>
        <p class="text-xs col-span-full row-start-3 row-end-4">{{ formatDesc }}</p>
        <div class="flex flex-col row-start-5 row-end-6 col-span-full space-y-1">
            <div class="flex space-x-3 text-xs items-center -mt-4">
                <div class="flex items-center">
                    <div v-for="n in 5" :key="n">
                        <svg v-if="n <= item.rating" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>          
                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>          
                    </div>
                    <p class="ml-0.5">{{ item.ratingQuantity }}</p>
                </div>
                <p class="font-semibold">{{ formatDate(item.releaseDate) }}</p>
                <p class="font-semibold">{{ item.certification }}</p>
            </div>
            <div class="text-xs">
                <GenresFormatter :genres="item.genres" />
            </div>
        </div>
    </div>
</div>
</template>

<!-- <div class="grid-cols-6 grid-rows-6 h-1/2 mt-[80%] gap-y-10 hidden hover:grid" style="background-image: linear-gradient(to top, rgba(109, 127, 156, 0.95) 25%, rgba(109, 127, 156, 0.7) 40%, transparent);">
    <h2 class="col-span-full row-start-1 row-end-2 leading-4">{{ item.title }}</h2>
    <p class="text-sm italic col-span-full row-start-2 row-end-3">{{ formatTagline }}</p>
    <p class="text-xs col-span-full row-start-3 row-end-4">{{ formatDesc }}</p>
    <div class="flex flex-col row-start-5 row-end-6 col-span-full space-y-1">
        <div class="flex space-x-3 text-xs items-center -mt-1.5">
            <div class="flex items-center">
                <div v-for="n in 5" :key="n">
                    <svg v-if="n <= item.rating" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>          
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>          
                </div>
                <p class="ml-0.5">{{ item.ratingQuantity }}</p>
            </div>
            <p>{{ formatDate(item.releaseDate) }}</p>
            <p>{{ item.certification }}</p>
        </div>
        <div class="text-xs space-x-1">
            <span v-for="(val,key,idx) in formatGenresBackground(formatGenre)" :key="idx" :class="val" class="inline-block p-1 rounded">
                {{ key }}
            </span>
        </div>
    </div>
</div> -->