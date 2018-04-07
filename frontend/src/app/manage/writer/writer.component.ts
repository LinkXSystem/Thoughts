import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss'],
})
export class WriterComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  store(data: any) {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    this.http.post('/storage/article', {}).subscribe(
      val => {
        console.log('====================================');
        console.log(val);
        console.log('====================================');
      },
      res => {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
      },
      () => {
        console.log('====================================');
        console.log('====================================');
      },
    );
  }
}
