import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownLink } from './dropdown-link';

describe('DropdownLink', () => {
  let component: DropdownLink;
  let fixture: ComponentFixture<DropdownLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
