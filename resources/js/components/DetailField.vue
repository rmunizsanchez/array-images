<template>
    <panel-item :field="field">
        <div v-viewer slot="value" class="flex flex-row overflow-x-auto py-2">
          <div v-for="img in JSON.parse(field.value)">
            <div class="flex flex-col">
              <img
                  :src="img.url"
                  :alt="img.name"
                  style="height: 8rem; width: auto;"
                  class="rounded shadow-md mr-2"
                  loading="lazy"
              >
              <div class="text-center p-1 pt-2" title="CRC32">{{ img.crc32 }}</div>
            </div>

          </div>
        </div>
    </panel-item>
</template>

<script>
export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],
}
</script>
