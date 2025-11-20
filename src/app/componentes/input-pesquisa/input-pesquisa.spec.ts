import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPesquisa } from './input-pesquisa';

describe('InputPesquisa', () => {
  let component: InputPesquisa;
  let fixture: ComponentFixture<InputPesquisa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPesquisa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPesquisa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
