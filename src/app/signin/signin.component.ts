import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
signinForm!:FormGroup;
valid!:boolean;
err="";
  constructor(private formBuilder:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.signinForm=this.formBuilder.group({
      name:['',Validators.required],
      address:this.formBuilder.group({
        street:[],
        city:[],
        zip:[],
      }),
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      confmpass:['',Validators.required],
      
    })
  }
  register()
  {
  
    let bodyData = {
      "name" : this.signinForm.controls['name'].value,
      "email" : this.signinForm.controls['email'].value,
      "password" : this.signinForm.controls['password'].value,
    };
    
    if(this.signinForm.get('password')?.value==this.signinForm.get('confmpass')?.value)
    {
   this.http.post("http://localhost:3000/user/signin",bodyData).subscribe(data=>{
    console.log(data);
     alert("Registered Successfully");

   });
  }
  else{
    alert("Password mismatch")
  }
   
  }

}
