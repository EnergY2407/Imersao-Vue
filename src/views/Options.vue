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
        <label > Escreva sua mensagem: </label>

        <textarea></textarea>
      </div>

      <button onclick="alert('Enviado')">Enviar</button>
    </form>
    <div class="fix"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
<style scoped>
label {
  align-content: center;
  font-size: 20px;
}
.fix{
    height: 720px;
}
.title-form {
  color: purple;
  background-color: #b3c4e0;
  padding: 15px;
  font-size: 30px;
}
.form {
  padding: 15px;
  display: flex;
  justify-content: center;
  background-color: #b3c4e0;
}
.form-name {
  padding: 10px;
  margin-bottom: 20px;
}
.form-topic {
  padding: 10px;
  margin-bottom: 20px;
}
.form-text {
  padding: 10px;
  margin-bottom: 20px;
}
input {
  border-radius: 25px;
  border: 1px solid purple;
  padding: 15px;
  width: 200px;
  height: 10px;
  margin-left: 10px;
  outline: none;
}

select {
  border-radius: 25px;
  padding: 10px;
  width: 200px;
  cursor: pointer;
  height: 40px;
  outline: none;
  border: 1px solid purple;
}
textarea {
  border-radius: 25px;
  border: 1px solid purple;
  padding: 20px;
  width: 200px;
  height: 15px;
  outline: none;
  resize: none;
  margin-left: 10px;
}
button {
  cursor: pointer;
  border-radius: 15px;
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  font-size: 16px;
  transition-duration: 1s;
}
button:hover {
  background-color: purple;
  transition-duration: 1s;
}
</style>
