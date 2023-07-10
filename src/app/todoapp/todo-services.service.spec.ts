import { TestBed } from '@angular/core/testing';
import { TodoServices } from './todo-services.service';


describe('TodoServicesService', () => {
  let service: TodoServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Lista no vacia',() =>{
    expect(service.taskArray).toBeTruthy();
  });

  it('Cambia el campo isComplete a false',() =>{
    expect(service.onCheckService(0)).toBeFalsy();
  });

  it('Borra el registro indicado',() =>{
    service.onDeleteService(0);
    expect(service.taskArray).toHaveLength(0);
  });


});
