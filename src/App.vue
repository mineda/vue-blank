<template>
  <div id="app" class="container">
    <div id="nav" class="row text-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/motos">Motos</router-link> |
      <a v-if="usuario" @click="logout">Logout</a> 
      <router-link v-if="!usuario" to="/login">Login</router-link>
    </div>
    <router-view />
  </div>
</template>