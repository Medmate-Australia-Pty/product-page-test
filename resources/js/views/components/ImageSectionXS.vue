<template>
<div>
    <transition-group name="fade" tag="div">
        <div v-for="i in [currentIndex]" :key="i">
            <div class="position-relative">
                <img class="cropped" :src="currentImg"/>
                <div class="position-absolute top-50 translate-middle-y d-flex justify-content-between w-100 px-3">
                    <!-- TODO - center icon in buttons and move them in from the edge-->
                    <div>
                        <button type="button" class="btn btn-circle btn-light d-flex align-items-center justify-content-center" @click="prev">
                            <img :src="prevIcon">
                        </button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-circle btn-light d-flex align-items-center justify-content-center" @click="next">
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
import nextIcon from '../../../../public/images/icon-next.svg'
import prevIcon from '../../../../public/images/icon-previous.svg'


export default {
    name: 'ImageSectionXS',

    components: {
    },
    
    data() {
        return {
            nextIcon,
            prevIcon,
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
            if (this.$store.state.product.images) {
                return this.$store.state.product.images[Math.abs(this.currentIndex) % this.$store.state.product.images.length];
            } else {
                // should use a placeholder image
                return null
            }
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

.cropped {
    object-fit: cover;
    height: 80vw;
    width: 100%;
}

</style>