import Timer from "./components/Timer";
import Settings from "./components/Settings";
import SettingsContext from "./components/SettingsContext";

import { useState } from "react";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25); // Başlangıç değeri olarak 25 dakika çalışma süresi verildi.
  const [breakMinutes, setBreakMinutes] = useState(5); // Başlangıç değeri olarak 5 dakika ara verildi.
  return (
    <>
      <main>
        <SettingsContext.Provider
          value={{
            showSettings,
            setShowSettings,
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes,
          }}
        >
          {showSettings ? <Settings /> : <Timer />}
        </SettingsContext.Provider>
      </main>
    </>
  );
}

export default App;
