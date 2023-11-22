<template>
<div>
    <transition-group name="fade" tag="div">
        <div v-for="i in [currentIndex]" :key="i">
            <div class="position-relative">
                <img class="" :src="currentImg" />
                <div class="position-absolute top-50 translate-middle-y d-flex justify-content-between w-100">
                    <!-- TODO - center icon in buttons and move them in from the edge-->
                    <div>
                        <button type="button" class="btn btn-circle btn-light" @click="prev">
                            <img :src="prevIcon">
                        </button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-circle btn-light" @click="next">
                            <img :src="nextIcon">
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </transition-group>
</div>
</template>

<script>
import image1 from '../../../../public/images/image-product-1.jpg'
import image2 from '../../../../public/images/image-product-2.jpg'
import image3 from '../../../../public/images/image-product-3.jpg'
import image4 from '../../../../public/images/image-product-4.jpg'
import nextIcon from '../../../../public/images/icon-next.svg'
import prevIcon from '../../../../public/images/icon-previous.svg'


export default {
    name: 'ImageSection',

    components: {
    },
    
    data() {
        return {
            nextIcon,
            prevIcon,
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
.img-responsive {
  width: 100%;
  height: auto;
}

.btn-circle { 
        width: 40px; 
        height: 40px; 
        border-radius: 20px; 
    } 

</style>