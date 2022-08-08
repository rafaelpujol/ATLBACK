import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HelpService {
  constructor() {}

  public  toQueryString(query): string {
    const parts = [] as any[];
    for (const q in query) {
      const value = query[q];
      if (value !== null && value !== undefined) {
        parts.push(encodeURIComponent(q) + '=' + encodeURIComponent(value));
      }
    }

    return parts.join('&');
  }
}
