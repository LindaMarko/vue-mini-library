<template>
  <section class="book-details">
    <div class="book-cover">
      <h2>{{ bookDetails.Title }}</h2>
      <p>{{ bookDetails.Author }}</p>
    </div>
    <div class="details">
      <h2>{{ bookDetails.Title }}</h2>
      <p>{{ bookDetails.Author }}</p>
      <p>{{ bookDetails.Plot }}</p>
      <div class="publish-info">
        <p>Audience: {{ bookDetails.Audience }}</p>
        <p>First published: {{ bookDetails.Year }}</p>
        <p>Pages: {{ bookDetails.Pages }}</p>
        <p>Publisher: {{ bookDetails.Publisher }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import books from "../assets/data.js"
export default {
  data() {
    return {
      booksData: [...books],
      bookTitle: this.$route.params.title,
    }
  },
  computed: {
    bookDetails() {
      return this.booksData.find((book) => book.Title === this.bookTitle)
    },
  },
}
</script>

<style scoped>
.book-details {
  width: 70%;
  margin-top: 4rem;
  display: grid;
  place-items: center;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.book-cover {
  width: 13rem;
  height: 15rem;
  background-color: aquamarine;
  margin: 1rem;
}
.details {
  color: whitesmoke;
}
</style>
