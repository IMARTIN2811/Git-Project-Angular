import { TestBed } from '@angular/core/testing';

import { ArchivosJSService } from './archivos-js.service';

describe('ArchivosJSService', () => {
  let service: ArchivosJSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchivosJSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
