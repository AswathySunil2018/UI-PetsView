import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup;
submitted!:boolean;
flag=0;
str="";
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
this.loginForm=this.formBuilder.group({
  username:['', [Validators.required,Validators.email]],
  password:['',Validators.required]
})
  }
login(user:string,password:String ){
  if(user=="aswathy@infosys.com" && password=='Sunil'){
this.flag=1;
  }
  if(this.flag==1){
    
    this.str="success";
  }
  else{
    
    this.str="failed";
  }
}
}
