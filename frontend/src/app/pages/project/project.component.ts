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

  list = [];

  gridStyle = {
    width: '50%',
  };

  constructor(private client: HttpClient, private service: GetService) {}

  ngOnInit() {
    this.service.resume().subscribe(res => {
      this.user = res.data;
    });

    this.client
      .get(`https://api.github.com/users/LinkXSystem/repos`)
      .subscribe((res: any[]) => {
        this.list = res;
      });
  }
}
