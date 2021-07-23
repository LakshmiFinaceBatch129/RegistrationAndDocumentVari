import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OeService } from '../oe.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  id:number;
  constructor(private route:ActivatedRoute, private oeservice:OeService) {
    this.id=this.route.snapshot.params['id'];
    this.oeservice.getoe(this.id).subscribe(oe=>{
      this.oeservice.oe=oe;
      console.log(oe);
      
    })
  }

  ngOnInit() {
  }

}
