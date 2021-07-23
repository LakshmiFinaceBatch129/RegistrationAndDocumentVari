import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './loginservice.service';
declare var $ :any;

export interface user {
  id:null,
  username: string;
  password: string;
  role: string;
  email: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  u: user = {
    id:null,
    username: "",
    password: "",
    role: "",
    email: ""
  };
  user: user = {
    id:null,
    username: "",
    password: "",
    role: "",
    email: ""
  };
  constructor(private router: Router, private loginservice:LoginService) {}
  username: string='';
  password:string='';
  ngOnInit() {}
  login(u) {
    console.log("login called");
    console.log(u.username,u.password);
    // if (u.username === "oe" && u.password === "oe") {
    //   console.log("in oe");
    //   sessionStorage.setItem("role", "oe");
    //   this.router.navigateByUrl("role/oe/oedashboard");
    // }
    // if (u.username === "re" && u.password === "re") {
    //   console.log("in re");
    //   sessionStorage.setItem("role", "re");
    //   this.router.navigateByUrl("role/re/redashboard");
    // }
    // if (u.username === "bm" && u.password === "bm") {
    //   console.log("in bm");
    //   sessionStorage.setItem("role", "bm");
    //   this.router.navigateByUrl("role/bm/bmdashboard");
    // }
    // if (u.username === "cm" && u.password === "cm") {
    //   console.log("in cm");
    //   sessionStorage.setItem("role", "cm");
    //   this.router.navigateByUrl("role/cm/cmdashboard");
    // }
    // if (u.username === "ah" && u.password === "ah") {
    //   console.log("in ah");
    //   sessionStorage.setItem("role", "ah");
    //   this.router.navigateByUrl("role/ah/ahdashboard");
    // }
    this.loginservice.getuser(u.username, u.password).subscribe(user=>{
      this.user=user
      console.log(user);
      if (this.user.role==='admin') {
        console.log('in admin');
        sessionStorage.setItem('role', 'admin');
        this.router.navigateByUrl("role/admin/adminbash");
      }
      // else if (u.role==='') {
      //   console.log('in admin');
      //   sessionStorage.setItem('role', 'emp');
      //   this.router.navigateByUrl("role/emp/empdash");
      // }
      // else if (u.username === 'ivn' && u.password === 'ivn') {
      //   console.log('in admin');
      //   sessionStorage.setItem('role', 'inventory');
      //   this.router.navigateByUrl("role/inventory/stock");
      // }
      else if (this.user.role==='oe') {
        console.log('in admin');
        sessionStorage.setItem('role', 'operationalexecutive');
        this.router.navigateByUrl("role/operationalexecutive/oelogin/"+this.user.id);
      }
      else if (this.user.role==='re') {
        console.log('in re');
        sessionStorage.setItem('role', 'relationexcutive');
        this.router.navigateByUrl("role/relationexcutive/relogin/"+this.user.id);
      }
      else if (this.user.role==='cm') {
        console.log('in re');
        sessionStorage.setItem('role', 'relationexcutive');
        this.router.navigateByUrl("role/relationexcutive/relogin/"+this.user.id);
      }
      else {
        alert("invalis credentials");
      
       }
      
    })
  
  }
  
  signup(u) {
    console.log("signup");
  }

  
}
