import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

export const Page = () => {
  const [story, setStory] = useState('EMPTY');

  useEffect(() => {
    async function fetchStory() {
      const res = await fetch('/story');
      const data = await res.json();
      setStory(data);
    }
    fetchStory();
  }, []);

  return <div>{story === 'EMPTY' ? <></> : <App story={story.story} />}</div>;
};

const root = createRoot(document.getElementById('app')!);
root.render(<Page />);
