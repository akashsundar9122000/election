import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
result:any={}
  constructor(private voterService:VoteService) { }

  ngOnInit(): void {
    this.result=this.voterService.getDetails();
    console.log(this.result);
  }

}
