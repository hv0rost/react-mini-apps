import { useState } from "react"
import "./index.scss"

function Dialog({ dialog, setDialog, children }) {
  return (
    <div className={dialog ? "overlay show" : "overlay animated"}>
      <div className="modal">
        <svg
          height="200"
          viewBox="0 0 200 200"
          width="200"
          onClick={() => setDialog(false)}
        >
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        {children}
      </div>
    </div>
  )
}

function App() {
  const [dialog, setDialog] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setDialog(true)} className="open-modal-btn">
        ✨ Открыть окно
      </button>

      {/* {dialog && (
        <div className="overlay">
          <div className="modal">
            <svg
              height="200"
              viewBox="0 0 200 200"
              width="200"
              onClick={() => setDialog(false)}
            >
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
          </div>
        </div>
      )} */}
      <Dialog dialog={dialog} setDialog={setDialog}>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
      </Dialog>
    </div>
  )
}

export default App
