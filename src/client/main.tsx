import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

export const Page = () => {
  const [story, setStory] = useState(null);

  useEffect(() => {
    async function fetchStory() {
      const res = await fetch('/story');
      const data = await res.json();
      setStory(data.story);
    }
    fetchStory();
  }, []);

  return <div>{story ? <App story={story} /> : <></>}</div>;
};

const root = createRoot(document.getElementById('app')!);
root.render(<Page />);
