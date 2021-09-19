import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  array:any=[];
  constructor(private voteService:VoteService, private router:Router) { }

  ngOnInit(): void {
    this.array=[{image:'https://images.news18.com/ibnlive/uploads/2019/04/Lok-Sabha-Elections-2019.jpg',candi:'xxx',party:'yyy'},{image:'https://ichef.bbci.co.uk/news/976/cpsprodpb/40E3/production/_106311661_expander_index-03.jpg',candi:'aaa',party:'bbb'}]
  }

  onVote(image:string,cand:string,party:string){
    this.voteService.putDetails(image,cand,party);
    this.router.navigate(['/get']);

  }

}
