var vue = new Vue({
    el: '#app',
    data: {
        result: '',
        numbers: ['1', '2', '3', '4', '5', '6', '7' ,'8', '9', '0', '.'],
        operations: ['+', '-', '/', '*']
    },
    methods:{
        calc: function(){
            this.result = eval(this.result)
        },

        input: function(char) {
            this.result = this.result.toString();
            this.result+=char;
          },
        
        deleteI: function() {
            this.result = '';
        }
    }
});