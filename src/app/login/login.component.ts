import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormControl,  FormGroup,  Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  testForm:FormGroup;
  myemail:boolean=false;
  email="rohith123@gmail.com";
  hide:boolean=true;
  passWord=1234;
  myPassword:boolean=false;
  constructor (
    private router:Router,
    private fb: FormBuilder
  ){
    this.testForm = this.fb.group({
      'emailName': new FormControl('',[
        Validators.required
      ]),
      'password':new FormControl('',[
        Validators.required
      ])

    })
    
  }

  forgot(){
    this.router.navigate(['forgot'])
  }
  nextbtn(){
     console.log(this.testForm.get('emailName')?.value);
    
  if(this.testForm.get('emailName')?.value ==this.email){
    this.myemail=true;

  }
  else{
   this.myemail=false;
   this.testForm.controls['emailName'].setErrors({'incorrect': true});
  }
  }
  navgateto(){
    console.log(this.testForm.get('password')?.value);
    if(this.testForm.get('password')?.value == this.passWord){
      window.open("https://relexhealth.com/");  
    }
    else{
      this.testForm.controls['password'].setErrors({'incorrect': true});
    }
    
    
  }

  ngOnInit(): void {
    
  }

 
  
    matcher = new ErrorStateMatcher();
    country: string[]=[
  "Afrikaans",
  "azərbaycan",
  "English (United Kingdom)",
  "English (United States)",
  "Українська",
  "ქართული",  
  "हिन्दी",
  "অসমীয়া",
  "বাংলা",
  "ਪੰਜਾਬੀ",
  "ગુજરાતી",
  "ଓଡ଼ିଆ",
  "தமிழ்",
  "తెలుగు",
  "ಕನ್ನಡ",
  
    ]
   
  
}
