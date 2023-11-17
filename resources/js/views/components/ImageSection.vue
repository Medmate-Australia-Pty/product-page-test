<template>
    <div>
        <transition-group name="fade" tag="div">
            <div v-for="i in [currentIndex]" :key="i">
                <img :src="currentImg" />
            </div>
        </transition-group>
        <a class="prev" @click="prev" href="#">&#10094; Previous</a>
        <a class="next" @click="next" href="#">&#10095; Next</a>
    </div>
</template>

<script>
    import image1 from '../../../../public/images/image-product-1.jpg'
    import image2 from '../../../../public/images/image-product-2.jpg'
    import image3 from '../../../../public/images/image-product-3.jpg'
    import image4 from '../../../../public/images/image-product-4.jpg'


    export default {
        name: 'ImageSection',
        
        data() {
            return {
                // images: [
                // "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
                // "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
                // "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
                // "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
                // ],
                images: [
                    image1,
                    image2,
                    image3,
                    image4
                ],
                currentIndex: 0
            };
        },

        mounted: function() {
        },

        methods: {
            next: function() {
                this.currentIndex += 1;
            },
            prev: function() {
                this.currentIndex -= 1;
            }
        },

        computed: {
            currentImg: function() {
                return this.images[Math.abs(this.currentIndex) % this.images.length];
            }
        }
    }
</script>

<style scoped>
</style>