import "./App.css";
import emojipedia from "./components/EmojiData";
import Emoji from "./components/Emoji";

function App() {
  function emojiData(e) {
    return (
      <Emoji key={e.id} emoji={e.emoji} heading={e.name} text={e.meaning} />
    );
  }

  return (
    <div className="App">
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(emojiData)}</dl>
    </div>
  );
}
export default App;
