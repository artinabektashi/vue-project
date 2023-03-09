<template>
    <VueDropzone
      id="dropzone"
      ref="filerDropzone"
      :options="dropzoneOptions"
      :useCustomSlot="true"
      @vdropzone-mount="handleMount"
      class="dz-max-files-reached"
    >
    </VueDropzone>
  </template>
  
  <script>
  import VueDropzone from "vue2-dropzone";  
  export default {
    components: {
      VueDropzone,
    },
    props: {
      vueshopId: String,
    },
    data() {
      return {
        dropzoneOptions: {
          url: `http://localhost:4000/vueshop/${this.vueshopId}`,
          thumbnailWidth: 180,
        },
      };
    },
    methods: {
      async handleMount() {
        if (initialFiles || initialFiles.length === 0) {
          return;
        }
  
        const documentFiles = await apiRequest.getFilesDetails(this.initialFiles);
  
        documentFiles.forEach(({ fileDetails}) => {
          this.$refs.filesDropzone.manuallyAddFile(
            fileDetails,
            `http://localhost:4000/${fileUrl}`
          );
        });
      },
    },
  };
  </script>

  