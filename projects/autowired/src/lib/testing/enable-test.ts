import { INJECTOR_TEST_BED, RUNNING_TEST } from '../tokens/running-test';
import { TestBedStatic } from '@angular/core/testing';

window[RUNNING_TEST] = false;

export function enableInjectionTesting(fn: TestBedStatic): void {
  window[RUNNING_TEST] = true;
  window[INJECTOR_TEST_BED] = fn;
}

export function isTesting(): boolean {
  return window[RUNNING_TEST] === true;
}
