import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// TODO introduce container component

export const Page = () => {
  // TODO remove empty
  const [story, setStory] = useState(null);

  useEffect(() => {
    async function fetchStory() {
      const res = await fetch('/story');
      const data = await res.json();
      setStory(data);
    }
    fetchStory();
  }, []);
  // TODO move this file to src directory

  // TODO fix warnings
  return <div>{story ? <App story={story.story} /> : <></>}</div>;
};

const root = createRoot(document.getElementById('app')!);
root.render(<Page />);
