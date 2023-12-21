import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient ,HttpParams} from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
loginForm!:FormGroup;
submitted!:boolean;
flag=0;
str="ed";
data=true
  constructor(private formBuilder:FormBuilder,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
this.loginForm=this.formBuilder.group({
  username:['', [Validators.required,Validators.email]],
  password:['',Validators.required]
})
  }
login(user:string,password:String ){
  let param=new HttpParams().set('name',user);
 this.http.get<[]>("http://localhost:3000/user/login",{params:param}).subscribe(res=>{
console.log(res);
for(let i of res){
 if(i['email']==user&&i['password']==password){
  this.data=false
  this.router.navigate(['/userhome',this.loginForm.get('username')?.value]);
  break;
 } 
}
if(this.data){
  alert("Invalid user")
}

 })
 
}
sign(){
this.router.navigate(['/sign']);
}
}
