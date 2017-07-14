import { Injectable } from '@angular/core';

import { Cat } from './cat';
import { CATS } from './mock-cat';

@Injectable()
export class CatService {
  getCats(): Promise<Cat[]> {
    return Promise.resolve(CATS);
  }
}