import './App.scss';
import { useState } from 'react';
import { marked } from 'marked';

//a heading element (H1 size), 
//a sub heading element (H2 size), a link, 
//inline code, a code block, 
//a list item, a blockquote, an image, 
//and bolded text.
function App() {
  const [textval, settextval] = useState(`
  # H1
  ## H2 
  [Github] (https://github.com/TharunNB)
  \`code\`
  \`\`\`
  {
    "firstName" : "Tharun",
    "lastName" : "NB"
  }
  \`\`\`
  - first
  - second
  - third
  ![alt text](image.jpg)
  >hi
  **hi**
  
  `) ;

  const handletextcchange = event => {
    settextval(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className='float-child'><textarea 
        id='editor'
        value={textval}
        onChange={handletextcchange}/>
      </div>
      <div className='float-child'>
        <div id='preview' 
        dangerouslySetInnerHTML={{
          __html: marked.parse(textval),
          }}></div>
      </div>
      </header>
    </div>
  );
}

export default App;
