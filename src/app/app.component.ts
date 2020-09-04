import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularGallery';
  url='https://www.wikiart.org/en/api/2/MostViewedPaintings?imageFormat=PinterestSmall';
  url2='https://www.wikiart.org/de/api/2/UpdatedArtists';
  lis:any;
  mostPics=[];
  artists=[];
  selectedArtist= "";
  picsByArtist= [];
  constructor(private http:HttpClient){
    this.http.get(this.url).toPromise().then(json=>{
      console.log(json);
      this.lis=json;
      this.mostPics=this.lis.list;
      console.log(this.mostPics);
      
    });

    void getPaintingsByArtist (private http:HttpClient) {
      const api = "https://www.wikiart.org/en/api/2/PaintingsByArtist?id=";
      
      this.http.get(api).toPromise().then(json=>{
        console.log(json);       
          
        });

        
    };
  }
}
