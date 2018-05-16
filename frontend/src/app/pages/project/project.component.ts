import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/get.service';
import { HttpClient } from '@angular/common/http';
// import { User } from '../../redux/auth/auth.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  user = {};

  info = {};

  list = [];

  gridStyle = {
    width: '100%',
  };

  constructor(private client: HttpClient, private service: GetService) {}

  ngOnInit() {
    this.service.resume().subscribe(res => {
      this.user = res.data;
    });

    this.service.account().subscribe(res => {
      const { data } = res.data;
      const obj = JSON.parse(data);

      this.info = obj;

      this.client
        .get(`https://api.github.com/users/${obj.login}/repos`)
        .subscribe((res: any[]) => {
          this.list = res;
        });
    });
  }
}
