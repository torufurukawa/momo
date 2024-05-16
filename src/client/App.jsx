import { Container, Overlay, Tooltip, Form, Button } from 'react-bootstrap'
import { useRef, useState, useEffect } from 'react'

export default function App({ story }) {
  const count = countCharacters(story.content);
  const [showTodos, setShowTodos] = useState(true)
  const [showNotes, setShowNotes] = useState(false)
  const [doubleSpace, setDoubleSpace] = useState(false)
  const state = { showTodos, setShowTodos, showNotes, setShowNotes, doubleSpace, setDoubleSpace };
  const text = stringify(story.content, { showTodos, showNotes });

  return (
    <Container className="mt-4">
      <ControlPanel count={count} text={text} state={state} />
      <h1>{story.title}</h1>
      <Content showTodos={showTodos} doubleSpace={doubleSpace}>{text}</Content>
    </Container >
  );
}

//
// Components
//

function ControlPanel({ count, text, state }) {
  return (
    <div className="mt-2 mb-2">
      <span className='badge rounded-pill bg-secondary'>{count} 字</span>
      <CopyButton text={text} className='badge bg-primary ms-1'>
        Copy
      </CopyButton>
      <div className="mt-2 mb-2">
        <Switch label="Show TODOs" state={state.showTodos} setState={state.setShowTodos} />
        <Switch label="Show notes" state={state.showNotes} setState={state.setShowNotes} />
        <Switch label="Double spacing" state={state.doubleSpace} setState={state.setDoubleSpace} />
      </div>
    </div>
  );
}

function Switch({ label, state, setState }) {
  return (
    <Form.Check
      type="switch"
      label={label}
      checked={state}
      onChange={() => { setState(!state) }} />
  );
}

function CopyButton({ text, children, className }) {
  const target = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleClick = () => {
      console.log("copied");
    }

    if (target.current) {
      target.current.addEventListener('click', handleClick);
    }

    return () => {
      if (target.current) {
        target.current.removeEventListener('click', handleClick);
      }
    };
  }, []);

  const el = (
    <>
      <Button
        className={className}
        style={{ cursor: 'pointer' }}
        ref={target}
        onClick={() => {
          console.log('copied');

          const result = navigator.clipboard.writeText(text);
          console.log(result);
          setShow(true);
        }}
        onMouseOut={() => { setShow(false) }}
      >
        {children}
      </Button>
      <Overlay target={target.current} show={show} placement='right'>
        <Tooltip>Copied</Tooltip>
      </Overlay>
    </>
  );

  return el;
}

function Content({ children, doubleSpace }) {
  const style = {
    whiteSpace: 'break-spaces',
    lineHeight: 2,
    fontFamily: "'Noto Serif JP', serif",
  }
  if (doubleSpace) {
    style.lineHeight = 4
  }
  console.log({ doubleSpace, style });
  return (
    <pre style={style}>
      {children}
    </pre>
  )
}


//
// Utilities
//

function countCharacters(content) {
  const count = content.children
    .filter(node => node.type === 'paragraph')

    // count for each paragraph
    .reduce((count, node) => {
      const innerCount = count + (node.children || [])
        .filter(node => node.type === 'text')
        // count inner texts
        .reduce((count, node) => count + node.value.length, 0)
      return innerCount
    }, 0)

  return count
}

function stringify(content, { showTodos, showNotes }) {
  const text = content.children
    .map(nodeToLines({ showTodos, showNotes }))
    .filter(nonNull)
    .map(linesToParagraph)
    .map(indent)
    .join('\n')
  return text
}

function nodeToLines({ showTodos, showNotes }) {
  return (node) => {
    if (node.type === 'paragraph') {
      const lines = (node.children || [])
        .map(node => {
          switch (node.type) {
            case 'text':
              return node.value
            case 'break':
              return '\n'
            case 'textDirective':
              return renderTextDirective(node, { showTodos, showNotes })
          }
        })
        .filter(nonNull)
      return lines
    }

    if (node.type === 'leafDirective') {
      return renderLeafDirective(node, { showTodos, showNotes })
    }

    if (node.type === 'containerDirective') {
      return renderContainerDirective(node, { showTodos, showNotes })
    }

    return null
  }
}

function nonNull(val) {
  return val !== null
}

function linesToParagraph(lines) {
  return lines.join('')
}

function indent(paragraph, i) {
  if (['「', '―'].includes(paragraph[0])) {
    return paragraph
  }
  return `　${paragraph}`
}

function renderTextDirective(node, { showTodos, showNotes }) {
  if (node.name === 'todo' && showTodos) {
    return `[TODO ${node.children[0].value || ''}]`
  }

  if (node.name === 'note' && showNotes) {
    return `[NOTE ${node.children[0].value || ''}]`
  }
}

function renderLeafDirective(node, { showTodos, showNotes }) {
  if (node.name === 'separator') {
    return ['']
  }

  if (node.name === 'todo' && showTodos) {
    return [`[TODO ${node.children[0].value}]`]
  }

  if (node.name === 'note' && showNotes) {
    return [`[NOTE ${node.children[0].value}]`]
  }

  return null
}

function renderContainerDirective(node, { showTodos, showNotes }) {
  if (
    (node.name === 'todo' && showTodos) ||
    (node.name === 'note' && showNotes)
  ) {
    const label = node.name.toUpperCase()
    const lines = nodeToLines({ showTodos: true })(node.children[0])
      .map((line) => `  ${line}`)  // indent
    lines.unshift(`[${label}\n`)
    lines.push('\n]')
    return lines
  }

  return null
}
