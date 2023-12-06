import { TestBed } from '@angular/core/testing';

import { ChatboxsService } from './chatboxs.service';

describe('ChatboxsService', () => {
  let service: ChatboxsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatboxsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
