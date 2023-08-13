import { leave } from './leave';
import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task()).toBeTruthy();
  });
});



describe('leave', () => {
  it('should create an instance', () => {
    expect(new leave()).toBeTruthy();
  });
});