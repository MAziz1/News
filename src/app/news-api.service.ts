import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsAPIService {

  constructor(private _http: HttpClient) { }
  APIKey:string = "fc74ac5a27474f36adb9ef47682350f2";

  GetAllNews() {
    return this._http.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=" + this.APIKey);
  }

  GetAllSources(){
    return this._http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.APIKey);
  }

  GetArticlesBySourceURL(_url:string)
  {
    return this._http.get("https://newsapi.org/v2/top-headlines?sources=" + _url + "&apiKey=" + this.APIKey);
  }

}
