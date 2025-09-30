import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAdmin } from './project-admin';

describe('ProjectAdmin', () => {
  let component: ProjectAdmin;
  let fixture: ComponentFixture<ProjectAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
