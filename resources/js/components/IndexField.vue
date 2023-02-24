<template>
     <span v-viewer class="flex flex-row overflow-x-auto scrolling-touch p-2" style="width: 15rem; height: 10rem">
        <img
            v-for="(img, index) in JSON.parse(field.value)"
            :src="img.url"
            :alt="img.name"
            :key="index"
            :title="img.crc32"
            loading="lazy"
            class="rounded h-10 mr-2 border border-primary"
        >
    </span>
</template>

<script>
export default {
    props: ['resourceName', 'field'],
}
</script>
