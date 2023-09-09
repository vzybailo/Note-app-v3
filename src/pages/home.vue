<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="getNotes" />
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'

import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  components: { Form, List },
  mounted() {
    this.getNotes
  },
  computed: {
    ...mapState(['tag', 'note', 'title', 'notes']),
    ...mapGetters(['getNotes']),
  },
  watch: {
    getNotes: {
      handler(updatedList) {
        localStorage.setItem('getNotes', JSON.stringify(updatedList))
      },
      deep: true
    }
  },
  methods: {
    ...mapMutations(['setNotes']),
    notes() {
      const localNotes = localStorage.getItem('getNotes')
      if (localNotes) {
        this.getNotes = JSON.parse(localNotes)
      }
    },
    handleSubmit(title, tag) {
      this.setNotes({
        title: title,
        tags: [tag]
      })
    },
    handleRemove(index) {
      this.getNotes.splice(index, 1)
    }
  }
}
</script>
