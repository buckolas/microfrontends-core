import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapabilityContentService } from './capability-content.service';

@Component({
  selector: 'app-capability-content',
  templateUrl: './capability-content.component.html',
  styleUrls: ['./capability-content.component.scss']
})
export class CapabilityContentComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private contentService: CapabilityContentService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      // TODO this is quick and dirty. instead, convert the following to a promise or use async/await

      // Load the app
      this.contentService.load(data.url);

      setTimeout(() => {
        // Create the custom element
        const element = document.createElement(data.element);
        const content = document.getElementById('content');
        content.innerHTML = '';
        content.appendChild(element);
      }, 2000);
    });
  }

}
