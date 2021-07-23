import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OeService } from '../Oe.service';

@Component({
  selector: 'app-oeviewcustomerdetatails',
  templateUrl: './oeviewcustomerdetatails.component.html',
  styleUrls: ['./oeviewcustomerdetatails.component.scss']
})
export class OeViewcustomerdetatailsComponent implements OnInit {

  constructor(private oes:OeService) { }
  customers:any[]
  ngOnInit() {
  }
  
  

}
