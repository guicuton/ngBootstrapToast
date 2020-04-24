# ngBootstrapToast
Directive for Toasts components from Bootstrap 4.4

## Why i made it?
  It will make .toast() component from Bootstrap readable for ngIfs / ngSwitch and Scopes support

### Single Toast use
<b>Html Element</b>
```html
<ng-bootstrap-toast delay="{{delay}}" avatar="{{avatar}}" tid="{{id}}" title="{{title}}" message="{{message}}"></ng-bootstrap-toast>
```
<b>AngularJS Scope</b>
```js
$scope.toast = {
  delay: 10000,
  avatar: 'my/img/url.jpg',
  id: 12345,
  title: 'My toast title',
  message: 'Here is my message'
};
```
