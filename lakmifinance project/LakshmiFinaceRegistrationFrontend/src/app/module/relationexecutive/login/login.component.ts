import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReService } from '../re.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  id:number;
  constructor(private route:ActivatedRoute, private reservice:ReService) {
    this.id=this.route.snapshot.params['id'];
    this.reservice.getre(this.id).subscribe(re=>{
      this.reservice.re=re;
      
    })

   }

  ngOnInit() {
  }

}
