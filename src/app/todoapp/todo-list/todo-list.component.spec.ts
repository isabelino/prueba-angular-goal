import { TodoServices } from '../todo-services.service';
import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let fixture: TodoListComponent;
  let todoservices: TodoServices

  beforeEach(() => {
    fixture = new TodoListComponent(todoservices);
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });


});
