<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="getNotes" />
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'

import { mapGetters } from 'vuex';

export default {
  components: { Form, List },
  props: {
    tag: null
  },
  data() {
    return {
      note: {
        title: '',
        tags: []
      }
    }
  },
  // mounted() {
  //   this.getNotes()
  // },
  computed: {
    ...mapGetters([
      'getNotes'
    ]),
  },
  watch: {
    getNotes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep: true
    }
  },
  methods: {
    // * get / set notes
    getNotes() {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        this.notes = JSON.parse(localNotes)
      }
    },
    // * submit note
    handleSubmit(title, tag) {
      const note = {
        title: title,
        tags: [tag]
      }
      this.getNotes.push(note)
    },
    // * remove note
    handleRemove(index) {
      this.notes.splice(index, 1)
    }
  }
}
</script>
