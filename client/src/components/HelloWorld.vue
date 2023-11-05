<template>
    <div class="background-image">
      <div class="container-fluid">
        <p>แนะนำโดยคุณ พิชัย</p>
        <button v-on:click="navigateTo('/waters')">ดูข้อมูลผู้ใช้</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
.background-image {
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgb(0, 191, 255);
  background-image: url('~@/pic/bg.jpg');
  height: 100vh;
}

.container-fluid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(10, 10, 10);
  text-align: center;
  height: 100%;
  font-size: 45px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>