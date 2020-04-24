# ngBootstrapToast
<p>Directive for Toasts components from Bootstrap 4.4</p>
<a href='https://plnkr.co/edit/1wRiKeMTG13Btt6c' target='_blank'>See demo - Plunker</a>

## Why i made it?
  It will make .toast() component from Bootstrap readable for ngIfs / ngSwitch and Scopes support

## Dependencies
<ul>
  <li><a href='https://angularjs.org/' target='_blank'>AngularJS</a></li>
  <li><a href='https://getbootstrap.com/docs/4.4/getting-started/introduction/' target='_blank'>Bootstrap 4.4.x (including all its dependencies)</a></li>
 </ul>

## Attributes
| Item    | Description                                | Type
|---------|--------------------------------------------|------
| delay   | timeout to close the toast in milliseconds | int
| avatar  | Image where shows on left side of title    | Url or relative path
| tid     | Toast id required from component           | string
| title   | Title of the toast                         | string
| message | Message of the toast                       | string

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

### Multiple Toast use
When used at this way, it will needed to add the element inside of ngRepeat and on the ``tid`` attribute will be needed insert the $index from scope array

<b>Html Element</b>
```html
<div ng-repeat="t in toasters">
  <ng-bootstrap-toast delay="{{t.delay}}" avatar="{{t.avatar}}" tid="{{t.id + $index}}" title="{{t.title}}" message="{{t.message}}"></ng-bootstrap-toast>
</div>
```
<b>AngularJS Scope</b>
```js
$scope.toasters = [
  {
    delay: 10000,
    avatar: 'my/img/url.jpg',
    id: 12345,
    title: 'My first toast title',
    message: 'Here is my first message'
  },
  {
    delay: 10000,
    avatar: 'my/img/url.jpg',
    id: 12345,
    title: 'My second toast title',
    message: 'Here is my second message'
  }
]
```
# Limitations
This directive were not tested on older or different version what are used on src files or plunker demo
