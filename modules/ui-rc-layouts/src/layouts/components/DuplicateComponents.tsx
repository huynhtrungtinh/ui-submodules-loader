import { redirectApp } from "@dgtx/ui-core";
import Button from "@material-ui/core/Button";
import * as React from "react";
import { Translate } from 'react-redux-i18n';
import { KEY_TRANSLATE } from '../constants';
const handleRedirectApp = () => {
  redirectApp("home");
};
function DuplicateComponents(props: any) {
  const { username } = props;
  return (
    <div style={{ textAlign: "center" }}>
      <h1><Translate value={`${KEY_TRANSLATE}.header.duplicate.title`} /></h1>
      <h2><Translate value={`${KEY_TRANSLATE}.header.duplicate.content`} username={username} /></h2>
      <Button
        color="primary"
        autoFocus={true}
        onClick={handleRedirectApp}
      >
        <Translate value={`${KEY_TRANSLATE}.header.duplicate.button`} />
      </Button>
    </div>
  );
}
export { DuplicateComponents };
export default DuplicateComponents;
