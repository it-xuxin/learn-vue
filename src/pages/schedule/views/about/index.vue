<template>
  <h1>About</h1>
</template>

<script>
export default {
    components: {

    },
    data(){

    },
    created(){
        this.search()
    },
    methods: {
        search(){
            this.$http.Home.getHomeList()
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}
</script>
