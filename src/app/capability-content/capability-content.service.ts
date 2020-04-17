import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapabilityContentService {

  constructor() { }

  loaded = [];

  load(url: string): Promise<void> {
    if (this.loaded.includes(url)) return;
    this.loaded.push(url);

    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
  }
}