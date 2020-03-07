let app = new Vue({
    el : "#game-container",
    data : {
        score : 0,
        gameRunning : false,
        player : "",

    },

    methods: {
        gameStarted: function(event){
            this.gameRunning = true;
            let played = event.currentTarget;
            
            

        }
    }
}) 