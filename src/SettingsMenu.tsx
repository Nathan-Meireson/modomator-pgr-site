import useLocalStorage from "use-local-storage";
import { Col, Divider, Row, Switch } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { latestVersion } from "./ChangeLog";
import { useThemeSwitcher } from "react-css-theme-switcher";

const SettingsDivider = styled(Divider)({
  margin: "10px 0",
});

const SettingsMenu = (): JSX.Element => {

  const [openInDiscord, setOpenInDiscord] = useLocalStorage("openInDiscord", true);

  const [usingMobile, setUsingMobile] = useLocalStorage("usingMobile", false);

  const [darkMode, setDarkMode] = useLocalStorage("darkMode", true);
  const { switcher, themes } = useThemeSwitcher();

  function toggleTheme(isChecked: boolean) {
    setDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  return (
    <div>
      <Row align="middle" gutter={[10, 0]}>
        <Col>Dark Mode</Col>
        <Col>
          <Switch defaultChecked={darkMode} onChange={toggleTheme} />
        </Col>
      </Row>
      <SettingsDivider />
      <Row align="middle" gutter={[10, 0]}>
        <Col>Open in Discord</Col>
        <Col>
          <Switch defaultChecked={openInDiscord} onChange={setOpenInDiscord} />
        </Col>
      </Row>
      <SettingsDivider />
      <Row align="middle" gutter={[10, 0]}>
        <Col>Using Mobile</Col>
        <Col>
          <Switch defaultChecked={usingMobile} onChange={setUsingMobile} />
        </Col>
      </Row>
      <Row justify="center">{`v${latestVersion}`}</Row>
      <Row justify="center">
        <Link to="modomator/changelog">View changelog</Link>
      </Row>
    </div>
  );
};

export default SettingsMenu;
