var app = new Vue({
  el: '#root',
  data: {
    albums: [],
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
        })
      },
    }
});
