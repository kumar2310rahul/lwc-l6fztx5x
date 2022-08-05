import { LightningElement } from "lwc";

export default class App extends LightningElement {
   firstname;
    lastname;
    fullname;
    firstnamehandler(event){
       this.firstname=event.target.value;
    }
    lastnamehandler(event){
        this.lastname=event.target.value;
    }
    buttonhandler(event){
        this.fullname=this.firstname+' '+this.lastname;
    }
}
