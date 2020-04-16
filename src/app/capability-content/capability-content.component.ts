import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-capability-content',
  templateUrl: './capability-content.component.html',
  styleUrls: ['./capability-content.component.scss']
})
export class CapabilityContentComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log(data)
      // Load the app
      const script = document.createElement('script');
      script.src = data.url;
      document.body.appendChild(script);

      // Create the custom element
      const element = document.createElement(data.element);
      const content = document.getElementById('content');
      content.appendChild(element);
    });
  }

}
