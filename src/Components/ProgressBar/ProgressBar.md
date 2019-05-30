ProgressBar progress = 0%:

```js
<ProgressBar progress={0} />
```

ProgressBar progress = 45%:

```js
<ProgressBar progress={45} />
```

```js
<ProgressBar progress={5} />
```

ProgressBar with animated color change:

```js
import React, { Component } from 'react';
import Button from '../Form/Button/Button';

class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = { progress: 10 };
    this.startProcess = this.startProcess.bind(this);
  }

  startProcess(){
    var progress = this.state.progress;
    console.log(progress);
    if(progress >= 100) return console.log('process ended');
    this.setState({ progress: progress + 15 });
    setTimeout(this.startProcess, 750);
  }

  render(){
    return(
      <div>
        <ProgressBar colored progress={this.state.progress} />
        <Button onClick={() => { console.log('process started'); this.startProcess() }}  value="start process" />
      </div>
    )
  }
}

<Demo />

```
