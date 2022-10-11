

let train=new Vue({
    el:".main",
    data:{
        email:"",
        emessg:"",
        password:"",
        pass:"password",
        passMesg:"",
        repass:"",
        remesg:"",
        emcolor:"black",
        passcolor:"black",
        repasscolor:"black",
    },
    methods:{
        correctEmail(){
            if(!(/\w+\d*\w+@\w+.com/ig).test(this.email)){
                this.emessg="please enter valid email"
                this.emcolor="red"
            }
            else {
                this.emessg="this is valid email"
                this.emcolor="green"
            }
        },
        correctpass(){
            
            if(this.password.length<8){
                this.passMesg="it must be >= 8 charecters";
                this.passcolor="red";
            }
            else {
                this.passMesg="this is valid password"
                this.passcolor="green"
            }
        },
        check(){
            this.pass=this.pass==="password"? "text" :"password";
            
            },
        correctrepass(){
            console.log(this.password);
            console.log(this.repass);
            if(this.repass!==this.password){
                this.remesg="Wrong";
                this.repasscolor="red";
            }
            else {
                this.remesg="Correct"
                this.repasscolor="green"
            }
        }
        }
})