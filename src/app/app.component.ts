import { Component } from '@angular/core';
import { NewsAPIService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  mArticles:Array<any>;
  mSources:Array<any>;

  constructor(private NewsService:NewsAPIService){
  }

  ngOnInit(){

    this.NewsService.GetAllSources().subscribe(data=> {
      this.mSources = data["sources"];
      console.log(this.mSources);
    });
    
    this.NewsService.GetAllNews().subscribe(data => {
      this.mArticles = data["articles"]
      console.log(this.mArticles);  
    });
  
  }

  GetArticlesBySourceURL(url){
    return this.NewsService.GetArticlesBySourceURL(url).subscribe(data => {
      this.mArticles = data["articles"];
      console.log(this.mArticles);
    })
  }



}
