Input example:

```js
<Input placeholder="me@voloshinskii.ru" label="email"/>
<Input className="success" placeholder="me@voloshinskii.ru" label="email"/>
<Input className="warning" placeholder="me@voloshinskii.ru" label="email"/>
<Input className="error" placeholder="me@voloshinskii.ru" label="email"/>
```

Notify function example

```html
notify = (name, isValid) => {
  this.setState({ [name]: isValid, });
};
```
