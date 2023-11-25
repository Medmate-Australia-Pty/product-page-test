<template>
<div>
    <img class="cropped mb-4" :src="currentImg"/>
    <div class="row">
        <div v-for="(image, index) in this.$store.state.product.images" class="col d-flex justify-content-center" key="index">
            <a class="image-anchor" :class="{'selected-image-anchor': currentIndex == index}" @click="selectImage(index)">
                <img class="image" :class="{'selected-image': currentIndex == index}" :src="image"/>
            </a>
        </div>
    </div>
</div>
</template>

<script>
import nextIcon from '../../../../public/images/icon-next.svg'
import prevIcon from '../../../../public/images/icon-previous.svg'

export default {
    name: 'ImageSectionMD',

    components: {
    },
    
    data() {
        return {
            currentIndex: 0,
            images: [
                {isactive: false},
                {isactive: true},
                {isactive: false},
                {isactive: false},
            ]
        };
    },

    mounted: function() {
    },

    methods: {
        selectImage(selection) {
            this.currentIndex = selection;
        },
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
    height: auto;
    width: 100%;
    border-radius: 10px;
}

.image {
    object-fit: cover;
    height: auto;
    width: 60px;
    border-radius: 5px;
}

.selected-image {
    opacity: 0.2;
}

.image-anchor {
    cursor: pointer;
    border: 0px;
    border-radius: 7px;
}

.selected-image-anchor {
    border: 2px solid hsl(26, 100%, 55%);
}

</style>