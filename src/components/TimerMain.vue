<template>
    <div class="container">
        <div class="time-select-header" v-if="!gameStart"><h1>Select number of minutes</h1></div>
        <div class="time-select" v-if="!gameStart">
            <div v-on:click="start(1)"  class="time-select-item">1</div>
            <div v-on:click="start(2)" class="time-select-item">2</div>
            <div v-on:click="start(5)" class="time-select-item">5</div>
            <div v-on:click="start(10)" class="time-select-item">10</div>
            <div v-on:click="start(15)" class="time-select-item">15</div>
            <div v-on:click="start(25)" class="time-select-item">25</div>
        </div>
<div v-else>
       <div  v-bind:class="{active: timeA_active}" class="timeBox timeA"  v-on:click="handleClick(timeAName)">
           {{ timeAHumanReadable }}
       </div>
        <div  v-bind:class="{active: timeB_active}" class="timeBox timeB"  v-on:click="handleClick(timeBName)"> {{ timeBHumanReadable }} </div>
    <div class="reset timeBox" v-on:click="reset">Reset</div>
</div>

    </div>
</template>

<script>
    export default {
        name: 'TimerMain',
        data(){
            return {
                firstRun: true,
                timeAVal : 5,
                timeBVal : 5,
                timeAName: 'A',
                timeBName: 'B',
                timeAInterval:null,
                timeBInterval:null,
                timeA_active:false,
                timeB_active:false,
            gameover:false,
            gameStart:false}
        },

        watch:{
            gameover:function(){
                if(this.gameover==true){
                    this.timeB_active=false;
                    this.timeA_active=false;
                }
            },
            timeA_active:function(){

                if (this.timeA_active==true){
                    this.timeAInterval = setInterval(()=>{
                        if (this.timeAVal <=0){

                            this.gameover = true;

                            clearInterval(this.timeAInterval);
                            this.timeAVal=0;
                        }else{
                        this.timeAVal=this.timeAVal-1}
                    },1000);
                }else{
                    clearInterval(this.timeAInterval);
                }

            },
            timeB_active:function(){

                if (this.timeB_active==true){
                    this.timeBInterval = setInterval(()=>{
                        if (this.timeBVal <=0){

                            this.gameover = true;

                            clearInterval(this.timeBInterval);
                            this.timeBVal=0;
                        }else{
                        this.timeBVal=this.timeBVal-1}
                    },1000);
                }else{
                    clearInterval(this.timeBInterval);
                }

            }

        },
        computed:{
            timeAHumanReadable: function(){
                if (this.timeAVal<=0){
                    return "Time up";
                }else{
                    let minutes=Math.floor((this.timeAVal  / 60) % 60);
                    let seconds = Math.floor((this.timeAVal ) % 60);
                    seconds=this.convert_seconds(seconds);
                    let timeString = minutes  +':' + seconds;
                    return timeString;
                }

            },
            timeBHumanReadable: function(){
                if (this.timeBVal<=0){
                    return "Time up";
                }else{
                let minutes=Math.floor((this.timeBVal / 60) % 60);
                let seconds = Math.floor((this.timeBVal ) % 60);
                seconds=this.convert_seconds(seconds);
                let timeString = minutes  +':' + seconds;
                return timeString;}
            }
        },
        methods : {
            start(min){

               let value_in_seconds=min*60;
               this.timeBVal=value_in_seconds;
               this.timeAVal=value_in_seconds;
               this.gameStart=true;

            },
            convert_seconds:function(n){
                return n > 9 ? "" + n: "0" + n ;
            },
            reset:function(){
                clearInterval(this.timeBInterval);
                clearInterval(this.timeAInterval);
                    this.firstRun= true;
                    this.timeAVal = 5;
                    this.timeBVal = 5;
                    this.timeAName= 'A';
                    this.timeBName= 'B';
                    this.timeAInterval=null;
                    this.timeBInterval=null;
                    this.timeA_active=false;
                    this.timeB_active=false;
                    this.gameover=false;
                    this.gameStart=false;

            },


            handleClick:function(e){
if (this.firstRun){
    this.firstRun=false;
    if (e === this.timeAName) {
        this.timeB_active = false;
        this.timeA_active = true;


    } else {
        this.timeA_active = false;
        this.timeB_active = true;
    }

}
else {
    if (e === this.timeAName && this.timeA_active === true && this.gameover !==true) {
        this.timeB_active = true;
        this.timeA_active = false;


    } else if (e === this.timeBName && this.timeB_active === true && this.gameover !==true) {
        this.timeB_active = false;
        this.timeA_active = true;
    }
    else{
        //do nothing
    }
}




            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container{

        width:50%;

        margin-right:auto;
        margin-left:auto;

    }
    h3 {
        margin: 40px 0 0;
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


.timeBox{
    width:200px;
    height:200px;
    background: azure;
    display:flex;
    align-content: center;
    text-align: center;
    justify-content: center;flex-direction: column;
    margin-left:auto;
    margin-right:auto;
}


    .time-select-item{
        width:200px;
        height:200px;
        background: rgb(3,4,94);
display: flex;
        align-content: center;
        text-align: center;
        justify-content: center;
        flex-direction: column;
        color:white;

    }
    .time-select-item:hover{
        background:azure;
        color:black;
    }
    .time-select{
         display:flex;
         flex-direction:row;

        align-content: center;
        text-align: center;
        justify-content: center;

        color: rgb(3,4,94);

     }
    .time-select{
        display:flex;
        flex-direction:row;


    }
    .reset{
        width:50px;
        height:50px;
        border-radius:50%;
        background:rgb(247,127,0);
        display: flex;
        align-content: center;
        text-align: center;
        justify-content: center;
        flex-direction: column;
        color:white;
        margin-top:40px;
    }
    .active{
        background:rgb(3,4,94);
        color:white;
    }
</style>
