import { FilterPipe } from '../artistsearch/artistsearch.pipe';
import { Component, OnInit, Pipe } from '@angular/core';
import { ArtistService } from '../artistservice/artistservice.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data1;
  searchString:string;
  names;
  constructor(private artser:ArtistService) {
   }

  ngOnInit():void {
    this.artser.getArtistList().subscribe(data=>this.data1=data);
  }
  nameclicked(name){
    this.names=name;
    let empid:number;
    console.log(this.names.id);
  }

}
