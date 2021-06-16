<template>
  <div>
    <button @click="handleModal">Handle modal</button>
    <el-dialog
      :visible.sync="visibleModal"
      :before-close="beforeClose"
      top="15vh"
      custom-class="dialog-class"
    >
      <div>Hello WOrld</div>
      <button @click="onConfirm">confirm</button>
    </el-dialog>
    <button @click="() => (visibleModal2 = !visibleModal2)">
      Handle Modal2
    </button>
    <el-dialog :visible.sync="visibleModal2">
      <div>Hello WOrld</div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    visibleModal: false,
    visibleModal2: false,
  }),
  methods: {
    handleModal() {
      this.visibleModal = !this.visibleModal;
    },
    onConfirm() {
      this.$confirm("Hello World?", {
        confirmButtonText: "예",
        cancelButtonText: "아니오",
      })
        .then(() => {
          this.visibleModal = false;
        })
        .catch(() => console.log("hello"));
    },
    beforeClose(done) {
      this.$confirm("Hello World?", {
        confirmButtonText: "예",
        cancelButtonText: "아니오",
      })
        .then(() => {
          this.visibleModal = false;
        })
        .catch(() => console.log("hello"));
    },
  },
};
</script>

<style>
.dialog-class {
  height: 700px;
}
</style>