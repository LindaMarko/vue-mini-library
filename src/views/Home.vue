<template>
  <section class="home">
    <h1>8 Classic Childrens Book</h1>
    <div class="books-container">
      <article class="book" v-for="book in booksData" :key="book.Title">
        <router-link
          :to="{ name: 'BookDetails', params: { title: book.Title } }"
          class="book"
        >
          <h2>{{ book.Title }}</h2>
          <p>{{ book.Author }}</p>
        </router-link>
      </article>
    </div>
  </section>
</template>

<script>
import books from "../assets/data.js"
export default {
  name: "Home",
  data() {
    return {
      booksData: [...books],
    }
  },
}
</script>
<style scoped>
.home {
  width: 70%;
  margin-top: 4rem;
  display: grid;
  place-items: center;
  padding: 2rem;
  border: 1px solid black;
  background-color: whitesmoke;
}
.books-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
.book {
  width: 10rem;
  height: 12rem;
  background-color: aquamarine;
  margin: 1rem;
}
</style>
