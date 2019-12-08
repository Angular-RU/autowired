## Simple Dependency Injection with BeanAccessible

```bash
$ npm install --save-dev @angular-ru/autowired
```

The decorator `@Autowired` tells the Angular application that the class it is underlined is a service, that is, a candidate for automatic detection (DI).

#### Before

app.module.ts

```ts
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [ServiceA, ServiceB, ServiceC, ServiceD],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

base.component.ts

```ts
export class BaseComponent {
 constructor(
    private c: ServiceC,
    private d: ServiceD
 ) {}

 ...
}
```

app.component.ts

```ts
export class AppComponent extends BaseComponent {
 constructor(
    private a: ServiceC,
    private b: ServiceD,
    private c: ServiceC,
    private d: ServiceD
 ) {
   super(c, d);
 }

 ...
}
```

#### After

app.module.ts

```ts
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BeanAccessibleModule.forRoot()],
  providers: [ServiceA, ServiceB, ServiceC, ServiceD],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

base.component.ts

```ts
export class BaseComponent {
 @Autowired() private c: ServiceC;
 @Autowired() private d: ServiceD;

 ...
}
```

app.component.ts

```ts
export class AppComponent extends BaseComponent {
 @Autowired() private a: ServiceA;
 @Autowired() private b: ServiceB;

 ...
}
```
