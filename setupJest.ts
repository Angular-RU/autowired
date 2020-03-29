import 'reflect-metadata';
import 'jest-preset-angular';

const jsdom: any = require('jsdom');
const { JSDOM }: any = jsdom;

const dom: any = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');

global['window'] = dom.window;
global['document'] = dom.window.document;

// Simulate window resize events
const resizeEvent: any = document.createEvent('Event');
resizeEvent.initEvent('resize', true, true);

global['window'].resizeTo = (width: number): void => {
  global['window'].innerWidth = width || global['window'].innerWidth;
  global['window'].innerHeight = width || global['window'].innerHeight;
  global['window'].dispatchEvent(resizeEvent);
};
