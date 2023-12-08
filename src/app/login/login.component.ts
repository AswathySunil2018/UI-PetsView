import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private formBuilder:FormBuilder,private router:Router) { }

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
    
    this.router.navigate(['/userhome']);
  }
  else{
    
  alert("Enter the valid credentials")
  }
  
}
sign(){
this.router.navigate(['/sign']);
}
}
