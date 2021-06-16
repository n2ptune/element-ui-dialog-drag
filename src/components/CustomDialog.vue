<template>
  <el-dialog v-on="listen" v-bind="mergedProps" v-drag-outside>
    <slot />
  </el-dialog>
</template>

<script>
import { Dialog } from 'element-ui'

export default {
  name: 'CustomDialog',
  components: {
    'el-dialog': Dialog
  },
  computed: {
    mergedProps() {
      return {
        ...this.$attrs,
        ...this.$props
      }
    },
    listen() {
      return {
        ...this.$listeners
      }
    }
  }
}
</script>