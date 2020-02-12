import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TextHightlightService } from './text-hightlight.service';

describe('TextHightlightService', () => {
  let service: TextHightlightService;
  
  beforeEach(() => { 
    TestBed.configureTestingModule({
      providers: [TextHightlightService]
    })
    
    service = TestBed.get(TextHightlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set hightlight and set class when match', fakeAsync(() => {
    let receivedMessage = 'Oi, bom dia, Tudo bem?';
    let expectMessage = '<mark class="text-hightlight">O</mark>i, b<mark class="text-hightlight">o</mark>m dia, Tud<mark class="text-hightlight">o</mark> bem?';

    let message = service.hightlightText(receivedMessage, 'o');

    tick(Infinity);

    expect(message).toEqual(expectMessage);
  }));
});

