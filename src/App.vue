<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link> |
      <router-link to="/avgle-category">Avgle 影片列表</router-link> |
      <router-link to="/avgle-search">Avgle 影片搜尋</router-link> |
      <router-link to="/foreclosure-search">法拍搜尋</router-link> |
      <router-link to="/hotvideo-search">熱門影片</router-link> 
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
