 <template>
  <div id="app">
   
    <h1>AluraPic</h1>   <!-- interpolação, é um tipo de databind - associação de dados, unidirecional -->
    
      <img src="https://d1466nnw0ex81e.cloudfront.net/n_iv/600/3640310.jpg"/>
 </div>
</template>

<script>
export default {
  name: 'app', 
  

  data () {     // sempre precisa retoranr um objeto javascript
  let pessoa = {
  nome: ['Bob', 'Smith'],
  idade: 32,
  sexo: 'masculino',
  interesses: ['música', 'esquiar'],
  bio: function() {
    alert(this.nome[0] + ' ' + this.nome[1] + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
  },
  saudacao: function() {
    alert('Oi! Eu sou ' + this.nome[0] + '.');
  }
};
    return {
      
      msg: pessoa
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
