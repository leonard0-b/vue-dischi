var app = new Vue({
  el: '#root',
  data: {
    albums: [],
    genres: [],
    selected: "",
    inputSearch: "",
  },
  mounted() {
    this.getAlbums();
  },
  methods: {
    getAlbums: function(){
      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((response) => {
          console.log(response.data.response);
          this.albums = response.data.response;
          // ordinare array in ordine crescente in base all'uscita
          this.albums.sort((a, b) => (a.year - b.year));
          console.log(this.albums);
          // con questo for each scorro l'array dell'API e mi salvo i generi in un nuovo array
          // così da poterli ciclare nell'html
          this.albums.forEach((generi, i) => {
            if (!this.genres.includes(generi.genre)) {
              this.genres.push(generi.genre);
            }
          });
          console.log(this.genres);
        })
      },
    }
});
