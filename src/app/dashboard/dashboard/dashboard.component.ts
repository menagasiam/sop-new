import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MonitorListService } from 'src/app/services/monitor-list.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private monitorListService: MonitorListService) {
  }

  title = 'Dashboard';
  date: Date = new Date();

  totalCompletedRecord: number = 0;
  totalFailedRecord: number = 0;
  totalDuration: number = 0;
  avgResponseTime: number = 0;
  TriggeredRecord: number = 0;

  requestBody = {
    "page_number": 1,
    "count_per_page": 10,
    "filters": {
      "search_name": "",
      "search_key": "",
      "categories": [],
      "status": [""]
    }
  };

  ngOnInit(): void {

    this.getCompletedRecord();
    this.getFailedRecord();
    this.getTriggeredRecord();


  }

  getCompletedRecord() {
    // getting completed record

    this.requestBody.filters.status = ["Completed"];
    return this.monitorListService.getCompletedRecords(this.requestBody).subscribe((totalrecord: any) => {

      this.totalCompletedRecord = totalrecord.pagination.total_counts;
    },
      err => {
        alert(err.error.detail);
      },
    )


  }

  getFailedRecord() {
    // getting failed record
    this.requestBody.filters.status = ["Failed"];
    return this.monitorListService.getCompletedRecords(this.requestBody).subscribe((totalrecord: any) => {
      this.totalFailedRecord = totalrecord.pagination.total_counts;
    },
      err => {
        alert(err.error.detail);
      },
    )

  }

  getTriggeredRecord() {
    // getting triggered record
    this.requestBody.filters.status = [];
    var response = this.monitorListService.getCompletedRecords(this.requestBody).subscribe((totalrecord: any) => {
      this.TriggeredRecord = totalrecord.pagination.total_counts;

      // avg response time
      this.requestBody.count_per_page = this.TriggeredRecord;
      this.requestBody.filters.status = [];
      this.monitorListService.getCompletedRecords(this.requestBody).subscribe((avgResponse: any) => {
        var duration = 0;
        for (let i = 0; i < avgResponse.data.length; i++) {

          var dur = avgResponse.data[i].duration.split(' ')

          duration = duration + parseInt(dur[0]);
        }
        console.log("total duration in sec: " + duration);

        this.avgResponseTime = Math.round(duration / this.TriggeredRecord);
      },
        err => {
          alert(err.error.detail);
        },
      )

    },
      err => {
        alert(err.error.detail);
      },
    )

  }

}
