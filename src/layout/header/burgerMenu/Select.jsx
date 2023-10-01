import React from "react";
import { Select, Space } from "antd";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const App = () => (
  <Select
    defaultValue="English"
    style={{
      width: 120,
    }}
    onChange={handleChange}
    options={[
      {
        value: "Deutsch",
        label: "Deutsch",
      },
      {
        value: "English",
        label: "English",
      },
      {
        value: "Español",
        label: "Español",
      },
      {
        value: "Français",
        label: "Français",
      },
      {
        value: "Italiano",
        label: "Italiano",
      },
      {
        value: "日本語",
        label: "日本語",
      },
      {
        value: "한국어",
        label: "한국어",
      },
      {
        value: "Português (Brasil)",
        label: "Português (Brasil)",
      },
    ]}
  />
);
export default App;
