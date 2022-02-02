<template>
  <section class="home">
    <h1>8 Classic Childrens Book</h1>
    <div class="books-container">
      <router-link
        v-for="book in booksData"
        :key="book.Title"
        to="/..views/AboutSingleBook/:book"
        class="book"
      >
        <h2>{{ book.Title }}</h2>
        <p>{{ book.Author }}</p>
      </router-link>
    </div>
  </section>
</template>

<script>
import books from "../assets/data.js"
export default {
  data() {
    return {
      booksData: [...books],
    }
  },
  name: "Home",
}
</script>
<style scoped>
.books-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
</style>
