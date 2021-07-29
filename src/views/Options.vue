<template>
  <div class="title-form">Deixe aqui sua sugestão</div>
  <div class="form">
    <form>
      <div class="form-name">
        <label for="name">Nome: </label>
        <input type="text" />
      </div>

      <div class="form-topic">
        <label> Selecione o tópico: </label>
        <select id="topic">
          <option label="Estilo"></option>
          <option label="Funcionalidade"></option>
          <option label="Bug"></option>
          <option label="Outros"></option>
        </select>
      </div>
      <div class="form-text">
        Escreva a sua mensagem:
        <textarea></textarea>
      </div>

      <button @submit="click">Enviar</button>
    </form>
    <div class="r"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    submit() {
      console.warn('enviado');
    },
  },
});
</script>
<style scoped>
.r {
  height: 760px;
}
.title-form {
  padding-top: 20px;
  font-size: 20px;
  color: rgb(194, 16, 16);
  background-color: #b3c4e0;
}
.form {
  background-color: #b3c4e0;
  padding: 20px;
  display: flex;
  justify-content: center;
}
.form-name {
  padding: 10px;
}
.form-topic {
  padding: 10px;
}
.form-text {
  padding: 10px;
  display: flex;
}
select {
  cursor: pointer;
  height: 30px;
  width: 50%;
  border-radius: 25px;
  border: 2px solid #609;
}

input,
textarea {
  border-radius: 25px;
  border: 2px solid #609;
  padding: 5px;
  width: 200px;
  height: 15px;
}
textarea {
  resize: none;
  height: 50px;
}
textarea:focus,
input:focus,
select:focus {
  outline: none;
}
button {
  width: 100px;
  font-size: 15px;
  padding: 10px;
  background-color: #f2f2f2;
  border: 1px solid;
  cursor: pointer;
  border-radius: 14px;
}
button:hover {
  background: rgb(255, 255, 255);
  color: black;
}
</style>
