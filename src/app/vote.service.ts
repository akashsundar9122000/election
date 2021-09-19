import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class VoteService{

result:any={}
  putDetails(image:string,candi:string,party:string){
    this.result = {image:image,candi:candi,party:party};
  }

  getDetails(){
    return this.result;
  }
}
