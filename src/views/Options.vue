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

      <button>Enviar</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
<style scoped>
.title-form {
  margin-top: 20px;
  color: red;
}
.form {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.form-name {
  padding: 10px;
}
.form-topic {
  padding: 10px;
}
.form-text{
  padding: 10px;
  display: flex;
}
button{
  width: 100px;
  font-size: 15px;
  border-radius: 2px;
  padding: 10px;
  background-color: #f2f2f2;
  border: 1px solid;
  cursor: pointer;
}

</style>
