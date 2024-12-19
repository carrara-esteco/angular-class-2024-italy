import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should contain a meaningful title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const nativeElement: Element = fixture.nativeElement;
    const h1Element = nativeElement.querySelector('h1');

    expect(h1Element?.textContent).toEqual('Le mie birre');
    fixture.componentInstance.title = 'Le mie birrozze';

    fixture.detectChanges();

    expect(h1Element?.textContent).toEqual('Le mie birrozze');
  });
});
