<template>
    <div class="main">
      <div>
        <div class="dropzone-container bg-primary-50 flex flex-col items-center justify-center text-center" @dragover="dragover" @dragleave="dragleave" @drop="drop">
          <input
            type="file"
            multiple
            name="file"
            id="fileInput"
            class="hidden-input"
            @change="onChange"
            ref="file"
            accept=".csv,.xlsx,.txt"
          />
  
          <label for="fileInput" class="file-label mb-0 flex flex-col items-center">
            <icon icon="ph:upload-simple-fill" class="text-[20px] text-primary-500"/>
            <div v-if="isDragging">Release to drop files here.</div>
            <div v-else class="text-[14px] text-primary-500 font-medium mb-0">Upload Image</div>
           
          </label>
        </div>
        <!-- <div class="flex justify-between my-3">
          <span class="text-[13.4px] text-neutral-700">Maximum of 20mb</span>
          <span class="text-[13.4px] text-neutral-700 underline cursor-pointer">Download Sample</span>
        </div> -->
  
      </div>
      <div>
          
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDragging: false,
        files: []
      }
    },
    methods: {
      onChange() {
        this.files.push(...this.$refs.file.files)
        this.$emit('uploadImage', this.files)
      },
  
      dragover(e) {
        e.preventDefault()
        this.isDragging = true
      },
  
      dragleave() {
        this.isDragging = false
      },
  
      drop(e) {
        e.preventDefault()
        this.$refs.file.files = e.dataTransfer.files
        this.onChange()
        this.isDragging = false
      }
    }
  }
  </script>
  <style scoped>
  /* .main {
    display: flex;
    flex-grow: 1;
    align-items: center;
    height: 100vh;
    justify-content: center;
    text-align: center;
  } */
  
  .dropzone-container {
    height: 100px;
    border-radius: 10px;
    width: 100%;
    background: var(---neutral-100);
    border: 1px dashed var(---neutral-600);
      /* border-style: ; */
  }
  
  .hidden-input {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
  }
  
  .file-label {
    font-size: 20px;
    display: block;
    cursor: pointer;
  }
  
  .preview-container {
    display: flex;
    margin-top: 2rem;
  }
  
  .preview-card {
    display: flex;
    border: 1px solid #a2a2a2;
    padding: 5px;
    margin-left: 5px;
  }
  
  .preview-img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #a2a2a2;
    background-color: #a2a2a2;
  }
  </style>
  